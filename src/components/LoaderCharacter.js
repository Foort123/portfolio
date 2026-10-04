// Interactive Minimalist Character standing on a 3D platform throwing letters K L O U R K
// Stylized to match reference: tactile steel letters, 3D rose-gold beveled podium with glowing white rim

export class LoaderCharacter {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.dpr = Math.min(window.devicePixelRatio || 1, 2);

    this.width = 500;
    this.height = 295;
    this.canvas.width = this.width * this.dpr;
    this.canvas.height = this.height * this.dpr;
    this.ctx.scale(this.dpr, this.dpr);

    this.time = 0;
    this.lastTime = null;
    this.animId = null;
    this.isDestroyed = false;

    // Center coordinates
    this.centerX = 250;
    this.platformBaseY = 226;

    // Mouse tracking
    this.mouse = { x: 250, y: 130, isOver: false };

    // Eye blinking
    this.blinkTimer = 0;
    this.isBlinking = false;

    // Letters system
    this.lettersList = ['K', 'L', 'O', 'U', 'R', 'K'];
    this.nextLetterIndex = 0;
    this.throwTimer = 0;
    this.throwInterval = 0.52; // Sped up cadence between letter throws
    this.activeLetters = [];

    // Target constellation arch coordinates with plenty of ceiling headroom (Y=50..96)
    this.archTargets = [
      { x: 96,  y: 96 },  // K (left)
      { x: 154, y: 66 },  // L
      { x: 219, y: 50 },  // O
      { x: 275, y: 50 },  // U
      { x: 336, y: 66 },  // R
      { x: 396, y: 96 },  // K (right)
    ];

    // Character state: 'throwing', 'celebrating', 'resetting'
    this.charState = 'throwing';
    this.celebrateTimer = 0;
    this.armThrowPhase = 0;
    this.jumpY = 0;
    this.jumpVy = 0;

    this.bindEvents();
    this.loop = this.loop.bind(this);
    this.animId = requestAnimationFrame(this.loop);
  }

  bindEvents() {
    this.onMouseMove = (e) => {
      const rect = this.canvas.getBoundingClientRect();
      this.mouse.x = (e.clientX - rect.left) * (this.width / rect.width);
      this.mouse.y = (e.clientY - rect.top) * (this.height / rect.height);
      this.mouse.isOver = true;
    };

    this.onMouseLeave = () => {
      this.mouse.isOver = false;
    };

    this.onClick = () => {
      if (this.jumpY === 0) {
        this.jumpVy = -4.5;
      }
    };

    this.canvas.addEventListener('mousemove', this.onMouseMove);
    this.canvas.addEventListener('mouseleave', this.onMouseLeave);
    this.canvas.addEventListener('click', this.onClick);
  }

  spawnLetter(index) {
    const char = this.lettersList[index];
    const target = this.archTargets[index];
    const handX = this.centerX + 18;
    const handY = this.platformBaseY - 48;

    const letter = {
      char,
      index,
      x: handX,
      y: handY,
      startX: handX,
      startY: handY,
      targetX: target.x,
      targetY: target.y,
      vx: (target.x - handX) * 0.05,
      vy: -8.5,
      rotation: (Math.random() - 0.5) * 0.2,
      vRot: (Math.random() - 0.5) * 0.03,
      scale: 0.5,
      targetScale: 1.0,
      opacity: 1.0,
      status: 'flying',
      flightProgress: 0
    };

    this.activeLetters.push(letter);
  }

  update(dt) {
    // 1. Jump physics
    if (this.jumpVy !== 0 || this.jumpY !== 0) {
      this.jumpY += this.jumpVy;
      this.jumpVy += 0.35;
      if (this.jumpY >= 0) {
        this.jumpY = 0;
        this.jumpVy = 0;
      }
    }

    // 2. Eye blinking
    this.blinkTimer += dt;
    if (this.blinkTimer > 3.5) {
      this.isBlinking = true;
      if (this.blinkTimer > 3.65) {
        this.isBlinking = false;
        this.blinkTimer = Math.random() * 0.8;
      }
    }

    // 3. Throwing State Machine
    if (this.charState === 'throwing') {
      this.throwTimer += dt;
      const cycleProgress = (this.throwTimer % this.throwInterval) / this.throwInterval;
      this.armThrowPhase = cycleProgress;

      if (this.throwTimer >= this.throwInterval) {
        this.throwTimer = 0;
        if (this.nextLetterIndex < this.lettersList.length) {
          this.spawnLetter(this.nextLetterIndex);
          this.nextLetterIndex++;
          if (this.nextLetterIndex >= this.lettersList.length) {
            this.charState = 'celebrating';
            this.celebrateTimer = 0;
          }
        }
      }
    } else if (this.charState === 'celebrating') {
      this.celebrateTimer += dt;
      this.armThrowPhase = 0;

      // Celebrate for 2.8 seconds with complete wordmark displayed
      if (this.celebrateTimer >= 2.8) {
        this.charState = 'resetting';
        this.activeLetters.forEach((l) => {
          l.status = 'dispersing';
          l.vx = (l.x - this.centerX) * 0.03 + (Math.random() - 0.5) * 2;
          l.vy = -2.5 - Math.random() * 2.5;
        });
      }
    } else if (this.charState === 'resetting') {
      this.celebrateTimer += dt;
      if (this.celebrateTimer >= 3.6) {
        this.activeLetters = [];
        this.nextLetterIndex = 0;
        this.throwTimer = 0;
        this.charState = 'throwing';
      }
    }

    // 4. Update Letters
    this.activeLetters.forEach((l) => {
      if (l.status === 'flying') {
        l.flightProgress = Math.min(1, l.flightProgress + dt * 2.65);
        const t = l.flightProgress;
        const ease = 1 - Math.pow(1 - t, 3);
        const arcPeak = -14;
        const arcY = Math.sin(t * Math.PI) * arcPeak;

        l.x = l.startX + (l.targetX - l.startX) * ease;
        const rawY = l.startY + (l.targetY - l.startY) * ease + arcY;
        l.y = Math.max(28, rawY);
        l.scale = 0.5 + 0.5 * ease;
        l.rotation = (1 - ease) * 0.2;

        if (t >= 1) {
          l.status = 'arrived';
          l.x = l.targetX;
          l.y = l.targetY;
          l.rotation = 0;
        }
      } else if (l.status === 'dispersing') {
        l.x += l.vx;
        l.y += l.vy;
        l.vy += 0.14;
        l.rotation += l.vRot * 2;
        l.opacity = Math.max(0, l.opacity - dt * 1.3);
      }
    });
  }

  draw() {
    this.ctx.clearRect(0, 0, this.width, this.height);

    // Silky smooth, calm levitation: 1.1 rad/s (~5.7s period), subtle 1.6px amplitude
    const floatOffset = Math.sin(this.time * 1.1) * 1.6;
    const px = this.centerX;
    const py = this.platformBaseY + floatOffset;

    // --- 1. PLATFORM SHADOW ---
    const shadowRx = 76 - floatOffset * 0.8;
    const shadowRy = 11 - floatOffset * 0.3;
    const shadowGrad = this.ctx.createRadialGradient(px, py + 26, 4, px, py + 26, shadowRx);
    shadowGrad.addColorStop(0, 'rgba(45, 33, 26, 0.18)');
    shadowGrad.addColorStop(0.65, 'rgba(45, 33, 26, 0.06)');
    shadowGrad.addColorStop(1, 'rgba(45, 33, 26, 0)');

    this.ctx.fillStyle = shadowGrad;
    this.ctx.beginPath();
    this.ctx.ellipse(px, py + 26, shadowRx, shadowRy, 0, 0, Math.PI * 2);
    this.ctx.fill();

    // --- 2. 3D FLOATING PODIUM PLATFORM (KLOURK text removed) ---
    const platW = 75;
    const platH = 17;
    const depth = 16;

    // A. Platform 3D Bevel Edge (gradient from rosy beige to deep metallic copper)
    const edgeGrad = this.ctx.createLinearGradient(px - platW, py, px + platW, py + depth);
    edgeGrad.addColorStop(0, '#caa299');
    edgeGrad.addColorStop(0.35, '#b98f86');
    edgeGrad.addColorStop(0.7, '#a57a71');
    edgeGrad.addColorStop(1, '#8e655c');

    this.ctx.fillStyle = edgeGrad;
    this.ctx.beginPath();
    this.ctx.ellipse(px, py + depth, platW, platH, 0, 0, Math.PI);
    this.ctx.lineTo(px - platW, py);
    this.ctx.ellipse(px, py, platW, platH, 0, Math.PI, 0, true);
    this.ctx.closePath();
    this.ctx.fill();

    // Bottom contour line
    this.ctx.strokeStyle = 'rgba(60, 40, 32, 0.22)';
    this.ctx.lineWidth = 1.0;
    this.ctx.beginPath();
    this.ctx.ellipse(px, py + depth, platW, platH, 0, 0, Math.PI);
    this.ctx.stroke();

    // B. Platform Top Ellipse Surface (soft warm ceramic gradient)
    const topGrad = this.ctx.createLinearGradient(px, py - platH, px, py + platH);
    topGrad.addColorStop(0, '#f5ebe7');
    topGrad.addColorStop(0.55, '#ebdad4');
    topGrad.addColorStop(1, '#dfccc7');

    this.ctx.fillStyle = topGrad;
    this.ctx.beginPath();
    this.ctx.ellipse(px, py, platW, platH, 0, 0, Math.PI * 2);
    this.ctx.fill();

    // C. Glowing White Rim Highlight
    this.ctx.strokeStyle = '#ffffff';
    this.ctx.lineWidth = 1.8;
    this.ctx.beginPath();
    this.ctx.ellipse(px, py, platW, platH, 0, 0, Math.PI * 2);
    this.ctx.stroke();

    // --- 3. CHARACTER ---
    const charBaseY = py - 1 + this.jumpY;
    this.drawCharacter(px, charBaseY);

    // --- 4. 3D METALLIC LETTERS K L O U R K ---
    this.drawLetters();
  }

  drawCharacter(cx, cy) {
    const charColor = '#241914';
    const beretColor = '#170f0c';

    this.ctx.save();
    this.ctx.translate(cx, cy);

    // Gentle calm breathing synced with posture
    const breath = Math.sin(this.time * 1.6) * 0.4;
    const hipY = -20;
    const torsoTop = -40 + breath;
    const torsoW = 14;
    const torsoH = 20;
    const headY = torsoTop - 10;

    this.ctx.fillStyle = charColor;
    this.ctx.strokeStyle = charColor;
    this.ctx.lineCap = 'round';
    this.ctx.lineJoin = 'round';

    // A. LEGS & BOOTS
    this.ctx.lineWidth = 3.6;
    // Left leg
    this.ctx.beginPath();
    this.ctx.moveTo(-4.5, hipY);
    this.ctx.lineTo(-4.5, 0);
    this.ctx.stroke();
    this.ctx.beginPath();
    this.ctx.ellipse(-5.0, -1, 3.8, 2.0, 0, 0, Math.PI * 2);
    this.ctx.fill();

    // Right leg
    this.ctx.beginPath();
    this.ctx.moveTo(4.5, hipY);
    this.ctx.lineTo(4.5, 0);
    this.ctx.stroke();
    this.ctx.beginPath();
    this.ctx.ellipse(5.5, -1, 3.8, 2.0, 0, 0, Math.PI * 2);
    this.ctx.fill();

    // B. TORSO
    this.ctx.beginPath();
    if (this.ctx.roundRect) {
      this.ctx.roundRect(-torsoW / 2, torsoTop, torsoW, torsoH, 5.0);
    } else {
      this.ctx.rect(-torsoW / 2, torsoTop, torsoW, torsoH);
    }
    this.ctx.fill();

    // C. SCARF & FLUTTERING TAIL
    const scarfColor = '#3a271f';
    this.ctx.fillStyle = scarfColor;
    this.ctx.beginPath();
    this.ctx.rect(-torsoW / 2 - 1.2, torsoTop - 1.5, torsoW + 2.4, 4.8);
    this.ctx.fill();

    // Trailing scarf tail waving gently in the breeze to the left
    const scarfWave = Math.sin(this.time * 2.8) * 2.5;
    this.ctx.strokeStyle = scarfColor;
    this.ctx.lineWidth = 3.2;
    this.ctx.lineCap = 'round';
    this.ctx.beginPath();
    this.ctx.moveTo(-torsoW / 2, torsoTop + 1.2);
    this.ctx.quadraticCurveTo(-torsoW / 2 - 8, torsoTop + 1.2 + scarfWave, -torsoW / 2 - 17, torsoTop + 1.0 - scarfWave * 0.7);
    this.ctx.stroke();

    // D. HEAD & BERET
    const headR = 7.6;
    this.ctx.fillStyle = charColor;
    this.ctx.beginPath();
    this.ctx.arc(0, headY, headR, 0, Math.PI * 2);
    this.ctx.fill();

    // Beret (sitting nicely tilted on top)
    this.ctx.fillStyle = beretColor;
    this.ctx.beginPath();
    this.ctx.ellipse(-0.8, headY - 6.6, 8.8, 3.6, -0.22, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.beginPath();
    this.ctx.arc(-1.5, headY - 10.8, 1.2, 0, Math.PI * 2);
    this.ctx.fill();

    // E. EYE (Large, expressive white circle with pupil looking up at the letters)
    if (!this.isBlinking) {
      let targetLookX = this.mouse.x - cx;
      let targetLookY = this.mouse.y - (cy + headY);

      const latestFlying = this.activeLetters.find(l => l.status === 'flying') || this.activeLetters[this.activeLetters.length - 1];
      if (latestFlying && this.charState !== 'celebrating') {
        targetLookX = latestFlying.x - cx;
        targetLookY = latestFlying.y - (cy + headY);
      } else {
        // Gaze up towards the arch
        targetLookX = 0;
        targetLookY = -120;
      }

      const angle = Math.atan2(targetLookY, targetLookX);
      const lookDist = Math.min(2.0, Math.hypot(targetLookX, targetLookY) * 0.02);
      const eyeOffsetX = Math.cos(angle) * lookDist;
      const eyeOffsetY = Math.sin(angle) * lookDist;

      // Sclera
      const eyeX = 2.8;
      const eyeY = headY - 0.5;
      this.ctx.fillStyle = '#ffffff';
      this.ctx.beginPath();
      this.ctx.arc(eyeX, eyeY, 2.8, 0, Math.PI * 2);
      this.ctx.fill();

      // Pupil
      this.ctx.fillStyle = '#170f0c';
      this.ctx.beginPath();
      this.ctx.arc(eyeX + eyeOffsetX, eyeY + eyeOffsetY, 1.35, 0, Math.PI * 2);
      this.ctx.fill();
    }

    // F. ARMS
    this.ctx.strokeStyle = charColor;
    this.ctx.lineWidth = 3.3;

    if (this.charState === 'celebrating') {
      // Both arms raised up proudly in celebration, exactly matching reference image!
      this.ctx.beginPath();
      this.ctx.moveTo(-5, torsoTop + 4);
      this.ctx.quadraticCurveTo(-14, torsoTop + 2, -12, torsoTop - 18);
      this.ctx.stroke();

      this.ctx.beginPath();
      this.ctx.moveTo(5, torsoTop + 4);
      this.ctx.lineTo(11, torsoTop - 18);
      this.ctx.stroke();
    } else {
      // Left arm (relaxed natural hang along body with gentle counter-balance)
      const p = this.armThrowPhase;
      let leftArmSwing = 0;
      if (p >= 0.25 && p < 0.50) {
        // Subtle forward counterbalance during wind-up
        leftArmSwing = -1.8 * Math.sin(((p - 0.25) / 0.25) * Math.PI);
      } else if (p >= 0.50 && p < 0.70) {
        // Subtle relaxed recoil
        leftArmSwing = 1.0 * Math.sin(((p - 0.50) / 0.20) * Math.PI);
      }

      const leftElbowX = -5.2 + leftArmSwing * 0.4;
      const leftElbowY = torsoTop + 11;
      const leftHandX = -5.0 + leftArmSwing;
      const leftHandY = torsoTop + 18;

      this.ctx.beginPath();
      this.ctx.moveTo(-5, torsoTop + 4);
      this.ctx.lineTo(leftElbowX, leftElbowY);
      this.ctx.lineTo(leftHandX, leftHandY);
      this.ctx.stroke();

      this.ctx.fillStyle = charColor;
      this.ctx.beginPath();
      this.ctx.arc(leftHandX, leftHandY, 1.8, 0, Math.PI * 2);
      this.ctx.fill();

      // Right arm (Dynamic Throwing Arm)
      let elbowX, elbowY, handX, handY;

      if (p < 0.25) {
        const sub = p / 0.25;
        elbowX = 6 + sub * 2.5;
        elbowY = torsoTop + 8 + sub * 4;
        handX = 6 + sub * 1.5;
        handY = torsoTop + 17 + sub * 3;
      } else if (p < 0.50) {
        const sub = (p - 0.25) / 0.25;
        elbowX = 8.5 - sub * 5;
        elbowY = torsoTop + 12 - sub * 10;
        handX = 7.5 - sub * 10;
        handY = torsoTop + 20 - sub * 28;
      } else if (p < 0.70) {
        const sub = (p - 0.50) / 0.20;
        elbowX = 3.5 + sub * 7;
        elbowY = torsoTop + 2 - sub * 4;
        handX = -2.5 + sub * 22;
        handY = torsoTop - 8 - sub * 13;
      } else {
        const sub = (p - 0.70) / 0.30;
        elbowX = 10.5 - sub * 4.5;
        elbowY = torsoTop - 2 + sub * 10;
        handX = 19.5 - sub * 13.5;
        handY = torsoTop - 21 + sub * 38;
      }

      this.ctx.beginPath();
      this.ctx.moveTo(5, torsoTop + 4);
      this.ctx.lineTo(elbowX, elbowY);
      this.ctx.lineTo(handX, handY);
      this.ctx.stroke();

      this.ctx.fillStyle = charColor;
      this.ctx.beginPath();
      this.ctx.arc(handX, handY, 2.0, 0, Math.PI * 2);
      this.ctx.fill();
    }

    this.ctx.restore();
  }

  drawLetters() {
    this.ctx.save();
    this.ctx.textAlign = 'center';
    this.ctx.textBaseline = 'middle';
    this.ctx.font = 'bold 28px "Neue Montreal", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';

    this.activeLetters.forEach((l) => {
      this.ctx.save();
      // Silky synchronized ambient wave across the letters (1.2 rad/s, 1.2px)
      const wave = l.status === 'arrived' ? Math.sin(this.time * 1.2 + l.index * 0.45) * 1.2 : 0;
      const currentY = l.y + wave;

      this.ctx.translate(l.x, currentY);
      this.ctx.rotate(l.rotation);
      this.ctx.scale(l.scale, l.scale);
      this.ctx.globalAlpha = l.opacity;

      // 1. Tactile Ambient Drop Shadow
      this.ctx.save();
      this.ctx.shadowColor = 'rgba(45, 33, 26, 0.26)';
      this.ctx.shadowBlur = 6;
      this.ctx.shadowOffsetX = 1.5;
      this.ctx.shadowOffsetY = 3.5;
      this.ctx.fillStyle = 'rgba(33, 33, 33, 0.2)';
      this.ctx.fillText(l.char, 0, 0);
      this.ctx.restore();

      // 2. Deep Graphite / Brand Black (#212121) Face with subtle tactile gradient
      const letterGrad = this.ctx.createLinearGradient(0, -14, 0, 14);
      letterGrad.addColorStop(0, '#2e2b2a');
      letterGrad.addColorStop(0.5, '#212121');
      letterGrad.addColorStop(1, '#151312');
      this.ctx.fillStyle = letterGrad;
      this.ctx.fillText(l.char, 0, 0);

      // 3. Subtle delicate top-edge specular bevel
      this.ctx.strokeStyle = 'rgba(255, 255, 255, 0.18)';
      this.ctx.lineWidth = 0.8;
      this.ctx.strokeText(l.char, -0.3, -0.4);

      this.ctx.restore();
    });

    this.ctx.restore();
  }

  loop(timestamp) {
    if (this.isDestroyed) return;
    const now = timestamp * 0.001;
    const dt = Math.min(0.033, this.lastTime ? now - this.lastTime : 0.016);
    this.lastTime = now;
    this.time = now; // Monotonic RAF time: 100% jitter-free

    this.update(dt);
    this.draw();

    this.animId = requestAnimationFrame(this.loop);
  }

  destroy() {
    this.isDestroyed = true;
    if (this.animId) cancelAnimationFrame(this.animId);
    if (this.canvas) {
      this.canvas.removeEventListener('mousemove', this.onMouseMove);
      this.canvas.removeEventListener('mouseleave', this.onMouseLeave);
      this.canvas.removeEventListener('click', this.onClick);
    }
  }
}
