import * as THREE from 'three';
import { sounds } from '../components/SoundEffects.js';

// Preallocated scratch vectors for 3D segment collision detection (zero GC overhead)
const _p1A = new THREE.Vector3();
const _p2A = new THREE.Vector3();
const _p1B = new THREE.Vector3();
const _p2B = new THREE.Vector3();
const _dirA = new THREE.Vector3();
const _dirB = new THREE.Vector3();
const _u = new THREE.Vector3();
const _v = new THREE.Vector3();
const _w = new THREE.Vector3();
const _closestA = new THREE.Vector3();
const _closestB = new THREE.Vector3();

// Exact shortest distance and closest points between two 3D stick segments
function getStickSegmentDistance(stickA, stickB, outClosestA, outClosestB) {
  _dirA.set(0, 1, 0).applyQuaternion(stickA.mesh.quaternion);
  const halfLA = stickA.length * 0.5;
  _p1A.copy(stickA.pos).addScaledVector(_dirA, halfLA);
  _p2A.copy(stickA.pos).addScaledVector(_dirA, -halfLA);

  _dirB.set(0, 1, 0).applyQuaternion(stickB.mesh.quaternion);
  const halfLB = stickB.length * 0.5;
  _p1B.copy(stickB.pos).addScaledVector(_dirB, halfLB);
  _p2B.copy(stickB.pos).addScaledVector(_dirB, -halfLB);

  _u.subVectors(_p2A, _p1A);
  _v.subVectors(_p2B, _p1B);
  _w.subVectors(_p1A, _p1B);

  const a = _u.dot(_u);
  const b = _u.dot(_v);
  const c = _v.dot(_v);
  const d = _u.dot(_w);
  const e = _v.dot(_w);
  const D = a * c - b * b;

  let sc, sN, sD = D;
  let tc, tN, tD = D;

  if (D < 0.0001) {
    sN = 0.0;
    sD = 1.0;
    tN = e;
    tD = c;
  } else {
    sN = (b * e - c * d);
    tN = (a * e - b * d);
    if (sN < 0.0) {
      sN = 0.0;
      tN = e;
      tD = c;
    } else if (sN > sD) {
      sN = sD;
      tN = e + b;
      tD = c;
    }
  }

  if (tN < 0.0) {
    tN = 0.0;
    if (-d < 0.0) sN = 0.0;
    else if (-d > a) sN = sD;
    else {
      sN = -d;
      sD = a;
    }
  } else if (tN > tD) {
    tN = tD;
    if ((-d + b) < 0.0) sN = 0;
    else if ((-d + b) > a) sN = sD;
    else {
      sN = (-d + b);
      sD = a;
    }
  }

  sc = (Math.abs(sN) < 0.0001 ? 0.0 : sN / sD);
  tc = (Math.abs(tN) < 0.0001 ? 0.0 : tN / tD);

  outClosestA.copy(_u).multiplyScalar(sc).add(_p1A);
  outClosestB.copy(_v).multiplyScalar(tc).add(_p1B);

  return outClosestA.distanceTo(outClosestB);
}

// Single 3D kinetic stick with silky-smooth aerodynamic flight physics & continuous card diving
class KineticStick {
  constructor(material, bounds) {
    this.bounds = bounds;

    // Slender, refined dimensions (length 38-70px, radius 1.4-2.2px)
    this.length = Math.random() * 32 + 38;
    this.radius = Math.random() * 0.8 + 1.4;

    // 3D Capsule geometry for sleek rounded wooden sticks
    const geo = new THREE.CapsuleGeometry(
      this.radius,
      this.length,
      6,
      12
    );
    geo.computeVertexNormals();

    this.mesh = new THREE.Mesh(geo, material);
    this.mesh.renderOrder = -2; // Render behind 3D cards layer

    // Cruising depth in open areas (-35 to -55): always safely behind cards (z = 0)
    this.baseZ = -35 - Math.random() * 20;

    // Initial position
    this.pos = new THREE.Vector3(0, 0, this.baseZ);
    this.targetOpacity = 1.0;

    // Initial random 3D orientation
    this.mesh.rotation.set(
      Math.random() * Math.PI * 2,
      Math.random() * Math.PI * 2,
      Math.random() * Math.PI * 2
    );

    // Tumbling physics using 3D Axis-Angle (zero gimbal lock, zero jitter)
    this.rotAxis = new THREE.Vector3(
      Math.random() - 0.5,
      Math.random() - 0.5,
      Math.random() - 0.5
    ).normalize();
    this.baseRotSpeed = (Math.random() * 0.002 + 0.0016) * (Math.random() < 0.5 ? 1 : -1);
    this.rotSpeed = this.baseRotSpeed;

    // Slow, meditative flight velocity
    this.velocity = new THREE.Vector3(
      (Math.random() - 0.5) * 0.2,
      (Math.random() - 0.5) * 0.2,
      0
    );

    // Harmonic air current seeds (unique to each stick)
    this.seedX = Math.random() * 100;
    this.seedY = Math.random() * 100;
    this.seedZ = Math.random() * 100;
    this.speedMult = Math.random() * 0.25 + 0.35;
  }

  update(delta, time, mouseWorld, mouseVel, cardBoxes) {
    // Smooth opacity fading for on-screen density regulation (8-16 sticks maximum)
    if (this.mesh.material) {
      this.mesh.material.opacity += (this.targetOpacity - this.mesh.material.opacity) * 0.08;
      this.mesh.visible = this.mesh.material.opacity > 0.02;
    }

    if (!this.mesh.visible && this.targetOpacity <= 0.01) {
      return; // Skip physics computation for fully faded offscreen sticks
    }

    // 1. Silky-Smooth Organic Harmonic Flow Field (100% deterministic, zero white noise)
    const t = time * 0.12;
    const targetFlowX = (Math.sin(t * 0.85 + this.seedX) * 0.26 + Math.cos(t * 0.4 + this.seedY) * 0.16) * this.speedMult;
    const targetFlowY = (Math.cos(t * 0.75 + this.seedY) * 0.24 + Math.sin(t * 0.35 + this.seedZ) * 0.14) * this.speedMult;

    // Smoothly ease velocity toward flow field
    this.velocity.x += (targetFlowX - this.velocity.x) * 0.025;
    this.velocity.y += (targetFlowY - this.velocity.y) * 0.025;

    // 2. Interactive Cursor Breeze (only active when user is moving the mouse on screen)
    const mouseSpeed = mouseVel ? mouseVel.length() : 0;
    if (mouseWorld && mouseSpeed > 0.02) {
      const dx = this.pos.x - mouseWorld.x;
      const dy = this.pos.y - mouseWorld.y;
      const dist = Math.hypot(dx, dy);
      const breezeRadius = 240;

      if (dist < breezeRadius && dist > 1) {
        const factor = 1.0 - dist / breezeRadius;
        // Smoothstep curve for seamless acceleration
        const smoothFactor = factor * factor * (3.0 - 2.0 * factor);
        const push = smoothFactor * Math.min(mouseSpeed * 0.12, 0.35);

        this.velocity.x += (dx / dist) * push;
        this.velocity.y += (dy / dist) * push;

        // Gently spin faster during breeze wake without any sudden angle jumps
        this.rotSpeed += (this.baseRotSpeed > 0 ? 1 : -1) * smoothFactor * 0.0003;
      }
    }

    // Smoothly clamp maximum velocity to prevent sticks being flung out of sight
    const currentSpeed = this.velocity.length();
    const maxSpeed = 5.0;
    if (currentSpeed > maxSpeed) {
      this.velocity.multiplyScalar(maxSpeed / currentSpeed);
    }

    // Smoothly restore base rotation speed
    this.rotSpeed += (this.baseRotSpeed - this.rotSpeed) * 0.02;

    // 3. Card Proximity & Continuous Depth Diving:
    // Sticks fly straight through cards without being deflected or pushed away.
    // When passing under/through cards, sticks dive smoothly deeper in Z (~ -75 to -95)
    // to guarantee they remain safely behind the card even during wave deformations.
    let maxCardInfluence = 0;
    const approachMargin = 40;

    if (cardBoxes && cardBoxes.length > 0) {
      for (let i = 0; i < cardBoxes.length; i++) {
        const box = cardBoxes[i];
        const dx = Math.abs(this.pos.x - box.x);
        const dy = Math.abs(this.pos.y - box.y);

        if (dx < box.halfW + approachMargin && dy < box.halfH + approachMargin) {
          const ratioX = Math.max(0, 1.0 - dx / (box.halfW + approachMargin));
          const ratioY = Math.max(0, 1.0 - dy / (box.halfH + approachMargin));
          const cardOverlap = Math.min(ratioX, ratioY);
          const smoothOverlap = cardOverlap * cardOverlap * (3.0 - 2.0 * cardOverlap);

          if (smoothOverlap > maxCardInfluence) {
            maxCardInfluence = smoothOverlap;
          }
        }
      }
    }

    // Continuous target Z depth:
    // In open air: baseZ (-35 to -55)
    // Directly behind card: baseZ - 40 (~ -75 to -95, safely behind card at z = 0)
    const targetZ = this.baseZ - maxCardInfluence * 40;

    // Smooth spring interpolation in Z (depth gliding)
    this.pos.z += (targetZ - this.pos.z) * 0.06;

    // Apply drag & update XY position
    this.velocity.multiplyScalar(0.975);
    this.pos.x += this.velocity.x;
    this.pos.y += this.velocity.y;
    this.mesh.position.copy(this.pos);

    // 4. Meditative 3D Tumbling via Axis-Angle (zero gimbal lock!)
    this.mesh.rotateOnAxis(this.rotAxis, this.rotSpeed);

    // 5. Soft boundary bounce (never teleport across the screen!)
    const halfW = this.bounds.width * 0.72;
    const topLimit = 650;
    const bottomLimit = -this.bounds.height - 350;

    if (this.pos.x > halfW) {
      this.pos.x = halfW;
      this.velocity.x = -Math.abs(this.velocity.x) * 0.4 - 0.05;
    } else if (this.pos.x < -halfW) {
      this.pos.x = -halfW;
      this.velocity.x = Math.abs(this.velocity.x) * 0.4 + 0.05;
    }

    if (this.pos.y > topLimit) {
      this.pos.y = topLimit;
      this.velocity.y = -Math.abs(this.velocity.y) * 0.4 - 0.05;
    } else if (this.pos.y < bottomLimit) {
      this.pos.y = bottomLimit;
      this.velocity.y = Math.abs(this.velocity.y) * 0.4 + 0.08;
    }
  }

  applyImpulse(fx, fy, spin = 0) {
    this.velocity.x += fx;
    this.velocity.y += fy;
    if (spin) {
      this.rotSpeed += spin;
    }
  }
}

// Manager class for all kinetic sticks
export class Sticks {
  constructor(container) {
    this.parent = container;
    // Total sticks distributed across the full 2400px gallery length
    // Calibrated so that on-screen count is always strictly between 8 and 16
    this.count = 32;
    this.sticks = [];
    this.mouse = new THREE.Vector2(0, 0);
    this.prevMouse = new THREE.Vector2(0, 0);
    this.mouseVel = new THREE.Vector2(0, 0);
    this.lastTime = performance.now() * 0.001;

    this.bounds = {
      width: window.innerWidth,
      height: 2400
    };

    this.init();
  }

  init() {
    this.container = new THREE.Group();
    // Render order -2: drawn behind 3D card layer
    this.container.renderOrder = -2;
    this.parent.add(this.container);

    // Warm directional lights dedicated to sculpting 3D cylinder highlights
    const keyLight = new THREE.DirectionalLight(0xfff6ee, 1.8);
    keyLight.position.set(220, 450, 320);
    this.container.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xd4cac0, 0.9);
    fillLight.position.set(-220, -220, 160);
    this.container.add(fillLight);

    // Architectural color palette: warm walnut, birch, taupe, sepia, champagne ivory
    const baseMaterials = [
      new THREE.MeshStandardMaterial({
        color: 0x5c483a, // Deep walnut wood
        roughness: 0.62,
        metalness: 0.06,
        transparent: true,
        opacity: 1.0
      }),
      new THREE.MeshStandardMaterial({
        color: 0x8c7362, // Earthy taupe wood
        roughness: 0.65,
        metalness: 0.05,
        transparent: true,
        opacity: 1.0
      }),
      new THREE.MeshStandardMaterial({
        color: 0xb8a291, // Sandy drift birch
        roughness: 0.6,
        metalness: 0.08,
        transparent: true,
        opacity: 1.0
      }),
      new THREE.MeshStandardMaterial({
        color: 0x3e3128, // Dark sepia twig
        roughness: 0.68,
        metalness: 0.04,
        transparent: true,
        opacity: 1.0
      }),
      new THREE.MeshStandardMaterial({
        color: 0xa47c5d, // Warm caramel wood
        roughness: 0.64,
        metalness: 0.06,
        transparent: true,
        opacity: 1.0
      }),
      new THREE.MeshStandardMaterial({
        color: 0xd5c5b7, // Light champagne birch
        roughness: 0.58,
        metalness: 0.08,
        transparent: true,
        opacity: 1.0
      })
    ];

    // Distribute 40 sticks in a 5-column by 8-row dispersed grid (guaranteeing 190px+ spacing)
    const cols = 5;
    const rows = 8;
    this.count = cols * rows; // 40 sticks total across gallery height

    const totalW = this.bounds.width * 1.25;
    const totalH = this.bounds.height + 400;
    const colStep = totalW / cols;
    const rowStep = totalH / rows;

    let stickIndex = 0;
    for (let r = 0; r < rows; r++) {
      const cellCenterY = 320 - (r + 0.5) * rowStep;

      for (let c = 0; c < cols; c++) {
        const cellCenterX = -totalW * 0.5 + (c + 0.5) * colStep;

        const mat = baseMaterials[stickIndex % baseMaterials.length].clone();
        const stick = new KineticStick(mat, this.bounds);

        // Organic jitter within cell (maintains at least 190px distance from neighbors)
        const jitterX = (Math.random() - 0.5) * colStep * 0.4;
        const jitterY = (Math.random() - 0.5) * rowStep * 0.4;

        stick.pos.x = cellCenterX + jitterX;
        stick.pos.y = cellCenterY + jitterY;
        stick.mesh.position.copy(stick.pos);

        this.sticks.push(stick);
        this.container.add(stick.mesh);
        stickIndex++;
      }
    }
  }

  setMouse(normX, normY) {
    const curX = normX * (window.innerWidth * 0.5);
    const curY = normY * (window.innerHeight * 0.5);

    // Calculate cursor velocity with smooth low-pass filtering
    const instVelX = (curX - this.prevMouse.x) * 0.15;
    const instVelY = (curY - this.prevMouse.y) * 0.15;
    this.mouseVel.x += (instVelX - this.mouseVel.x) * 0.4;
    this.mouseVel.y += (instVelY - this.mouseVel.y) * 0.4;

    this.prevMouse.x = curX;
    this.prevMouse.y = curY;
    this.mouse.x = curX;
    this.mouse.y = curY;
  }

  update(time, containerY = 0, activeCards = []) {
    const now = time || performance.now() * 0.001;
    const delta = Math.min(0.05, now - this.lastTime);
    this.lastTime = now;

    // Decay mouse velocity smoothly when idle
    this.mouseVel.multiplyScalar(0.85);

    // Cursor position in container coordinates
    const mouseWorld = {
      x: this.mouse.x,
      y: this.mouse.y - containerY
    };

    // Calculate local bounding boxes of cards inside the container
    const cardBoxes = [];
    if (activeCards && activeCards.length > 0) {
      for (let i = 0; i < activeCards.length; i++) {
        const card = activeCards[i];
        if (card.group && card.group.visible) {
          cardBoxes.push({
            x: card.group.position.x,
            y: card.group.position.y - 25,
            halfW: (card.width || 480) * 0.5 + 20,
            halfH: (card.height || 280) * 0.5 + 55
          });
        }
      }
    }

    // Regulate visible sticks count on screen: strictly between 8 and 16 maximum
    // Generous boundary margin so sticks smoothly enter/exit rather than popping at edge
    const screenHalfW = (window.innerWidth * 0.5) + 160;
    const screenHalfH = (window.innerHeight * 0.5) + 160;

    const onScreenList = [];
    for (let i = 0; i < this.sticks.length; i++) {
      const stick = this.sticks[i];
      const screenY = stick.pos.y + containerY;
      const isInside = Math.abs(stick.pos.x) <= screenHalfW && Math.abs(screenY) <= screenHalfH;

      // Distance to cursor in container coordinates
      const distToCursor = Math.hypot(stick.pos.x - mouseWorld.x, stick.pos.y - mouseWorld.y);
      const isNearCursor = distToCursor < 320;

      if (isInside || isNearCursor) {
        const distFromCenter = Math.hypot(stick.pos.x, screenY);
        onScreenList.push({ stick, dist: distFromCenter, isNearCursor });
      } else {
        stick.targetOpacity = 0.0;
      }
    }

    // Near-cursor sticks get top priority (immune to culling), followed by center-most sticks
    onScreenList.sort((a, b) => {
      if (a.isNearCursor && !b.isNearCursor) return -1;
      if (!a.isNearCursor && b.isNearCursor) return 1;
      return a.dist - b.dist;
    });

    // Hard clamp: maximum 16 sticks on screen simultaneously (while keeping near-cursor sticks visible)
    const maxOnScreen = 16;
    for (let i = 0; i < onScreenList.length; i++) {
      if (i < maxOnScreen || onScreenList[i].isNearCursor) {
        onScreenList[i].stick.targetOpacity = 1.0;
      } else {
        onScreenList[i].stick.targetOpacity = 0.0;
      }
    }

    // -------------------------------------------------------------
    // Physical Collision Detection & Elastic Rebound + Breathing Cushion
    // -------------------------------------------------------------
    for (let i = 0; i < this.sticks.length; i++) {
      const stickA = this.sticks[i];
      for (let j = i + 1; j < this.sticks.length; j++) {
        const stickB = this.sticks[j];

        const dx = stickA.pos.x - stickB.pos.x;
        const dy = stickA.pos.y - stickB.pos.y;
        const centerDistSq = dx * dx + dy * dy;

        // Skip distant pairs completely (far beyond any stick interaction)
        if (centerDistSq > 175 * 175) continue;

        const centerDist = Math.sqrt(centerDistSq) || 1;

        // 1. Gentle ambient breathing cushion (preserves pleasant spacing during calm flight)
        if (centerDist < 145) {
          const cushionOverlap = 1.0 - (centerDist / 145);
          const cushionPush = cushionOverlap * 0.045;
          const cnx = (dx / centerDist) * cushionPush;
          const cny = (dy / centerDist) * cushionPush;
          stickA.velocity.x += cnx;
          stickA.velocity.y += cny;
          stickB.velocity.x -= cnx;
          stickB.velocity.y -= cny;
        }

        // 2. Physical 3D Segment Collision Check
        const maxCollisionReach = (stickA.length + stickB.length) * 0.5 + 10;
        if (centerDist < maxCollisionReach) {
          const segDist3D = getStickSegmentDistance(stickA, stickB, _closestA, _closestB);

          // Check 2D projected segment distance in XY plane and depth difference
          const segDx = _closestA.x - _closestB.x;
          const segDy = _closestA.y - _closestB.y;
          const segDistXY = Math.hypot(segDx, segDy);
          const depthDiff = Math.abs(_closestA.z - _closestB.z);

          // Physical collision triggers when sticks actually touch in 3D or visual 2D space
          const contactRadius = stickA.radius + stickB.radius + 6.0; // ~10-12px
          const isColliding = (segDist3D < contactRadius) || (segDistXY < contactRadius && depthDiff < 24);

          if (isColliding) {
            // Collision normal
            let nx = segDx;
            let ny = segDy;
            const normLen = Math.hypot(nx, ny);
            if (normLen > 0.001) {
              nx /= normLen;
              ny /= normLen;
            } else {
              nx = dx / centerDist;
              ny = dy / centerDist;
            }

            // A. Immediate Positional Separation (prevents clipping through each other)
            const overlap = Math.max(0, contactRadius - segDistXY);
            if (overlap > 0) {
              const sep = overlap * 0.55;
              stickA.pos.x += nx * sep;
              stickA.pos.y += ny * sep;
              stickB.pos.x -= nx * sep;
              stickB.pos.y -= ny * sep;
              stickA.mesh.position.copy(stickA.pos);
              stickB.mesh.position.copy(stickB.pos);
            }

            // B. Elastic Momentum Exchange / Rebound Impulse
            const relVelX = stickA.velocity.x - stickB.velocity.x;
            const relVelY = stickA.velocity.y - stickB.velocity.y;
            const velAlongNormal = relVelX * nx + relVelY * ny;

            // Restitution for crisp wooden rebound (0.85)
            const restitution = 0.85;
            let impulse = 0;
            if (velAlongNormal < 0) {
              impulse = -(1 + restitution) * velAlongNormal;
            }
            // Minimum tactile pop so even slow grazing contacts visibly bounce apart
            impulse = Math.max(impulse, 0.58);

            const impX = nx * impulse * 0.5;
            const impY = ny * impulse * 0.5;

            stickA.velocity.x += impX;
            stickA.velocity.y += impY;
            stickB.velocity.x -= impX;
            stickB.velocity.y -= impY;

            // C. Rotational Reaction (Impact Torque & Tumbling Deflection)
            const spinKick = (Math.random() < 0.5 ? 1 : -1) * (0.004 + impulse * 0.0035);
            stickA.rotSpeed = -stickA.rotSpeed * 0.6 + spinKick;
            stickB.rotSpeed = -stickB.rotSpeed * 0.6 - spinKick;

            // Perturb rotation axes by collision impact
            stickA.rotAxis.x += ny * 0.35;
            stickA.rotAxis.y -= nx * 0.35;
            stickA.rotAxis.normalize();

            stickB.rotAxis.x -= ny * 0.35;
            stickB.rotAxis.y += nx * 0.35;
            stickB.rotAxis.normalize();

            // D. Subtle acoustic wood clack sound (if sticks are visible on screen)
            if (stickA.mesh.visible || stickB.mesh.visible) {
              sounds.playWoodClack(Math.min(0.045, 0.02 + impulse * 0.02));
            }
          }
        }
      }
    }

    // Update all sticks with smooth physics
    for (let i = 0; i < this.sticks.length; i++) {
      this.sticks[i].update(delta, now, mouseWorld, this.mouseVel, cardBoxes);
    }
  }

  onResize(maxHeight) {
    this.bounds.width = window.innerWidth;
    if (maxHeight && maxHeight > 500) {
      this.bounds.height = maxHeight;
    }
  }

  getStickScreenSegments() {
    const parentY = this.parent ? this.parent.position.y : 0;
    const screenCenterX = window.innerWidth * 0.5;
    const screenCenterY = window.innerHeight * 0.5;
    const segments = [];

    for (let i = 0; i < this.sticks.length; i++) {
      const s = this.sticks[i];
      if (!s.mesh.visible || (s.mesh.material && s.mesh.material.opacity < 0.2)) continue;

      const worldX = s.pos.x;
      const worldY = s.pos.y + parentY;

      const sx = screenCenterX + worldX;
      const sy = screenCenterY - worldY;

      if (sx < -100 || sx > window.innerWidth + 100 || sy < -100 || sy > window.innerHeight + 100) {
        continue;
      }

      _dirA.set(0, 1, 0).applyQuaternion(s.mesh.quaternion);
      const halfL = s.length * 0.5;

      const dx = _dirA.x * halfL;
      const dy = -_dirA.y * halfL; // Invert for screen Y

      segments.push({
        stick: s,
        x1: sx - dx,
        y1: sy - dy,
        x2: sx + dx,
        y2: sy + dy,
        cx: sx,
        cy: sy,
        radius: s.radius || 2,
        length: s.length,
        depthZ: s.pos.z
      });
    }

    return segments;
  }
}
