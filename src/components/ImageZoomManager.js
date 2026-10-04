import { sounds } from './SoundEffects.js';

export class ImageZoomManager {
  constructor(options = {}) {
    this.container = options.container || document.getElementById('project-viewer-image-wrapper');
    this.imageEl = options.imageEl || document.getElementById('project-viewer-image');
    this.toolbar = options.toolbar || document.getElementById('project-viewer-zoom-toolbar');
    this.screenEl = options.screenEl || document.getElementById('project-viewer');
    this.cursor = options.cursor || window.__cursor || null;

    this.scale = 1.0;
    this.minScale = 1.0;
    this.maxScale = 4.5;
    this.pan = { x: 0, y: 0 };

    this.isDragging = false;
    this.dragStart = { x: 0, y: 0 };
    this.panStart = { x: 0, y: 0 };
    this.pointerMoved = false;

    // Multi-touch pinch tracking
    this.touches = new Map();
    this.initialPinchDistance = 0;
    this.initialPinchScale = 1.0;
    this.pinchCenter = { x: 0, y: 0 };

    // Toolbar buttons
    this.btnIn = this.toolbar?.querySelector('.js-zoom-in');
    this.btnOut = this.toolbar?.querySelector('.js-zoom-out');
    this.btnReset = this.toolbar?.querySelector('.js-zoom-reset');
    this.btnFit = this.toolbar?.querySelector('.js-zoom-fit');
    this.valText = this.toolbar?.querySelector('.zoom-val-text');

    this.rafId = null;

    this.initEvents();
  }

  setCursor(cursor) {
    this.cursor = cursor;
  }

  initEvents() {
    if (!this.container || !this.imageEl) return;

    // Wheel zoom (mouse wheel and trackpad pinch)
    this.container.addEventListener('wheel', (e) => this.onWheel(e), { passive: false });

    // Pointer events for dragging & clicking
    this.container.addEventListener('pointerdown', (e) => this.onPointerDown(e));
    window.addEventListener('pointermove', (e) => this.onPointerMove(e), { passive: true });
    window.addEventListener('pointerup', (e) => this.onPointerUp(e));
    window.addEventListener('pointercancel', (e) => this.onPointerUp(e));

    // Double click to zoom/reset
    this.container.addEventListener('dblclick', (e) => this.onDoubleClick(e));

    // Touch events for mobile multi-touch pinch
    this.container.addEventListener('touchstart', (e) => this.onTouchStart(e), { passive: false });
    this.container.addEventListener('touchmove', (e) => this.onTouchMove(e), { passive: false });
    this.container.addEventListener('touchend', (e) => this.onTouchEnd(e), { passive: true });
    this.container.addEventListener('touchcancel', (e) => this.onTouchEnd(e), { passive: true });

    // Toolbar buttons
    this.btnIn?.addEventListener('click', (e) => {
      e.stopPropagation();
      this.zoomBy(0.5);
    });

    this.btnOut?.addEventListener('click', (e) => {
      e.stopPropagation();
      this.zoomBy(-0.5);
    });

    this.btnReset?.addEventListener('click', (e) => {
      e.stopPropagation();
      if (Math.abs(this.scale - 1.0) < 0.05) {
        this.zoomTo(2.0, window.innerWidth / 2, window.innerHeight / 2, true);
      } else {
        this.reset(true);
      }
    });

    this.btnFit?.addEventListener('click', (e) => {
      e.stopPropagation();
      this.reset(true);
    });

    // Keyboard shortcuts
    window.addEventListener('keydown', (e) => this.onKeyDown(e));

    // Hover detection for custom cursor icon
    this.container.addEventListener('pointerenter', () => {
      if (this.isActive()) this.updateCursorState();
    });

    this.container.addEventListener('pointerleave', () => {
      if (this.cursor && this.isActive()) {
        this.cursor.setState('default');
      }
    });

    // Window resize recalculates pan bounds
    window.addEventListener('resize', () => {
      if (this.scale > 1.0) {
        this.pan = this.clampPan(this.pan.x, this.pan.y, this.scale);
        this.applyTransform(false);
      }
    });
  }

  isActive() {
    return document.documentElement.classList.contains('is-project-image-mode') &&
           this.screenEl?.classList.contains('is-image-mode') && 
           this.screenEl?.classList.contains('is-active');
  }

  onWheel(e) {
    if (!this.isActive()) return;
    e.preventDefault();

    // Support both mouse wheel and trackpad pinch
    const factor = e.ctrlKey ? 0.015 : 0.0022;
    const delta = -e.deltaY * factor;
    const targetScale = this.scale * (1 + delta);

    this.zoomTo(targetScale, e.clientX, e.clientY, false);
  }

  onPointerDown(e) {
    if (!this.isActive()) return;
    if (e.target.closest('.project-screen__floating-back, .project-viewer__zoom-toolbar')) return;

    this.isDragging = true;
    this.pointerMoved = false;
    this.dragStart = { x: e.clientX, y: e.clientY };
    this.panStart = { x: this.pan.x, y: this.pan.y };

    if (this.scale > 1.05) {
      document.documentElement.classList.add('is-zoomed-dragging');
      this.updateCursorState(true);
    }
  }

  onPointerMove(e) {
    if (!this.isDragging || !this.isActive()) return;

    const dx = e.clientX - this.dragStart.x;
    const dy = e.clientY - this.dragStart.y;

    if (Math.abs(dx) > 6 || Math.abs(dy) > 6) {
      this.pointerMoved = true;
    }

    if (this.scale > 1.0 && this.pointerMoved) {
      this.pan = this.clampPan(this.panStart.x + dx, this.panStart.y + dy, this.scale);
      this.applyTransform(false);
    }
  }

  onPointerUp(e) {
    if (!this.isDragging) return;
    this.isDragging = false;
    document.documentElement.classList.remove('is-zoomed-dragging');

    // Click without dragging
    if (!this.pointerMoved && this.isActive()) {
      if (e.target.closest('.project-screen__floating-back, .project-viewer__zoom-toolbar')) return;

      if (this.scale <= 1.05) {
        // Zoom in to focal point
        this.zoomTo(2.25, e.clientX, e.clientY, true);
        sounds.playClick();
      } else {
        // Reset back to fit
        this.reset(true);
        sounds.playClick();
      }
    } else {
      this.updateCursorState(false);
    }
  }

  onDoubleClick(e) {
    if (!this.isActive()) return;
    if (e.target.closest('.project-screen__floating-back, .project-viewer__zoom-toolbar')) return;
    e.preventDefault();

    if (this.scale <= 1.05) {
      this.zoomTo(2.5, e.clientX, e.clientY, true);
    } else {
      this.reset(true);
    }
    sounds.playClick();
  }

  onTouchStart(e) {
    if (!this.isActive()) return;
    if (e.touches.length === 2) {
      e.preventDefault();
      const t1 = e.touches[0];
      const t2 = e.touches[1];
      this.initialPinchDistance = Math.hypot(t2.clientX - t1.clientX, t2.clientY - t1.clientY);
      this.initialPinchScale = this.scale;
      this.pinchCenter = {
        x: (t1.clientX + t2.clientX) / 2,
        y: (t1.clientY + t2.clientY) / 2
      };
    }
  }

  onTouchMove(e) {
    if (!this.isActive()) return;
    if (e.touches.length === 2 && this.initialPinchDistance > 0) {
      e.preventDefault();
      const t1 = e.touches[0];
      const t2 = e.touches[1];
      const currentDist = Math.hypot(t2.clientX - t1.clientX, t2.clientY - t1.clientY);
      const ratio = currentDist / this.initialPinchDistance;
      const targetScale = this.initialPinchScale * ratio;
      this.zoomTo(targetScale, this.pinchCenter.x, this.pinchCenter.y, false);
    }
  }

  onTouchEnd(e) {
    if (e.touches.length < 2) {
      this.initialPinchDistance = 0;
    }
  }

  onKeyDown(e) {
    if (!this.isActive()) return;

    if (e.key === '+' || e.key === '=') {
      e.preventDefault();
      this.zoomBy(0.5);
    } else if (e.key === '-' || e.key === '_') {
      e.preventDefault();
      this.zoomBy(-0.5);
    } else if (e.key === '0') {
      e.preventDefault();
      this.reset(true);
    } else if (this.scale > 1.0) {
      const step = 60;
      let nextX = this.pan.x;
      let nextY = this.pan.y;
      let handled = false;

      if (e.key === 'ArrowLeft') { nextX += step; handled = true; }
      else if (e.key === 'ArrowRight') { nextX -= step; handled = true; }
      else if (e.key === 'ArrowUp') { nextY += step; handled = true; }
      else if (e.key === 'ArrowDown') { nextY -= step; handled = true; }

      if (handled) {
        e.preventDefault();
        this.pan = this.clampPan(nextX, nextY, this.scale);
        this.applyTransform(true);
      }
    }
  }

  zoomBy(stepDelta) {
    const targetScale = this.scale + stepDelta;
    this.zoomTo(targetScale, window.innerWidth / 2, window.innerHeight / 2, true);
    sounds.playClick();
  }

  zoomTo(targetScale, focalX = window.innerWidth / 2, focalY = window.innerHeight / 2, animate = true) {
    const oldScale = this.scale;
    const newScale = Math.max(this.minScale, Math.min(this.maxScale, targetScale));

    if (Math.abs(newScale - 1.0) < 0.02) {
      this.reset(animate);
      return;
    }

    const ratio = newScale / oldScale;

    // Viewport image center
    const centerX = window.innerWidth / 2 + this.pan.x;
    const centerY = window.innerHeight / 2 + this.pan.y;

    const dx = focalX - centerX;
    const dy = focalY - centerY;

    const nextPanX = this.pan.x - dx * (ratio - 1);
    const nextPanY = this.pan.y - dy * (ratio - 1);

    this.scale = newScale;
    this.pan = this.clampPan(nextPanX, nextPanY, this.scale);

    this.applyTransform(animate);
    this.updateUI();
    this.updateCursorState();
  }

  clampPan(panX, panY, scale) {
    if (scale <= 1.01) {
      return { x: 0, y: 0 };
    }

    const screenW = window.innerWidth;
    const screenH = window.innerHeight;

    const naturalW = this.imageEl.naturalWidth || screenW;
    const naturalH = this.imageEl.naturalHeight || screenH;
    const imgAspect = naturalW / naturalH;
    const screenAspect = screenW / screenH;

    let baseW, baseH;
    if (imgAspect > screenAspect) {
      baseW = screenW;
      baseH = screenW / imgAspect;
    } else {
      baseH = screenH;
      baseW = screenH * imgAspect;
    }

    const currentW = baseW * scale;
    const currentH = baseH * scale;

    const maxPanX = currentW > screenW ? (currentW - screenW) / 2 + 60 : 20;
    const maxPanY = currentH > screenH ? (currentH - screenH) / 2 + 60 : 20;

    return {
      x: Math.max(-maxPanX, Math.min(maxPanX, panX)),
      y: Math.max(-maxPanY, Math.min(maxPanY, panY))
    };
  }

  applyTransform(animate = false) {
    if (!this.imageEl) return;
    this.imageEl.style.transition = animate ? 'transform 0.32s cubic-bezier(0.16, 1, 0.3, 1)' : 'none';
    this.imageEl.style.transform = `translate3d(${Math.round(this.pan.x)}px, ${Math.round(this.pan.y)}px, 0) scale(${this.scale.toFixed(3)})`;
  }

  reset(animate = false) {
    this.scale = 1.0;
    this.pan = { x: 0, y: 0 };
    this.applyTransform(animate);
    this.updateUI();
    if (this.isActive()) {
      this.updateCursorState(false);
    } else if (this.cursor) {
      this.cursor.setState('default');
    }
  }

  updateUI() {
    if (this.valText) {
      const pct = Math.round(this.scale * 100);
      this.valText.textContent = `${pct}%`;
    }
  }

  updateCursorState(isGrabbing = false) {
    if (!this.cursor) return;

    if (!this.isActive()) {
      this.cursor.setState('default');
      return;
    }

    if (isGrabbing) {
      this.cursor.setState('is-grabbing');
    } else if (this.scale > 1.05) {
      this.cursor.setState('is-zoom-out');
    } else {
      this.cursor.setState('is-zoom-in');
    }
  }
}
