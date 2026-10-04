import * as THREE from 'three';

export class SceneManager {
  constructor(canvas) {
    this.canvas = canvas;
    this.width = window.innerWidth;
    this.height = window.innerHeight;

    this.scene = new THREE.Scene();

    // Perspective camera with pixel-ratio matching
    const fov = 45;
    this.camera = new THREE.PerspectiveCamera(fov, this.width / this.height, 1, 3000);
    // Position camera so 1 unit roughly maps nicely to screen height
    this.cameraZ = this.height / (2 * Math.tan((fov * Math.PI) / 360));
    this.camera.position.set(0, 0, this.cameraZ);

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    this.renderer.setSize(this.width, this.height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;

    // Ambient light
    const ambient = new THREE.AmbientLight(0xffffff, 1.2);
    this.scene.add(ambient);

    // Parallax
    this.mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };

    this.initEvents();
  }

  initEvents() {
    window.addEventListener('resize', () => this.onResize());

    window.addEventListener('mousemove', (e) => {
      this.mouse.targetX = (e.clientX / this.width - 0.5) * 2;
      this.mouse.targetY = -(e.clientY / this.height - 0.5) * 2;
    });

    window.addEventListener('mouseleave', () => {
      this.mouse.targetX = 0;
      this.mouse.targetY = 0;
    });
  }

  onResize() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;

    this.camera.aspect = this.width / this.height;
    this.cameraZ = this.height / (2 * Math.tan((this.camera.fov * Math.PI) / 360));
    this.camera.position.z = this.cameraZ;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(this.width, this.height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  }

  update() {
    // Smooth camera parallax
    this.mouse.x += (this.mouse.targetX - this.mouse.x) * 0.05;
    this.mouse.y += (this.mouse.targetY - this.mouse.y) * 0.05;

    this.camera.position.x = this.mouse.x * 25;
    this.camera.position.y = this.mouse.y * 25;
  }

  render() {
    this.renderer.render(this.scene, this.camera);
  }
}
