import * as THREE from 'three';
import gsap from 'gsap';

const vertexShader = `
  uniform float uScrollSpeed;
  uniform float uHover;
  uniform float uTime;
  uniform vec2 uMouseUv;
  uniform vec2 uCursorVel;
  uniform float uWaveStrength;
  uniform vec2 uPlaneRes;
  varying vec2 vUv;
  varying float vWave;
  varying float vWaveElevation;

  void main() {
    vUv = uv;
    vec3 pos = position;

    // Organic wave curve based on scroll inertia
    float scrollWave = sin(pos.y * 0.005) * uScrollSpeed * 10.0;
    pos.z -= scrollWave;
    pos.y += uScrollSpeed * 3.5;
    vWave = scrollWave;

    // 🌊 LIQUID / MEMBRANE WAVE DEFORMATION
    vec2 aspectVec = vec2(uPlaneRes.x / uPlaneRes.y, 1.0);
    vec2 delta = (uv - uMouseUv) * aspectVec;
    float dist = length(delta);

    // 1. Local soft indentation/deflection under cursor
    float localFlex = exp(-dist * dist * 14.0);

    // 2. Outward radiating soft wave propagating from cursor point
    float wavePhase = dist * 16.0 - uTime * 5.0;
    float waveDecay = exp(-dist * 4.2);
    float radialWave = sin(wavePhase) * waveDecay;

    // 3. Directional velocity shear
    float velDot = dot(normalize(delta + 0.0001), uCursorVel);
    float velPush = velDot * exp(-dist * 5.0) * 1.5;

    // Combine into subtle 3D Z-elevation (membrane yields under cursor & ripples)
    float zDeform = (-localFlex * 0.45 + radialWave * 0.55 + velPush) * uWaveStrength * uHover;
    pos.z += zDeform * 16.0;
    vWaveElevation = zDeform;

    // 4. Subtle elastic edge flex
    vec2 edgeFactor = smoothstep(vec2(0.0), vec2(0.35), min(uv, 1.0 - uv));
    float edgeElasticity = (1.0 - edgeFactor.x * edgeFactor.y);
    pos.xy += uCursorVel * 10.0 * edgeElasticity * uWaveStrength * uHover;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

const fragmentShader = `
  uniform sampler2D uTexture;
  uniform float uAlpha;
  uniform float uHover;
  uniform float uScrollSpeed;
  uniform float uTime;
  uniform vec2 uPlaneRes;
  uniform vec2 uImageRes;
  uniform vec2 uMediaParallax;
  uniform vec2 uMouseUv;
  uniform vec2 uCursorVel;
  uniform float uWaveStrength;
  varying vec2 vUv;
  varying float vWave;
  varying float vWaveElevation;

  vec2 getCoverUv(vec2 uv, vec2 planeRes, vec2 imgRes) {
    vec2 s = planeRes;
    vec2 i = imgRes;
    float rPlane = s.x / s.y;
    float rImage = i.x / i.y;
    vec2 newUv = uv;
    if (rPlane > rImage) {
      newUv.y = (uv.y - 0.5) * (rImage / rPlane) + 0.5;
    } else {
      newUv.x = (uv.x - 0.5) * (rPlane / rImage) + 0.5;
    }
    return newUv;
  }

  void main() {
    // 🌊 LIQUID MEDIA REFRACTION / DEFORMATION
    vec2 aspectVec = vec2(uPlaneRes.x / uPlaneRes.y, 1.0);
    vec2 delta = (vUv - uMouseUv) * aspectVec;
    float dist = length(delta);

    // Wave normal gradient refraction
    vec2 waveDir = (dist > 0.0001) ? (delta / dist) : vec2(0.0);
    float waveDerivative = cos(dist * 16.0 - uTime * 5.0) * exp(-dist * 4.2);
    vec2 liquidRefraction = waveDir * waveDerivative * 0.016 * uWaveStrength * uHover;

    // Velocity shear refraction
    vec2 velRefraction = uCursorVel * exp(-dist * 6.0) * 0.018 * uWaveStrength * uHover;

    // Media layer displacement: parallax + liquid wave refraction
    vec2 shiftedUv = vUv - uMediaParallax * 0.038 * uHover + liquidRefraction + velRefraction;

    vec2 uv = getCoverUv(shiftedUv, uPlaneRes, uImageRes);
    
    // Light scale (~1.045x) on hover
    uv = (uv - 0.5) * (1.0 - uHover * 0.043) + 0.5;

    // Chromatic Aberration during fast scroll
    float rgbShift = clamp(abs(uScrollSpeed) * 0.006, 0.0, 0.035);
    vec4 rTex = texture2D(uTexture, uv + vec2(rgbShift, 0.0));
    vec4 gTex = texture2D(uTexture, uv);
    vec4 bTex = texture2D(uTexture, uv - vec2(rgbShift, 0.0));

    vec3 color = vec3(rTex.r, gTex.g, bTex.b);

    // Subtle contrast boost on hover
    color = mix(color, color * 1.05, uHover);

    // Subtle specular highlight modulated by wave elevation for liquid sheen
    float distToCursor = length(vUv - uMouseUv);
    float highlight = smoothstep(0.55, 0.0, distToCursor) * (0.09 + vWaveElevation * 0.05) * uHover;
    color += vec3(highlight);

    // Smooth rounded corners mask (always computed on clean unshifted vUv - zero tearing!)
    vec2 d = min(vUv, 1.0 - vUv) * uPlaneRes;
    float cornerRadius = 14.0;
    float corner = length(max(vec2(cornerRadius) - d, 0.0)) - cornerRadius;
    float alphaMask = 1.0 - smoothstep(-1.0, 1.0, corner);
    if (alphaMask <= 0.001) discard;

    gl_FragColor = vec4(color, gTex.a * uAlpha * alphaMask);
    #include <colorspace_fragment>
  }
`;

export class ProjectCard {
  constructor(project, index) {
    this.project = project;
    this.index = index;
    this.group = new THREE.Group();
    this.group.name = project.id;

    this.width = 460;
    this.height = 270;
    this.isHovered = false;
    this.isVisible = true;

    // Spring & inertia states for hover, 3D tilt, and parallax
    this.tilt = {
      current: new THREE.Vector2(0, 0),
      target: new THREE.Vector2(0, 0)
    };
    this.mouseUv = {
      current: new THREE.Vector2(0.5, 0.5),
      target: new THREE.Vector2(0.5, 0.5)
    };
    this.hover = {
      current: 0,
      target: 0
    };

    // 🌊 Liquid Wave & Velocity physics states
    this.prevCursor = new THREE.Vector2(0.5, 0.5);
    this.cursorVelocity = new THREE.Vector2(0, 0);
    this.targetVelocity = new THREE.Vector2(0, 0);
    this.waveStrength = 0;
    this.targetWaveStrength = 0;

    // Check accessibility reduced motion
    this.reducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches || false;

    this.targetPos = new THREE.Vector3(0, 0, 0);

    this.initMesh();
    this.initTextPlate();
    this.initVideo();
  }

  initMesh() {
    // 36x36 vertex grid for smooth elastic membrane deflection
    this.geometry = new THREE.PlaneGeometry(this.width, this.height, 36, 36);

    const placeholderCanvas = document.createElement('canvas');
    placeholderCanvas.width = 16;
    placeholderCanvas.height = 9;
    const ctx = placeholderCanvas.getContext('2d');
    ctx.fillStyle = '#dfcfc9';
    ctx.fillRect(0, 0, 16, 9);
    this.defaultTexture = new THREE.CanvasTexture(placeholderCanvas);
    this.defaultTexture.colorSpace = THREE.SRGBColorSpace;

    this.material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      transparent: true,
      depthTest: true,
      depthWrite: true,
      uniforms: {
        uTexture: { value: this.defaultTexture },
        uScrollSpeed: { value: 0 },
        uHover: { value: 0 },
        uTime: { value: 0 },
        uMediaParallax: { value: new THREE.Vector2(0, 0) },
        uMouseUv: { value: new THREE.Vector2(0.5, 0.5) },
        uCursorVel: { value: new THREE.Vector2(0, 0) },
        uWaveStrength: { value: 0 },
        uAlpha: { value: 1.0 },
        uPlaneRes: { value: new THREE.Vector2(this.width, this.height) },
        uImageRes: { value: new THREE.Vector2(1024, 538) }
      }
    });

    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.mesh.userData = { project: this.project, card: this };
    this.group.add(this.mesh);

    // Tactile 3D Drop Shadow Plane behind card
    const shadowScaleX = 512 / 392; // ~1.306
    const shadowScaleY = 320 / 220; // ~1.454
    const shadowGeo = new THREE.PlaneGeometry(this.width * shadowScaleX, this.height * shadowScaleY);
    const shadowMat = new THREE.MeshBasicMaterial({
      map: ProjectCard.getSharedShadowTexture(),
      transparent: true,
      opacity: 0.60,
      depthWrite: false,
      depthTest: true
    });
    this.shadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
    this.shadowMesh.position.set(0, -10, -12);
    this.group.add(this.shadowMesh);

    if (this.project.image) {
      const loader = new THREE.TextureLoader();
      loader.crossOrigin = 'anonymous';
      loader.load(
        this.project.image,
        (tex) => {
          tex.colorSpace = THREE.SRGBColorSpace;
          tex.generateMipmaps = true;
          tex.minFilter = THREE.LinearMipmapLinearFilter;
          this.imageTexture = tex;
          this.material.uniforms.uTexture.value = tex;
          this.material.uniforms.uImageRes.value.set(
            tex.image.width || 1024,
            tex.image.height || 538
          );
        },
        undefined,
        (err) => {
          console.warn('Could not load image texture:', this.project.image);
        }
      );
    }
  }

  static getSharedShadowTexture() {
    if (ProjectCard._sharedShadowTexture) return ProjectCard._sharedShadowTexture;
    const w = 512;
    const h = 320;
    const canvas = document.createElement('canvas');
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext('2d');

    const padX = 60;
    const padY = 50;
    const rectW = w - padX * 2;
    const rectH = h - padY * 2;
    const r = 22;
    const offY = 1000;

    // Layer 1: Wide warm ambient drop shadow (soft & light)
    ctx.shadowColor = 'rgba(70, 35, 24, 0.12)';
    ctx.shadowBlur = 42;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = offY + 12;
    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.roundRect(padX, padY - offY, rectW, rectH, r);
    ctx.fill();

    // Layer 2: Medium directional contact shadow (subtle)
    ctx.shadowColor = 'rgba(55, 25, 16, 0.18)';
    ctx.shadowBlur = 20;
    ctx.shadowOffsetY = offY + 6;
    ctx.beginPath();
    ctx.roundRect(padX + 2, padY - offY, rectW - 4, rectH, r);
    ctx.fill();

    // Layer 3: Core occlusion under card (gentle)
    ctx.shadowColor = 'rgba(40, 16, 10, 0.22)';
    ctx.shadowBlur = 8;
    ctx.shadowOffsetY = offY + 2;
    ctx.beginPath();
    ctx.roundRect(padX + 6, padY - offY, rectW - 12, rectH, r);
    ctx.fill();

    const tex = new THREE.CanvasTexture(canvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    ProjectCard._sharedShadowTexture = tex;
    return tex;
  }

  initTextPlate() {
    const canvas = document.createElement('canvas');
    const dpr = 2;
    const plateW = this.width * dpr;
    const plateH = 75 * dpr;
    canvas.width = plateW;
    canvas.height = plateH;

    const ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);

    // Title with subtle shadow
    ctx.shadowColor = 'rgba(70, 35, 25, 0.20)';
    ctx.shadowBlur = 4;
    ctx.shadowOffsetY = 1;
    ctx.shadowOffsetX = 0;
    ctx.font = '500 19px "Neue Montreal", sans-serif';
    ctx.fillStyle = '#212121';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'top';
    ctx.fillText(this.project.title, 0, 10);
    ctx.shadowColor = 'transparent';

    // Category Label
    ctx.font = '400 13.5px "Neue Montreal", sans-serif';
    ctx.fillStyle = '#7a7a7a';
    ctx.fillText(this.project.categoryLabel || this.project.categories?.join(' • ') || '', 0, 38);

    // Index number
    ctx.font = '400 14px "Neue Montreal", sans-serif';
    ctx.fillStyle = '#999999';
    ctx.textAlign = 'right';
    ctx.fillText(this.project.index, this.width, 10);

    this.textCanvas = canvas;
    this.textCtx = ctx;

    this.textTexture = new THREE.CanvasTexture(canvas);
    this.textTexture.colorSpace = THREE.SRGBColorSpace;

    const textGeo = new THREE.PlaneGeometry(this.width, 75);
    const textMat = new THREE.MeshBasicMaterial({
      map: this.textTexture,
      transparent: true,
      opacity: 0.95
    });

    this.textMesh = new THREE.Mesh(textGeo, textMat);
    this.textMesh.position.set(0, -this.height / 2 - 42, 0);
    this.group.add(this.textMesh);
  }

  initVideo() {
    if (!this.project.video) return;

    this.video = document.createElement('video');
    this.video.crossOrigin = 'anonymous';
    this.video.src = this.project.video;
    this.video.loop = true;
    this.video.muted = true;
    this.video.playsInline = true;
    this.video.preload = 'metadata';

    this.videoTexture = null;
  }

  setHover(hovered) {
    if (this.isHovered === hovered) return;
    this.isHovered = hovered;
    this.hover.target = hovered ? 1.0 : 0.0;

    if (!hovered) {
      // Smooth return to neutral state on leave
      this.tilt.target.set(0, 0);
      this.mouseUv.target.set(0.5, 0.5);
      this.targetVelocity.set(0, 0);
      this.targetWaveStrength = 0;
    }

    // Update text plate typography on hover without jumping layout
    if (this.textCtx) {
      const dpr = 2;
      this.textCtx.clearRect(0, 0, this.width, 75);
      
      this.textCtx.font = hovered
        ? 'italic 400 20px "Saol Display", Georgia, serif'
        : '500 19px "Neue Montreal", sans-serif';
      this.textCtx.fillStyle = '#212121';
      this.textCtx.textAlign = 'left';
      this.textCtx.textBaseline = 'top';
      this.textCtx.fillText(this.project.title, 0, 10);

      this.textCtx.font = '400 13.5px "Neue Montreal", sans-serif';
      this.textCtx.fillStyle = hovered ? '#212121' : '#7a7a7a';
      this.textCtx.fillText(this.project.categoryLabel || this.project.categories?.join(' • ') || '', 0, 38);

      this.textCtx.font = '400 14px "Neue Montreal", sans-serif';
      this.textCtx.fillStyle = '#999999';
      this.textCtx.textAlign = 'right';
      this.textCtx.fillText(this.project.index, this.width, 10);

      this.textTexture.needsUpdate = true;
    }

    if (hovered && this.video) {
      if (!this.videoTexture) {
        this.videoTexture = new THREE.VideoTexture(this.video);
        this.videoTexture.colorSpace = THREE.SRGBColorSpace;
      }
      this.material.uniforms.uTexture.value = this.videoTexture;
      this.video.play().catch(() => {});
    } else if (!hovered && this.video) {
      this.video.pause();
      if (this.imageTexture) {
        this.material.uniforms.uTexture.value = this.imageTexture;
      }
    }
  }

  setCursorPosition(normX, normY, uv) {
    if (!this.isHovered || this.reducedMotion) return;

    // Relative cursor offset from card center (-1 to 1)
    this.tilt.target.set(normX, normY);

    const targetUv = uv ? uv : new THREE.Vector2((normX + 1) * 0.5, (normY + 1) * 0.5);
    this.mouseUv.target.copy(targetUv);

    // Calculate instantaneous cursor displacement
    const dx = targetUv.x - this.prevCursor.x;
    const dy = targetUv.y - this.prevCursor.y;
    this.prevCursor.copy(targetUv);

    const speed = Math.hypot(dx, dy);

    // Dynamic velocity calculation (clamped to prevent jarring extremes)
    this.targetVelocity.x = Math.max(-0.4, Math.min(0.4, dx * 5.0));
    this.targetVelocity.y = Math.max(-0.4, Math.min(0.4, dy * 5.0));

    // Inject wave energy:
    // Slow movement -> minimal subtle wave (~0.012)
    // Quick sweep -> noticeable soft liquid wave (~0.035)
    this.targetWaveStrength = Math.min(1.0, this.targetWaveStrength + speed * 4.0);
  }

  setScrollSpeed(speed) {
    this.material.uniforms.uScrollSpeed.value = speed;
  }

  // Frame update with inertia spring lerp & wave dissipation
  update() {
    if (this.reducedMotion) return;

    // Smooth hover progress interpolation (400-600ms enter, 500-800ms leave)
    const hoverLerpSpeed = this.isHovered ? 0.085 : 0.055;
    this.hover.current += (this.hover.target - this.hover.current) * hoverLerpSpeed;
    this.material.uniforms.uHover.value = this.hover.current;

    // Smooth tilt & parallax interpolation
    const tiltLerpSpeed = this.isHovered ? 0.09 : 0.05;
    this.tilt.current.lerp(this.tilt.target, tiltLerpSpeed);
    this.mouseUv.current.lerp(this.mouseUv.target, tiltLerpSpeed);

    // Velocity & wave damping (0.86 / 0.91 damping factors)
    this.cursorVelocity.lerp(this.targetVelocity, 0.12);
    this.targetVelocity.multiplyScalar(0.86);

    // Wave strength interpolation and smooth dissipation
    this.waveStrength += (this.targetWaveStrength - this.waveStrength) * 0.12;
    this.targetWaveStrength *= 0.91; // Dissipates smoothly when stopped

    // 3D tilt specifically on media plane (~2.4 degrees = 0.042 rad)
    const maxTiltAngle = 0.042;
    this.mesh.rotation.y = this.tilt.current.x * maxTiltAngle * this.hover.current;
    this.mesh.rotation.x = -this.tilt.current.y * maxTiltAngle * this.hover.current;

    // Subtle elevation towards camera
    this.mesh.position.z = this.hover.current * 32.0;

    // Update 3D shadow based on hover elevation and tilt (softer, lighter ambient shadow)
    if (this.shadowMesh) {
      const hoverVal = this.hover.current;
      this.shadowMesh.position.y = -10 - hoverVal * 12;
      this.shadowMesh.position.x = this.tilt.current.x * 10 * hoverVal;
      const scaleVal = 1.0 + hoverVal * 0.06;
      this.shadowMesh.scale.set(scaleVal, scaleVal, 1.0);
      this.shadowMesh.material.opacity = (0.50 + hoverVal * 0.18) * this.material.uniforms.uAlpha.value;
    }

    // Pass wave parameters and time to shaders
    this.material.uniforms.uMediaParallax.value.copy(this.tilt.current);
    this.material.uniforms.uMouseUv.value.copy(this.mouseUv.current);
    this.material.uniforms.uCursorVel.value.copy(this.cursorVelocity);
    this.material.uniforms.uWaveStrength.value = this.waveStrength;
    this.material.uniforms.uTime.value = performance.now() * 0.001;
  }

  setVisible(visible, delay = 0) {
    this.isVisible = visible;

    if (visible) {
      this.group.visible = true;
      gsap.to(this.group.position, {
        x: this.targetPos.x,
        y: this.targetPos.y,
        z: 0,
        duration: 0.7,
        delay,
        ease: 'power3.out'
      });
      gsap.to(this.material.uniforms.uAlpha, {
        value: 1.0,
        duration: 0.5,
        delay,
        ease: 'power2.out'
      });
      gsap.to(this.textMesh.material, {
        opacity: 0.95,
        duration: 0.5,
        delay,
        ease: 'power2.out'
      });
      if (this.shadowMesh) {
        gsap.to(this.shadowMesh.material, {
          opacity: 0.50,
          duration: 0.5,
          delay,
          ease: 'power2.out'
        });
      }
    } else {
      gsap.to(this.group.position, {
        z: -600,
        duration: 0.5,
        delay,
        ease: 'power2.in',
        onComplete: () => {
          if (!this.isVisible) this.group.visible = false;
        }
      });
      gsap.to(this.material.uniforms.uAlpha, {
        value: 0,
        duration: 0.4,
        delay,
        ease: 'power2.in'
      });
      gsap.to(this.textMesh.material, {
        opacity: 0,
        duration: 0.4,
        delay,
        ease: 'power2.in'
      });
      if (this.shadowMesh) {
        gsap.to(this.shadowMesh.material, {
          opacity: 0,
          duration: 0.4,
          delay,
          ease: 'power2.in'
        });
      }
    }
  }

  updateDimensions(width, height) {
    this.width = width;
    this.height = height;

    this.mesh.geometry.dispose();
    this.geometry = new THREE.PlaneGeometry(width, height, 36, 36);
    this.mesh.geometry = this.geometry;
    this.material.uniforms.uPlaneRes.value.set(width, height);

    if (this.shadowMesh) {
      this.shadowMesh.geometry.dispose();
      const shadowScaleX = 512 / 392;
      const shadowScaleY = 320 / 220;
      this.shadowMesh.geometry = new THREE.PlaneGeometry(width * shadowScaleX, height * shadowScaleY);
    }

    this.textMesh.geometry.dispose();
    this.textMesh.geometry = new THREE.PlaneGeometry(width, 75);
    this.textMesh.position.set(0, -height / 2 - 42, 0);

    const dpr = 2;
    this.textCanvas.width = width * dpr;
    this.textCanvas.height = 75 * dpr;
    this.textCtx.scale(dpr, dpr);

    this.textCtx.font = '500 19px "Neue Montreal", sans-serif';
    this.textCtx.fillStyle = '#212121';
    this.textCtx.textAlign = 'left';
    this.textCtx.textBaseline = 'top';
    this.textCtx.fillText(this.project.title, 0, 10);

    this.textCtx.font = '400 13.5px "Neue Montreal", sans-serif';
    this.textCtx.fillStyle = '#7a7a7a';
    this.textCtx.fillText(this.project.categoryLabel || this.project.categories?.join(' • ') || '', 0, 38);

    this.textCtx.font = '400 14px "Neue Montreal", sans-serif';
    this.textCtx.fillStyle = '#999999';
    this.textCtx.textAlign = 'right';
    this.textCtx.fillText(this.project.index, width, 10);

    this.textTexture.needsUpdate = true;
  }
}
