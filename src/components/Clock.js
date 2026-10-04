// Live UK Studio Clock Component

export class StudioClock {
  constructor(el) {
    this.el = el;
    if (!this.el) return;

    this.update();
    setInterval(() => this.update(), 1000);
  }

  update() {
    const now = new Date();
    // Format in London/Bristol time
    const options = {
      timeZone: 'Europe/London',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    };
    const timeStr = new Intl.DateTimeFormat('en-GB', options).format(now);
    this.el.textContent = `Bristol, UK ${timeStr} GMT`;
  }
}
