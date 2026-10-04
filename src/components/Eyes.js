// Interactive Cartoon Eyes following cursor & blinking (Unseen Studio feature)

export class LoaderEyes {
  constructor(svgEl) {
    this.svg = svgEl;
    if (!this.svg) return;

    this.leftPupil = this.svg.querySelector('.js-eyes-left');
    this.rightPupil = this.svg.querySelector('.js-eyes-right');
    this.eyelids = this.svg.querySelectorAll('[class*="js-eyes-eyelid"]');

    this.target = { x: 0, y: 0 };
    this.current = { x: 0, y: 0 };

    this.init();
  }

  init() {
    window.addEventListener('mousemove', (e) => {
      const rect = this.svg.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX);
      const dist = Math.min(18, Math.hypot(e.clientX - centerX, e.clientY - centerY) * 0.05);

      this.target.x = Math.cos(angle) * dist;
      this.target.y = Math.sin(angle) * dist;
    });

    this.animate();
    this.startBlinking();
  }

  animate() {
    this.current.x += (this.target.x - this.current.x) * 0.15;
    this.current.y += (this.target.y - this.current.y) * 0.15;

    if (this.leftPupil) {
      this.leftPupil.style.transform = `translate(${this.current.x}px, ${this.current.y}px)`;
    }
    if (this.rightPupil) {
      this.rightPupil.style.transform = `translate(${this.current.x}px, ${this.current.y}px)`;
    }

    this.rafId = requestAnimationFrame(() => this.animate());
  }

  startBlinking() {
    const blink = () => {
      if (this.eyelids.length > 0) {
        this.eyelids.forEach(el => {
          el.style.transform = 'scaleY(1)';
          el.style.opacity = '1';
        });

        setTimeout(() => {
          this.eyelids.forEach(el => {
            el.style.transform = 'scaleY(0)';
            el.style.opacity = '0';
          });
        }, 140);
      }

      const nextBlink = Math.random() * 4000 + 2000;
      this.blinkTimeout = setTimeout(blink, nextBlink);
    };

    this.blinkTimeout = setTimeout(blink, 2500);
  }

  destroy() {
    if (this.rafId) cancelAnimationFrame(this.rafId);
    if (this.blinkTimeout) clearTimeout(this.blinkTimeout);
  }
}
