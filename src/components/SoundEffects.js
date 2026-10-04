// Web Audio API Sound Synthesizer with Dynamic Pitch Modulation

class SoundEffects {
  constructor() {
    this.ctx = null;
    this.isMuted = false;
    this.initialized = false;
    this.ratchetCounter = 0;
  }

  init() {
    if (this.initialized) return;
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
      this.initialized = true;
    } catch (e) {
      console.warn('Web Audio API not supported', e);
    }
  }

  resume() {
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    return this.isMuted;
  }

  setMuted(val) {
    this.isMuted = val;
  }

  // Soft mechanical ratchet tick with realistic micro-pitch variation
  playRatchet() {
    if (this.isMuted || !this.ctx) return;
    this.resume();

    this.ratchetCounter++;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    // Subtle pitch variation for organic mechanical feel
    const pitchOffset = (this.ratchetCounter % 4) * 45;
    const startFreq = 1350 + pitchOffset;

    osc.type = 'sine';
    osc.frequency.setValueAtTime(startFreq, now);
    osc.frequency.exponentialRampToValueAtTime(320, now + 0.022);

    gain.gain.setValueAtTime(0.045, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.022);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.022);
  }

  // Crisp tactile click
  playClick() {
    if (this.isMuted || !this.ctx) return;
    this.resume();

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(840, now);
    osc.frequency.exponentialRampToValueAtTime(180, now + 0.038);

    gain.gain.setValueAtTime(0.075, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.038);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.038);
  }

  // Soft playful jump hop
  playHop() {
    if (this.isMuted || !this.ctx) return;
    this.resume();

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(240, now);
    osc.frequency.exponentialRampToValueAtTime(480, now + 0.075);

    gain.gain.setValueAtTime(0.035, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.075);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.075);
  }

  // Luxurious warm atmospheric chord on entrance
  playEnterChime() {
    if (this.isMuted || !this.ctx) return;
    this.resume();

    const now = this.ctx.currentTime;
    const frequencies = [261.63, 329.63, 392.00, 523.25, 659.25]; // C major 7th chord

    frequencies.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + idx * 0.04);

      gain.gain.setValueAtTime(0, now + idx * 0.04);
      gain.gain.linearRampToValueAtTime(0.045, now + idx * 0.04 + 0.08);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.04 + 1.4);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now + idx * 0.04);
      osc.stop(now + idx * 0.04 + 1.5);
    });
  }

  // Delicate woody tactile tap when sticks collide
  playWoodClack(volume = 0.035) {
    if (this.isMuted || !this.ctx) return;
    this.resume();

    const now = this.ctx.currentTime;
    if (this.lastWoodClack && now - this.lastWoodClack < 0.1) return; // Prevent spam
    this.lastWoodClack = now;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'triangle';
    const pitch = 660 + Math.random() * 120;
    osc.frequency.setValueAtTime(pitch, now);
    osc.frequency.exponentialRampToValueAtTime(280, now + 0.022);

    gain.gain.setValueAtTime(volume, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.022);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.022);
  }
}

export const sounds = new SoundEffects();
