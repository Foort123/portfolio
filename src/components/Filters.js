import { sounds } from './SoundEffects.js';

export class Filters {
  constructor(projects, onFilterChange) {
    this.projects = projects;
    this.onFilterChange = onFilterChange;
    this.container = document.querySelector('.project-filters');
    this.listEl = document.querySelector('.project-filters__list');
    this.pillEl = document.querySelector('.filter-active-pill');
    this.currentFilter = 'all';

    this.init();
  }

  init() {
    if (!this.listEl) return;

    // Dynamically calculate counts for all categories
    const counts = { all: this.projects.length };
    this.projects.forEach(p => {
      (p.categories || []).forEach(cat => {
        counts[cat] = (counts[cat] || 0) + 1;
      });
    });

    // Update counts in DOM
    const buttons = this.listEl.querySelectorAll('.filter-btn');
    buttons.forEach((btn) => {
      const filter = btn.dataset.filter;
      const countEl = btn.querySelector('.filter-btn__count');
      if (countEl && counts[filter] !== undefined) {
        countEl.textContent = counts[filter];
      }

      btn.addEventListener('mouseenter', () => {
        sounds.playRatchet();
      });

      btn.addEventListener('click', () => {
        sounds.playClick();
        this.setFilter(filter, btn);
      });
    });

    const activeBtn = this.listEl.querySelector('.filter-btn.is-active');
    if (activeBtn) {
      this.updatePillPosition(activeBtn);
    }

    window.addEventListener('resize', () => {
      const currentActive = this.listEl.querySelector('.filter-btn.is-active');
      if (currentActive) this.updatePillPosition(currentActive);
    });
  }

  setFilter(filter, targetBtn) {
    if (this.currentFilter === filter) return;
    this.currentFilter = filter;

    const buttons = this.listEl.querySelectorAll('.filter-btn');
    buttons.forEach(b => b.classList.remove('is-active'));
    targetBtn.classList.add('is-active');

    this.updatePillPosition(targetBtn);

    if (this.onFilterChange) {
      this.onFilterChange(filter);
    }
  }

  updatePillPosition(btn) {
    if (!this.pillEl || !btn) return;
    const btnRect = btn.getBoundingClientRect();
    const listRect = this.listEl.getBoundingClientRect();

    const left = btnRect.left - listRect.left;
    const width = btnRect.width;

    this.pillEl.style.transform = `translateX(${left}px)`;
    this.pillEl.style.width = `${width}px`;
  }
}
