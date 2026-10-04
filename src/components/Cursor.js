// Smooth Lerped Custom Cursor with infallible tracking

export class Cursor {
  constructor() {
    this.el = document.querySelector('.custom-cursor');
    this.pos = {
      current: { x: window.innerWidth / 2, y: window.innerHeight / 2 },
      target: { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    };
    this.ease = 0.22;
    this.state = 'default';
    this.rafId = null;
    this.hasMoved = false;

    if (!this.el) return;

    this.initEvents();
    this.render();
  }

  initEvents() {
    const handleMove = (e) => {
      this.pos.target.x = e.clientX;
      this.pos.target.y = e.clientY;

      if (!this.hasMoved) {
        this.hasMoved = true;
        this.pos.current.x = e.clientX;
        this.pos.current.y = e.clientY;
        document.documentElement.classList.add('has-custom-cursor');
      }
      this.el.classList.remove('is-hidden');
      this.el.classList.add('is-visible');

      // Check if cursor is over dark section (like dark enter button, dark menu or billboard image)
      const isDark = e.target.closest('.loader__enter-btn, .menu.is-active, .project-screen.is-image-mode');
      if (isDark) {
        this.el.classList.add('is-dark-surface');
      } else {
        this.el.classList.remove('is-dark-surface');
      }
    };

    window.addEventListener('pointermove', handleMove, { passive: true });
    window.addEventListener('mousemove', handleMove, { passive: true });
    window.addEventListener('pointerdown', handleMove, { passive: true });

    const hideCursor = () => {
      this.el.classList.add('is-hidden');
      this.el.classList.remove('is-visible');
    };

    const showCursor = () => {
      if (this.hasMoved) {
        this.el.classList.remove('is-hidden');
        this.el.classList.add('is-visible');
      }
    };

    document.addEventListener('mouseleave', hideCursor);
    document.documentElement.addEventListener('mouseleave', hideCursor);
    window.addEventListener('mouseleave', hideCursor);
    document.addEventListener('pointerleave', hideCursor);
    window.addEventListener('blur', hideCursor);

    document.addEventListener('mouseenter', showCursor);
    document.documentElement.addEventListener('mouseenter', showCursor);
    window.addEventListener('mouseenter', showCursor);
    document.addEventListener('pointerenter', showCursor);
    window.addEventListener('focus', showCursor);

    // Keep cursor inside Fullscreen Top Layer so it remains visible in fullscreen mode
    const handleFullscreen = () => {
      if (!this.el) return;
      if (document.fullscreenElement) {
        document.fullscreenElement.appendChild(this.el);
      } else {
        document.body.appendChild(this.el);
      }
      this.el.classList.remove('is-hidden');
      this.el.classList.add('is-visible');
    };
    document.addEventListener('fullscreenchange', handleFullscreen);
    document.addEventListener('webkitfullscreenchange', handleFullscreen);

    // Hide custom cursor when pointer moves into an iframe, restore on floating controls
    const frame = document.getElementById('project-viewer-frame');
    frame?.addEventListener('mouseenter', hideCursor);

    const backBtn = document.querySelector('.project-screen__floating-back');
    backBtn?.addEventListener('pointerenter', showCursor);
    backBtn?.addEventListener('mouseenter', showCursor);

    this.isHoveringUI = false;

    // Detect clickable elements for pointer state (top panel, buttons, links have strict priority)
    document.addEventListener('mouseover', (e) => {
      const target = e.target.closest('a, button, [data-cursor="pointer"], .interactive, .filter-btn, .nav-item, .audio-toggle-btn, .project-filters__inner');
      if (target) {
        this.isHoveringUI = true;
        this.setState('is-pointer');
      }
    });

    document.addEventListener('mouseout', (e) => {
      const target = e.target.closest('a, button, [data-cursor="pointer"], .interactive, .filter-btn, .nav-item, .audio-toggle-btn, .project-filters__inner');
      if (target) {
        this.isHoveringUI = false;
        if (this.state === 'is-pointer') {
          if (document.documentElement.classList.contains('is-project-open') && window.__imageZoomManager?.isActive()) {
            window.__imageZoomManager.updateCursorState();
          } else {
            this.setState('default');
          }
        }
      }
    });
  }

  setState(stateName) {
    // If a project is open or preloader is active, strictly prevent card drag/video hover ("Открыть")
    if ((document.documentElement.classList.contains('is-project-open') || document.querySelector('.loader:not(.is-loaded)')) && (stateName === 'is-drag' || stateName === 'is-video')) {
      return;
    }

    // If hovering top panel or interactive UI, strictly prevent card drag/video hover takeover
    if (this.isHoveringUI && (stateName === 'is-drag' || stateName === 'is-video')) {
      return;
    }

    // Strictly prevent zoom cursor states (magnifying glass) if not in image mode (e.g. on sites or main gallery)
    if (!document.documentElement.classList.contains('is-project-image-mode') && (stateName === 'is-zoom-in' || stateName === 'is-zoom-out' || stateName === 'is-grabbing')) {
      return;
    }

    if (this.state === stateName) return;
    this.el.classList.remove('is-pointer', 'is-drag', 'is-video', 'is-zoom-in', 'is-zoom-out', 'is-grabbing');
    this.state = stateName;
    if (stateName !== 'default') {
      this.el.classList.add(stateName);
    }
  }

  render() {
    this.pos.current.x += (this.pos.target.x - this.pos.current.x) * this.ease;
    this.pos.current.y += (this.pos.target.y - this.pos.current.y) * this.ease;

    this.el.style.transform = `translate3d(${this.pos.current.x}px, ${this.pos.current.y}px, 0)`;

    this.rafId = requestAnimationFrame(() => this.render());
  }

  destroy() {
    if (this.rafId) cancelAnimationFrame(this.rafId);
  }
}
