import { sounds } from './SoundEffects.js';
import { ImageZoomManager } from './ImageZoomManager.js';

export class ProjectModal {
  constructor(projects = [], cursor = null) {
    this.projects = projects;
    this.cursor = cursor;
    this.siteMain = document.getElementById('site-main');
    this.el = document.getElementById('project-viewer'); // .project-screen
    
    // Header elements
    this.indexEl = document.getElementById('project-viewer-index');
    this.titleEl = document.getElementById('project-viewer-title');
    this.catEl = document.getElementById('project-viewer-cat');
    this.externalLink = document.getElementById('project-viewer-external-link');

    // Stage media
    this.imageEl = document.getElementById('project-viewer-image');
    this.frameEl = document.getElementById('project-viewer-frame');
    this.loaderEl = this.el?.querySelector('.project-viewer__loader');

    // Action buttons
    this.shareBtn = document.getElementById('project-viewer-share');
    this.fullscreenBtn = document.getElementById('project-viewer-fullscreen');
    this.closeBtn = document.getElementById('project-viewer-close');
    this.backBtns = document.querySelectorAll('.js-project-back');

    this.currentProject = null;
    this.cleanupTimer = null;
    this.readyFallbackTimer = null;
    this.shareTimer = null;
    this.frameStylePollTimer = null;

    if (!this.el) return;

    this.zoomManager = new ImageZoomManager({
      screenEl: this.el,
      cursor: this.cursor
    });
    window.__imageZoomManager = this.zoomManager;

    this.initEvents();
  }

  initEvents() {
    // Back & Close buttons
    this.backBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        this.close();
      });
    });

    // Escape key
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.el.classList.contains('is-active')) {
        if (document.fullscreenElement) {
          document.exitFullscreen().catch(() => {});
        } else {
          this.close();
        }
      }
      if (e.key === 'F11') {
        setTimeout(() => {
          this.syncFullscreenIcon();
        }, 150);
      }
    });

    // Share button
    this.shareBtn?.addEventListener('click', () => this.handleShare());

    // Fullscreen button
    this.fullscreenBtn?.addEventListener('click', () => this.toggleFullscreen());
    document.addEventListener('fullscreenchange', () => {
      this.syncFullscreenIcon();
    });

    // Image & Frame load events
    this.imageEl?.addEventListener('load', () => {
      this.el.classList.add('is-ready');
      this.zoomManager?.reset(false);
    });

    const onFrameReady = () => {
      clearTimeout(this.readyFallbackTimer);
      this.injectFrameStyles();
      if (this.frameEl && this.frameEl.src && !this.frameEl.src.endsWith('about:blank')) {
        this.el.classList.add('is-ready');
      }
    };
    this.frameEl?.addEventListener('load', onFrameReady);
    if (this.frameEl) this.frameEl.onload = onFrameReady;

    // Deep linking URL popstate
    window.addEventListener('popstate', () => {
      const slug = new URLSearchParams(window.location.search).get('p');
      if (slug) {
        const found = this.projects.find(p => p.id === slug);
        if (found) this.open(found, { updateUrl: false });
      } else if (this.el.classList.contains('is-active') || this.el.classList.contains('is-open')) {
        this.close({ updateUrl: false });
      }
    });
  }

  open(project, { updateUrl = true } = {}) {
    if (!project) return;
    sounds.playClick();
    this.currentProject = project;

    clearTimeout(this.cleanupTimer);
    clearTimeout(this.readyFallbackTimer);
    this.el.classList.remove('is-ready');

    // Populate header info
    if (this.indexEl) this.indexEl.textContent = project.index || '01';
    if (this.titleEl) this.titleEl.textContent = project.title || '';
    if (this.catEl) {
      const catText = project.categoryLabel || (
        project.categories?.includes('sites') ? 'Сайт' :
        project.categories?.includes('billboards') ? 'Билборд' : 'Превью'
      );
      this.catEl.textContent = catText;
    }

    const isSite = project.link && project.link.endsWith('.html');

    if (isSite) {
      document.documentElement.classList.remove('is-project-image-mode');
      this.el.classList.remove('is-image-mode');
      this.zoomManager?.reset(false);
      if (this.cursor) {
        this.cursor.setState('default');
      }

      // Show external button in actions for sites
      if (this.externalLink) {
        this.externalLink.style.display = 'inline-flex';
        this.externalLink.href = project.link;
      }

      if (this.imageEl) {
        this.imageEl.style.display = 'none';
        this.imageEl.removeAttribute('src');
      }

      if (this.frameEl) {
        this.frameEl.removeAttribute('hidden');
        this.frameEl.style.display = 'block';
        this.frameEl.src = project.link;
        clearInterval(this.frameStylePollTimer);
        this.injectFrameStyles();
        let attempts = 0;
        this.frameStylePollTimer = setInterval(() => {
          this.injectFrameStyles();
          attempts++;
          if (attempts > 50) clearInterval(this.frameStylePollTimer);
        }, 30);
        this.readyFallbackTimer = setTimeout(() => {
          this.el.classList.add('is-ready');
        }, 2500);
      }
    } else {
      document.documentElement.classList.add('is-project-image-mode');
      this.el.classList.add('is-image-mode');
      this.zoomManager?.reset(false);

      // Hide external button for static graphics
      if (this.externalLink) this.externalLink.style.display = 'none';

      if (this.frameEl) {
        this.frameEl.style.display = 'none';
        this.frameEl.removeAttribute('src');
      }

      if (this.imageEl) {
        this.imageEl.removeAttribute('hidden');
        this.imageEl.style.display = 'block';
        this.imageEl.src = project.link || project.image;
      }
    }

    // Trigger physical horizontal slide transition
    document.documentElement.classList.add('is-project-open');
    this.el.setAttribute('aria-hidden', 'false');
    this.el.classList.add('is-active', 'is-open');
    this.siteMain?.classList.add('is-slid-out');

    // Reset custom cursor immediately from card drag / zoom states
    const cursorEl = document.querySelector('.custom-cursor');
    if (cursorEl) {
      cursorEl.classList.remove('is-drag', 'is-video');
      if (isSite) {
        cursorEl.classList.remove('is-zoom-in', 'is-zoom-out', 'is-grabbing');
      }
    }

    if (updateUrl && project.id) {
      history.replaceState({ p: project.id }, '', `?p=${project.id}`);
    }
  }

  close({ updateUrl = true } = {}) {
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    }

    if (!this.el.classList.contains('is-active') && !this.el.classList.contains('is-open')) return;
    sounds.playClick();

    document.documentElement.classList.remove('is-project-image-mode');
    this.zoomManager?.reset(false);
    if (this.cursor) {
      this.cursor.setState('default');
    }

    // Trigger reverse horizontal slide transition
    document.documentElement.classList.remove('is-project-open');
    this.el.classList.remove('is-active', 'is-open');
    this.siteMain?.classList.remove('is-slid-out');
    this.el.setAttribute('aria-hidden', 'true');
    this.currentProject = null;

    const cursorEl = document.querySelector('.custom-cursor');
    if (cursorEl) {
      cursorEl.classList.remove('is-drag', 'is-video', 'is-zoom-in', 'is-zoom-out', 'is-grabbing');
    }

    if (updateUrl) {
      history.replaceState({ p: null }, '', window.location.pathname);
    }

    clearInterval(this.frameStylePollTimer);
    clearTimeout(this.cleanupTimer);
    clearTimeout(this.readyFallbackTimer);

    // Clean up media after transition finishes (800ms)
    this.cleanupTimer = setTimeout(() => {
      this.el.classList.remove('is-ready');
      this.el.classList.remove('is-image-mode');
      if (this.imageEl) {
        this.imageEl.removeAttribute('src');
        this.imageEl.hidden = true;
      }
      if (this.frameEl) {
        this.frameEl.removeAttribute('src');
        this.frameEl.hidden = true;
      }
    }, 800);
  }

  injectFrameStyles() {
    try {
      if (!this.frameEl) return;
      const frameDoc = this.frameEl.contentDocument || this.frameEl.contentWindow?.document;
      if (!frameDoc) return;
      if (frameDoc.getElementById('klourk-hide-scrollbars')) return;

      const style = frameDoc.createElement('style');
      style.id = 'klourk-hide-scrollbars';
      style.textContent = `
        html::-webkit-scrollbar,
        body::-webkit-scrollbar,
        *::-webkit-scrollbar {
          display: none !important;
          width: 0 !important;
          height: 0 !important;
          background: transparent !important;
        }
        html, body, * {
          -ms-overflow-style: none !important;
          scrollbar-width: none !important;
          scrollbar-gutter: auto !important;
        }
        /* Offset header navbar to avoid overlapping floating back button */
        .nav {
          padding-left: 125px !important;
        }
      `;
      const target = frameDoc.head || frameDoc.documentElement || frameDoc.body;
      if (target) {
        target.appendChild(style);
      }
    } catch (e) {
      // Cross-origin fallback if applicable
    }
  }

  async handleShare() {
    if (!this.currentProject) return;
    const link = `${window.location.origin}${window.location.pathname}?p=${this.currentProject.id}`;
    const label = this.shareBtn?.querySelector('.project-viewer__share-label');

    let ok = false;
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(link);
        ok = true;
      } else {
        const tmp = document.createElement('textarea');
        tmp.value = link;
        tmp.style.position = 'fixed';
        tmp.style.opacity = '0';
        document.body.appendChild(tmp);
        tmp.select();
        document.execCommand('copy');
        tmp.remove();
        ok = true;
      }
    } catch (e) {
      ok = false;
    }

    if (label) label.textContent = ok ? 'Скопировано!' : 'Ошибка';
    this.shareBtn?.classList.toggle('is-copied', ok);

    clearTimeout(this.shareTimer);
    this.shareTimer = setTimeout(() => {
      if (label) label.textContent = 'Поделиться';
      this.shareBtn?.classList.remove('is-copied');
    }, 1600);
  }

  async toggleFullscreen() {
    sounds.playClick();
    try {
      if (document.fullscreenElement) {
        await document.exitFullscreen();
      } else {
        await document.documentElement.requestFullscreen();
      }
    } catch (e) {
      console.warn('Fullscreen toggle failed:', e);
    } finally {
      this.syncFullscreenIcon();
    }
  }

  syncFullscreenIcon() {
    if (!this.fullscreenBtn) return;
    const isFull = !!document.fullscreenElement;
    this.fullscreenBtn.setAttribute('title', isFull ? 'Свернуть' : 'Во весь экран');
    this.fullscreenBtn.setAttribute('aria-label', isFull ? 'Свернуть' : 'Во весь экран');

    const svg = this.fullscreenBtn.querySelector('svg');
    if (svg) {
      if (isFull) {
        svg.innerHTML = '<path d="M4 14h6m0 0v6m0-6L3 21m17-7h-6m0 0v6m0-6l7 7M10 4v6m0 0H4m6 0L3 3m14 7h6m-6 0V4m0 6l7-7"/>';
      } else {
        svg.innerHTML = '<path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/>';
      }
    }
  }
}
