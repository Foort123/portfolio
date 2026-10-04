import { sounds } from './SoundEffects.js';

export class Menu {
  constructor() {
    this.menuEl = document.querySelector('.menu');
    this.toggleBtn = document.querySelector('.js-menu-toggle');
    this.headerEl = document.querySelector('.header');
    this.isOpen = false;

    if (!this.toggleBtn || !this.menuEl) return;

    this.initEvents();
  }

  initEvents() {
    this.toggleBtn.addEventListener('click', () => {
      sounds.playClick();
      this.toggle();
    });

    const menuLinks = this.menuEl.querySelectorAll('a');
    menuLinks.forEach((link) => {
      link.addEventListener('mouseenter', () => {
        sounds.playRatchet();
      });

      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          this.close();
        }
      });
    });

    // Close on Escape key
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen) {
        this.close();
      }
    });
  }

  toggle() {
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }

  open() {
    this.isOpen = true;
    this.menuEl.classList.add('is-active');
    document.body.classList.add('menu-open');
    document.querySelector('.project-filters')?.classList.add('is-hidden');
    document.querySelector('.project-grid-cta')?.classList.add('is-hidden');
  }

  close() {
    this.isOpen = false;
    this.menuEl.classList.remove('is-active');
    document.body.classList.remove('menu-open');
    document.querySelector('.project-filters')?.classList.remove('is-hidden');
    if (window.__app?.gallery?.scroll?.current > 80) {
      document.querySelector('.project-grid-cta')?.classList.remove('is-hidden');
    }
  }
}
