import * as THREE from 'three';

const particleVertexShader = `
  attribute float aSize;
  attribute float aAlpha;
  attribute vec3 aVelocity;
  uniform float uTime;
  uniform vec2 uMouseParallax;
  varying float vAlpha;

  void main() {
    vAlpha = aAlpha;
    vec3 pos = position;

    // Organic harmonic drift
    pos.x += sin(uTime * aVelocity.x + pos.y * 0.003) * 20.0;
    pos.y += cos(uTime * aVelocity.y + pos.x * 0.003) * 20.0;
    pos.z += sin(uTime * aVelocity.z) * 15.0;

    // Subtle delayed mouse parallax
    pos.x += uMouseParallax.x * 40.0 * (1.0 + pos.z * 0.002);
    pos.y += uMouseParallax.y * 40.0 * (1.0 + pos.z * 0.002);

    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_PointSize = aSize * (350.0 / -mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;
  }
`;

const particleFragmentShader = `
  varying float vAlpha;

  void main() {
    // Soft blurred bokeh circle
    float dist = length(gl_PointCoord - vec2(0.5));
    if (dist > 0.5) discard;
    float shape = smoothstep(0.5, 0.08, dist);

    // Warm, muted champagne tone matching Unseen Studio palette
    vec3 color = vec3(0.82, 0.73, 0.70);
    gl_FragColor = vec4(color, shape * vAlpha * 0.22);
  }
`;

export class AmbientParticles {
  constructor(scene) {
    this.scene = scene;
    this.count = 55;
    this.mouse = { current: new THREE.Vector2(0, 0), target: new THREE.Vector2(0, 0) };

    this.init();
  }

  init() {
    const geo = new THREE.BufferGeometry();
    const positions = new Float32Array(this.count * 3);
    const sizes = new Float32Array(this.count);
    const alphas = new Float32Array(this.count);
    const velocities = new Float32Array(this.count * 3);

    const spreadX = window.innerWidth * 1.2;
    const spreadY = 3200; // Across the long scroll gallery
    const spreadZ = 400;

    for (let i = 0; i < this.count; i++) {
      positions[i * 3 + 0] = (Math.random() - 0.5) * spreadX;
      positions[i * 3 + 1] = (Math.random() - 0.5) * spreadY;
      positions[i * 3 + 2] = (Math.random() - 0.5) * spreadZ - 50;

      sizes[i] = Math.random() * 8.0 + 4.0;
      alphas[i] = Math.random() * 0.5 + 0.5;

      velocities[i * 3 + 0] = Math.random() * 0.4 + 0.2;
      velocities[i * 3 + 1] = Math.random() * 0.4 + 0.2;
      velocities[i * 3 + 2] = Math.random() * 0.3 + 0.1;
    }

    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('aSize', new THREE.BufferAttribute(sizes, 1));
    geo.setAttribute('aAlpha', new THREE.BufferAttribute(alphas, 1));
    geo.setAttribute('aVelocity', new THREE.BufferAttribute(velocities, 3));

    this.material = new THREE.ShaderMaterial({
      vertexShader: particleVertexShader,
      fragmentShader: particleFragmentShader,
      transparent: true,
      depthWrite: false,
      blending: THREE.NormalBlending,
      uniforms: {
        uTime: { value: 0 },
        uMouseParallax: { value: new THREE.Vector2(0, 0) }
      }
    });

    this.points = new THREE.Points(geo, this.material);
    this.points.renderOrder = -1; // Render softly behind and around cards
    this.scene.add(this.points);
  }

  setMouse(normX, normY) {
    this.mouse.target.set(normX, normY);
  }

  update(time) {
    if (!this.material) return;

    this.material.uniforms.uTime.value = time;

    // Smooth inertia lag for particles
    this.mouse.current.lerp(this.mouse.target, 0.04);
    this.material.uniforms.uMouseParallax.value.copy(this.mouse.current);
  }
}
