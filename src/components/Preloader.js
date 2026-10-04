import { sounds } from './SoundEffects.js';
import { LoaderCharacter } from './LoaderCharacter.js';

export class Preloader {
  constructor(onComplete) {
    this.el = document.querySelector('.loader');
    this.bar = document.querySelector('.loader-track__bar');
    this.canvas = document.querySelector('.loader__character-canvas');
    this.onComplete = onComplete;
    this.progress = 0;
    this.isFinished = false;

    if (this.canvas) {
      this.character = new LoaderCharacter(this.canvas);
    }

    this.bindEvents();
    this.startLoading();
  }

  bindEvents() {
    // Global delegated click handler: catches ANY click on ANY enter button
    document.addEventListener('click', (e) => {
      if (this.isFinished) return;

      const audioBtn = e.target.closest('.js-enter-audio');
      if (audioBtn) {
        e.preventDefault();
        e.stopPropagation();
        this.handleEnter(true);
        return;
      }

      const noAudioBtn = e.target.closest('.js-enter-no-audio');
      if (noAudioBtn) {
        e.preventDefault();
        e.stopPropagation();
        this.handleEnter(false);
        return;
      }
    });

    const allAudioBtns = document.querySelectorAll('.js-enter-audio');
    allAudioBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        this.handleEnter(true);
      });
    });

    const allNoAudioBtns = document.querySelectorAll('.js-enter-no-audio');
    allNoAudioBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        this.handleEnter(false);
      });
    });
  }

  handleEnter(withAudio) {
    if (this.isFinished) return;
    this.isFinished = true;

    try {
      sounds.init();
      sounds.setMuted(!withAudio);
      if (withAudio) {
        sounds.playEnterChime();
      }
    } catch (err) {
      console.warn('Audio initialization warning:', err);
    }

    this.finish();
  }

  startLoading() {
    const interval = setInterval(() => {
      if (this.isFinished) {
        clearInterval(interval);
        return;
      }

      this.progress += Math.floor(Math.random() * 8) + 4;

      if (this.progress >= 100) {
        this.progress = 100;
        clearInterval(interval);
      }

      if (this.bar) {
        this.bar.style.width = `${this.progress}%`;
      }
    }, 60);
  }

  finish() {
    if (this.el) {
      this.el.classList.add('is-loaded');
      setTimeout(() => {
        if (this.character) this.character.destroy();
        this.el.style.display = 'none';
        if (this.onComplete) this.onComplete();
      }, 900);
    }
  }
}
