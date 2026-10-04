import * as THREE from 'three';

// Procedural high-resolution wing texture with delicate beige/champagne botanical veins
function createWingTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');

  ctx.clearRect(0, 0, 512, 512);

  // Radial base gradient: warm ivory base to champagne beige and sepia margin
  const grad = ctx.createRadialGradient(50, 256, 15, 256, 256, 360);
  grad.addColorStop(0.0, '#fffbf7'); // Pure ivory base
  grad.addColorStop(0.25, '#f7ede4'); // Soft warm cream
  grad.addColorStop(0.55, '#ecdccf'); // Champagne beige
  grad.addColorStop(0.82, '#dec4b3'); // Warm sand beige
  grad.addColorStop(0.94, '#c8ad9c'); // Muted taupe
  grad.addColorStop(1.0, '#8c7060'); // Delicate sepia margin

  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 512, 512);

  // Organic vein network radiating from base
  ctx.strokeStyle = 'rgba(120, 96, 82, 0.40)';
  ctx.lineWidth = 3.2;
  ctx.lineCap = 'round';

  const veins = [
    // Forewing branches
    [[40, 256], [140, 190], [250, 110], [380, 55], [470, 60]],
    [[140, 190], [270, 150], [420, 120], [490, 140]],
    [[140, 190], [290, 200], [470, 210]],
    [[150, 230], [320, 250], [480, 280]],
    [[150, 230], [290, 280], [440, 330]],

    // Hindwing branches
    [[40, 256], [140, 310], [260, 370], [400, 420]],
    [[140, 310], [240, 410], [350, 470]],
    [[110, 330], [190, 430], [270, 485]],
    [[70, 300], [130, 390], [180, 460]]
  ];

  veins.forEach(pts => {
    ctx.beginPath();
    ctx.moveTo(pts[0][0], pts[0][1]);
    for (let i = 1; i < pts.length; i++) {
      const prev = pts[i - 1];
      const curr = pts[i];
      const mx = (prev[0] + curr[0]) / 2;
      const my = (prev[1] + curr[1]) / 2;
      ctx.quadraticCurveTo(prev[0], prev[1], mx, my);
    }
    ctx.lineTo(pts[pts.length - 1][0], pts[pts.length - 1][1]);
    ctx.stroke();
  });

  // Secondary fine cross-veins
  ctx.strokeStyle = 'rgba(135, 110, 95, 0.22)';
  ctx.lineWidth = 1.6;
  const crossVeins = [
    [[250, 110], [270, 150]],
    [[270, 150], [290, 200]],
    [[290, 200], [320, 250]],
    [[380, 55], [420, 120]],
    [[420, 120], [470, 210]],
    [[260, 370], [240, 410]],
    [[240, 410], [190, 430]]
  ];
  crossVeins.forEach(([p1, p2]) => {
    ctx.beginPath();
    ctx.moveTo(p1[0], p1[1]);
    ctx.quadraticCurveTo((p1[0] + p2[0]) / 2 + 6, (p1[1] + p2[1]) / 2, p2[0], p2[1]);
    ctx.stroke();
  });

  // Delicate ivory margin spots
  ctx.fillStyle = 'rgba(255, 255, 252, 0.85)';
  const dots = [
    [455, 80, 4.5], [475, 125, 4.2], [465, 175, 4.0], [455, 230, 3.8],
    [430, 290, 3.5], [405, 350, 3.8], [375, 410, 4.2], [330, 455, 4.5],
    [270, 475, 4.2]
  ];
  dots.forEach(([x, y, r]) => {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  });

  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.generateMipmaps = true;
  tex.minFilter = THREE.LinearMipmapLinearFilter;
  return tex;
}

// Procedural butterfly wing shape geometry
function createWingGeometry() {
  const shape = new THREE.Shape();
  shape.moveTo(0, 0);
  // Forewing leading edge
  shape.bezierCurveTo(4, 10, 12, 24, 25, 28);
  // Forewing apex
  shape.bezierCurveTo(29, 29, 32, 25, 30, 18);
  // Forewing outer margin
  shape.bezierCurveTo(28, 12, 21, 7, 16, 5);
  // Hindwing outer curve
  shape.bezierCurveTo(22, 2, 23, -8, 17, -15);
  // Hindwing bottom lobe
  shape.bezierCurveTo(12, -19, 4, -18, 1, -7);
  shape.bezierCurveTo(0.5, -4, 0.2, -1, 0, 0);

  const geo = new THREE.ShapeGeometry(shape, 18);

  geo.computeBoundingBox();
  const bb = geo.boundingBox;
  const sizeX = bb.max.x - bb.min.x;
  const sizeY = bb.max.y - bb.min.y;

  const pos = geo.attributes.position;
  const uvs = new Float32Array(pos.count * 2);

  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i);
    const y = pos.getY(i);
    uvs[i * 2 + 0] = (x - bb.min.x) / sizeX;
    uvs[i * 2 + 1] = 1.0 - (y - bb.min.y) / sizeY;
  }

  geo.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));
  return geo;
}

// Single animated 3D Butterfly
class Butterfly {
  constructor(wingTex, wingGeo, bounds) {
    this.bounds = bounds;
    this.group = new THREE.Group();

    const wingMat = new THREE.MeshBasicMaterial({
      map: wingTex,
      transparent: true,
      opacity: 0.93,
      side: THREE.DoubleSide,
      depthWrite: false
    });

    // Left wing
    this.leftPivot = new THREE.Group();
    this.leftPivot.position.set(-0.25, 0, 0);
    const leftMesh = new THREE.Mesh(wingGeo, wingMat);
    leftMesh.scale.set(-1, 1, 1);
    this.leftPivot.add(leftMesh);

    // Right wing
    this.rightPivot = new THREE.Group();
    this.rightPivot.position.set(0.25, 0, 0);
    const rightMesh = new THREE.Mesh(wingGeo, wingMat);
    this.rightPivot.add(rightMesh);

    // Body
    const bodyMat = new THREE.MeshBasicMaterial({ color: 0x3d332d });
    const bodyGeo = new THREE.CylinderGeometry(0.55, 0.3, 14, 8);
    const body = new THREE.Mesh(bodyGeo, bodyMat);
    body.position.set(0, 2, 0);

    // Head
    const headGeo = new THREE.SphereGeometry(0.7, 8, 8);
    const head = new THREE.Mesh(headGeo, bodyMat);
    head.position.set(0, 9.5, 0);

    // Antennae
    const antMat = new THREE.LineBasicMaterial({ color: 0x2b2420 });
    const antL = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(0, 9.5, 0),
        new THREE.Vector3(-2.5, 13, 1.5),
        new THREE.Vector3(-5, 15.5, 2.5)
      ]),
      antMat
    );
    const antR = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(0, 9.5, 0),
        new THREE.Vector3(2.5, 13, 1.5),
        new THREE.Vector3(5, 15.5, 2.5)
      ]),
      antMat
    );

    this.group.add(this.leftPivot);
    this.group.add(this.rightPivot);
    this.group.add(body);
    this.group.add(head);
    this.group.add(antL);
    this.group.add(antR);

    // Randomize initial position
    this.pos = new THREE.Vector3(
      (Math.random() - 0.5) * bounds.width * 1.1,
      (Math.random() - 0.5) * bounds.height - 200,
      (Math.random() - 0.5) * 450 - 50
    );
    this.group.position.copy(this.pos);

    // Size variation (0.6x to 1.15x for natural depth hierarchy)
    const scale = Math.random() * 0.55 + 0.6;
    this.group.scale.set(scale, scale, scale);

    // Flight parameters
    this.speed = Math.random() * 0.8 + 0.9;
    this.flapSpeed = Math.random() * 4.0 + 13.0; // 13 - 17 rad/s
    this.flapPhase = Math.random() * Math.PI * 2;
    this.seedX = Math.random() * 100;
    this.seedY = Math.random() * 100;
    this.seedZ = Math.random() * 100;

    // Gliding vs flapping state machine
    this.isGliding = false;
    this.glideDuration = 0;
    this.flutterDuration = Math.random() * 3.0 + 2.0;
    this.stateTimer = 0;

    this.velocity = new THREE.Vector3();
    this.heading = new THREE.Vector3(0, 1, 0);
  }

  update(delta, time, mouseScreenPos) {
    this.stateTimer += delta;

    // Transition between fluttering and brief graceful glides
    if (!this.isGliding && this.stateTimer > this.flutterDuration) {
      this.isGliding = true;
      this.glideDuration = Math.random() * 1.5 + 0.8;
      this.stateTimer = 0;
    } else if (this.isGliding && this.stateTimer > this.glideDuration) {
      this.isGliding = false;
      this.flutterDuration = Math.random() * 3.0 + 2.0;
      this.stateTimer = 0;
    }

    // Wing flapping
    let flapAngle = 0;
    if (this.isGliding) {
      // Wings held in slight V-glide position
      flapAngle = -0.22;
    } else {
      flapAngle = Math.sin(time * this.flapSpeed + this.flapPhase) * 0.98;
    }

    this.leftPivot.rotation.y = flapAngle;
    this.rightPivot.rotation.y = -flapAngle;

    // 3D Organic flight trajectory (sinusoidal harmonics)
    const t = time * 0.45;
    const wanderX = Math.sin(t * 1.3 + this.seedX) * 1.8 + Math.cos(t * 0.7 + this.seedY) * 1.2;
    const wanderY = Math.cos(t * 1.1 + this.seedY) * 1.4 + Math.sin(t * 0.5 + this.seedZ) * 0.9;
    const wanderZ = Math.sin(t * 0.8 + this.seedZ) * 1.1;

    // Flap downbeat vertical bob
    const flapBob = this.isGliding ? 0 : Math.cos(time * this.flapSpeed + this.flapPhase) * 0.9;

    this.velocity.x = wanderX * this.speed;
    this.velocity.y = (wanderY + flapBob * 0.6) * this.speed;
    this.velocity.z = wanderZ * this.speed * 0.8;

    // Soft cursor repulsion: gentle reaction when mouse is nearby
    if (mouseScreenPos) {
      const dx = this.pos.x - mouseScreenPos.x;
      const dy = this.pos.y - mouseScreenPos.y;
      const distSq = dx * dx + dy * dy;
      const repelDist = 220;
      if (distSq < repelDist * repelDist && distSq > 1) {
        const dist = Math.sqrt(distSq);
        const force = (1.0 - dist / repelDist) * 3.2;
        this.velocity.x += (dx / dist) * force;
        this.velocity.y += (dy / dist) * force;
        // Escape burst: cancel glide
        this.isGliding = false;
      }
    }

    // Apply movement
    this.pos.add(this.velocity);

    // Screen wrapping / soft bounds
    const halfW = this.bounds.width * 0.65;
    const minY = -this.bounds.height - 200;
    const maxY = 650;

    if (this.pos.x > halfW) this.pos.x = -halfW;
    else if (this.pos.x < -halfW) this.pos.x = halfW;

    if (this.pos.y > maxY) this.pos.y = minY;
    else if (this.pos.y < minY) this.pos.y = maxY;

    this.group.position.copy(this.pos);

    // Orientation: face flight direction with roll banking
    const targetHeading = this.velocity.clone().normalize();
    this.heading.lerp(targetHeading, 0.08);

    // Pitch & Yaw
    const pitch = -this.heading.y * 0.6;
    const yaw = Math.atan2(this.heading.x, this.heading.z);
    // Bank roll into turns
    const roll = -this.velocity.x * 0.22;

    this.group.rotation.set(pitch + 0.2, yaw, roll);
  }
}

// Manager for all background butterflies
export class Butterflies {
  constructor(scene) {
    this.scene = scene;
    this.count = 11;
    this.butterflies = [];
    this.mouse = new THREE.Vector2(0, 0);
    this.lastTime = performance.now() * 0.001;

    this.bounds = {
      width: window.innerWidth,
      height: 3000
    };

    this.init();
  }

  init() {
    this.container = new THREE.Group();
    // Render behind the 3D cards layer
    this.container.renderOrder = -2;
    this.scene.add(this.container);

    const wingTex = createWingTexture();
    const wingGeo = createWingGeometry();

    for (let i = 0; i < this.count; i++) {
      const b = new Butterfly(wingTex, wingGeo, this.bounds);
      this.butterflies.push(b);
      this.container.add(b.group);
    }
  }

  setMouse(normX, normY) {
    // Convert normalized mouse (-1 to 1) to approximate 3D world plane coords
    this.mouse.x = normX * (window.innerWidth * 0.5);
    this.mouse.y = normY * (window.innerHeight * 0.5);
  }

  update(time, scrollY = 0) {
    const now = time || performance.now() * 0.001;
    const delta = Math.min(0.05, now - this.lastTime);
    this.lastTime = now;

    // Adjust effective mouse position taking gallery scroll into account
    const mouseWorld = {
      x: this.mouse.x,
      y: this.mouse.y - scrollY
    };

    for (let i = 0; i < this.butterflies.length; i++) {
      this.butterflies[i].update(delta, now, mouseWorld);
    }
  }

  onResize() {
    this.bounds.width = window.innerWidth;
  }
}
