import { projects } from './data/projects.js';
import { SceneManager } from './webgl/SceneManager.js';
import { ProjectGallery } from './webgl/ProjectGallery.js';
import { Cursor } from './components/Cursor.js';
import { Menu } from './components/Menu.js';
import { Filters } from './components/Filters.js';
import { Preloader } from './components/Preloader.js';
import { ProjectModal } from './components/ProjectModal.js';
import { sounds } from './components/SoundEffects.js';
import { JumpingCharacter } from './components/JumpingCharacter.js';

class App {
  constructor() {
    this.projects = projects;
    this.canvas = document.getElementById('gl');
    this.cursor = new Cursor();
    window.__cursor = this.cursor;
    this.modal = new ProjectModal(projects, this.cursor);
    this.menu = new Menu();
    // Character hidden by user request. Can be toggled with window.__showCharacter() / window.__hideCharacter()
    this.character = null;
    this.sm = null;
    this.gallery = null;
    this.filters = null;

    window.__showCharacter = () => this.showCharacter();
    window.__hideCharacter = () => this.hideCharacter();

    this.initAudioToggle();
    this.initNavEvents();
    this.initWebGL();
    this.initPreloader();
  }

  initAudioToggle() {
    const audioBtn = document.querySelector('.js-audio-toggle');
    const audioWaves = audioBtn?.querySelector('.audio-waves');

    audioBtn?.addEventListener('click', () => {
      sounds.init();
      const isMuted = sounds.toggleMute();
      if (isMuted) {
        audioWaves?.classList.remove('is-playing');
        audioWaves?.classList.add('is-muted');
      } else {
        audioWaves?.classList.add('is-playing');
        audioWaves?.classList.remove('is-muted');
        sounds.playClick();
      }
    });
  }

  initNavEvents() {
    const navItems = document.querySelectorAll('.js-nav-link');
    navItems.forEach((item) => {
      item.addEventListener('mouseenter', () => sounds.playRatchet());
      item.addEventListener('click', () => sounds.playClick());
    });
  }

  initWebGL() {
    this.sm = new SceneManager(this.canvas);
    this.gallery = new ProjectGallery(this.sm, projects, this.cursor, this.modal);

    this.filters = new Filters(projects, (category) => {
      this.gallery.filter(category);
    });

    this.loop();
  }

  initPreloader() {
    this.preloader = new Preloader(() => {
      const slug = new URLSearchParams(window.location.search).get('p');
      if (slug) {
        const found = projects.find(p => p.id === slug);
        if (found) this.modal.open(found, { updateUrl: false });
      }
    });
  }

  showCharacter() {
    if (!this.character) {
      this.character = new JumpingCharacter();
      this.character.drivenByApp = true;
    }
    return this.character;
  }

  hideCharacter() {
    if (this.character) {
      this.character.destroy?.();
      this.character = null;
    }
  }

  loop() {
    this.sm.update();
    this.gallery.update();
    this.sm.render();

    if (this.character) {
      if (this.gallery) {
        this.character.onScroll(this.gallery.scroll.velocity);
      }
      this.character.tick(0.016);
    }

    requestAnimationFrame(() => this.loop());
  }
}

window.addEventListener('DOMContentLoaded', () => {
  window.__app = new App();
});
