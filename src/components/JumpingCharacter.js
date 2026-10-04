// Flat Minimalist Background Character with Multi-Animation AI & Card Physics
import { sounds } from './SoundEffects.js';

export class JumpingCharacter {
  constructor() {
    this.canvas = document.createElement('canvas');
    this.canvas.className = 'bg-character-canvas';
    this.ctx = this.canvas.getContext('2d');

    // Canvas sits in front of cards (z-index >= 25; #canvas-container is 10)
    this.canvas.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      pointer-events: none;
      z-index: 25;
      cursor: default;
    `;

    document.body.appendChild(this.canvas);

    this.dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.width = window.innerWidth;
    this.height = window.innerHeight;

    // Character position & ground
    this.floorY = this.height - 55; // Initial bottom floor ground
    this.pageBaseY = this.floorY;   // Ground level in page/document space
    this.baseY = this.floorY;       // Current ground level in screen/viewport space
    this.x = 120;                  // Current horizontal position
    this.y = 0;                    // Relative altitude (0 = on surface, <0 = in air)
    this.vy = 0;
    this.vx = 0;
    this.gravity = 0.40;

    // Platform attachment: { id, type, ledge, cardRef, element } or null
    this.attachedObstacle = null;

    // Running parameters
    this.baseSpeed = 2.1;
    this.currentSpeed = this.baseSpeed;
    this.runCycle = 0;
    this.facing = 1;               // 1 = right, -1 = left
    this.tilt = 0;
    this.targetTilt = 0;
    this.surfaceAngle = 0; // Dynamic 3D tilt tracking for cards

    // Natural animations: 'standing', 'running', 'lying', 'jumping' (warmup removed)
    // Note: 'lying' (sleep) is exclusively triggered when user is inactive for > 5 minutes (300s)
    this.animsList = ['standing', 'running', 'lying', 'jumping'];
    this.currentAnim = 'running';
    this.state = 'running';

    // User Inactivity / Idle Sleep System
    // Character goes to sleep ('lying') ONLY if user has been inactive on the site for > 5 minutes (300 seconds)
    this.userIdleThreshold = 300; // 5 minutes in seconds
    this.userIdleTime = 0;        // Accumulated inactive time in seconds

    // Strict requirement: interval between major animation shifts is MIN 20s and MAX 2min (120s)
    this.animDuration = 20 + Math.random() * 100;
    this.animTimer = 0;
    this.animSubTimer = 0;

    // AI Cognitive Brain variables
    this.aiState = 'floor_idle'; // 'floor_idle', 'navigating_to_card', 'prepare_card_launch', 'in_smart_jump', 'on_card', 'navigating_to_edge', 'prepare_card_to_card_leap'
    this.aiTimer = 0;
    this.aiDecisionInterval = 2.4 + Math.random() * 2.2;
    this.targetCardId = null;
    this.navTargetX = null;
    this.smartJumpData = null;
    this.cardsVisitedInSequence = 0;
    this.cardExploreTimer = 0;
    this.cardExploreSubstate = 'survey'; // 'survey', 'patrol', 'rest'
    this.patrolTargetX = null;
    this.lettersExploreTimer = 0;
    this.lettersExploreSubstate = 'survey'; // 'survey', 'patrol', 'rest'
    this.lettersPatrolTargetX = null;
    this.pillExploreTimer = 0;
    this.pillExploreSubstate = 'survey'; // 'survey', 'patrol', 'rest', 'sitting_edge', 'balancing', 'inspecting', 'waving', 'stretching'
    this.pillPatrolTargetX = null;
    this.floorSubstate = 'running_free'; // Immediately start lively running across background!
    this.floorActionTimer = 0;
    this.floorActionDuration = 2.4;
    this.floorStrollTargetX = null;
    this.floorRunTargetX = null;
    this.floorRunTimer = 0;
    this.floorRunDuration = 4.0 + Math.random() * 2.5;
    this.floorHopTimer = 0;
    this.isSkidding = false;
    this.microActionDuration = 2.4;
    this.slideVx = 0;
    this.slideCardVx = 0;
    this.stickCollisionCooldown = 0;

    // Dynamic Pocket Ladder System
    this.ladders = [];
    this.currentLadder = null;
    this.buildTimer = 0;
    this.deployTimer = 0;
    this.climbProgress = 0;
    this.climbTimer = 0;
    this.ladderPerchTimer = 0;
    this.lastStrikeTime = 0;
    this.lastClimbRung = 0;
    this.lastDeployRung = 0;
    this.isWaving = false;

    // Kinetic Stick Swinging System
    this.attachedStick = null;
    this.stickGrabCooldown = 0;
    this.swingTimer = 0;
    this.swingAngle = 0;

    this.idleBlinkTimer = 0;
    this.isBlinking = false;
    this.lastStepPhase = 0;
    this.sleepBubbles = [];

    // Intelligent Goal Persistence & Determination System
    this.intendedTargetCardId = null;  // Card the character is determined to reach
    this.retryJumpCount = 0;           // Number of retries after hitting obstacle/stick
    this.maxRetries = 3;               // Maximum persistent retry attempts
    this.recoveryTimer = 0;            // Recovery & dust-off timer
    this.lastFailedTakeoffX = null;    // Previous takeoff X that failed, to adjust angle
    this.jumpArcBonusExtra = 0;        // Higher arc bonus to vault over obstacles

    // Anti-Stuck Motion Watchdog
    this.stuckTimer = 0;               // Time position has stagnated while in motion
    this.lastTrackedX = this.x;        // Last recorded horizontal position
    this.crouchSafetyTimer = 0;        // Failsafe timer for crouch state

    // Dragging state & fling tracking
    this.isDragging = false;
    this.dragOffset = { x: 0, y: 0 };
    this.dragStartPos = { x: 0, y: 0 };
    this.dragHistory = [];
    this.dragDistance = 0;

    // Squash & Stretch
    this.scaleX = 1.0;
    this.scaleY = 1.0;
    this.targetScaleX = 1.0;
    this.targetScaleY = 1.0;
    this.rotation = 0;
    this.targetRotation = 0;

    // Soft dust particles
    this.particles = [];

    // Interaction
    this.mouse = { x: -999, y: -999 };
    this.isHovered = false;

    // Elusive Cursor Evasion & Flee System
    this.isFleeing = false;
    this.fleeTimer = 0;
    this.dodgeCooldown = 0;
    this.prevMouseX = -999;
    this.prevMouseY = -999;
    this.prevMouseTime = 0;
    this.mouseSpeed = 0;

    // Expose AI controller for tests & programmatic navigation
    this.initAIController();
    this.debug = window.__character_ai;
    window.__jumpingCharacter = this;
    window.__character = this;

    this.initEvents();
    this.onResize();
    this.loop();
  }

  get attachedCard() {
    if (this.attachedObstacle && this.attachedObstacle.type === 'card') {
      return { id: this.attachedObstacle.cardId, ledge: this.attachedObstacle.ledge };
    }
    return null;
  }

  set attachedCard(val) {
    if (!val) {
      if (this.attachedObstacle?.type === 'card') this.attachedObstacle = null;
    } else {
      this.attachedObstacle = {
        id: `card-${val.id}-${val.ledge || 'top'}`,
        cardId: val.id,
        type: 'card',
        ledge: val.ledge || 'top'
      };
    }
  }

  initAIController() {
    window.__character_ai = {
      character: this,
      getState: () => ({
        state: this.state,
        aiState: this.aiState,
        attachedObstacle: this.attachedObstacle,
        attachedCard: this.attachedCard,
        currentAnim: this.currentAnim,
        x: this.x,
        y: this.y,
        baseY: this.baseY,
        vx: this.vx,
        vy: this.vy,
        facing: this.facing,
        intendedTargetCardId: this.intendedTargetCardId,
        retryJumpCount: this.retryJumpCount,
        stuckTimer: this.stuckTimer,
        userIdleTime: this.userIdleTime,
        userIdleThreshold: this.userIdleThreshold,
        isSleeping: this.state === 'lying'
      }),
      getUserIdleTime: () => this.userIdleTime,
      setUserIdleTime: (seconds) => {
        this.userIdleTime = seconds;
        if (this.userIdleTime >= this.userIdleThreshold) {
          if (this.attachedObstacle && this.attachedObstacle.type === 'card') {
            this.cardExploreSubstate = 'rest';
            this.setAnimation('lying');
          } else if (this.attachedObstacle && this.attachedObstacle.type === 'letters') {
            this.lettersExploreSubstate = 'rest';
            this.setAnimation('lying');
          } else if (this.attachedObstacle && this.attachedObstacle.type === 'pill') {
            this.pillExploreSubstate = 'rest';
            this.setAnimation('lying');
          } else {
            this.setAnimation('lying');
          }
        } else if (this.state === 'lying') {
          this.wakeUp();
        }
      },
      wakeUp: () => this.wakeUp(),
      isSleeping: () => this.state === 'lying',
      triggerAction: (actionName, duration = 4.0) => {
        if (this.attachedObstacle && this.attachedObstacle.type === 'card') {
          this.cardExploreSubstate = actionName;
          this.cardExploreTimer = 0;
          this.microActionDuration = duration;
          this.state = actionName;
        } else if (this.attachedObstacle && this.attachedObstacle.type === 'pill') {
          this.pillExploreSubstate = actionName;
          this.pillExploreTimer = 0;
          this.microActionDuration = duration;
          this.state = actionName;
        } else if (this.attachedObstacle && this.attachedObstacle.type === 'letters') {
          this.lettersExploreSubstate = actionName;
          this.lettersExploreTimer = 0;
          this.microActionDuration = duration;
          this.state = actionName;
        } else {
          this.floorSubstate = actionName;
          this.floorActionTimer = 0;
          this.floorActionDuration = duration;
          this.state = (actionName === 'looking_up') ? 'standing' : actionName;
        }
        return true;
      },
      getAction: () => ({
        state: this.state,
        cardSubstate: this.cardExploreSubstate,
        pillSubstate: this.pillExploreSubstate,
        lettersSubstate: this.lettersExploreSubstate,
        floorSubstate: this.floorSubstate
      }),
      placeOnLetters: (letterIndex = 0) => {
        const titleColl = this.getTitleLettersCollision();
        if (!titleColl || !titleColl.letters.length) return false;
        const letter = (typeof letterIndex === 'number' && letterIndex >= 0 && letterIndex < titleColl.letters.length)
          ? titleColl.letters[letterIndex]
          : titleColl.letters[0];
        this.attachedObstacle = {
          id: 'title-letters',
          type: 'letters',
          name: titleColl.name
        };
        this.x = (letter.left + letter.right) / 2;
        this.baseY = letter.top;
        this.pageBaseY = this.baseY + (window.__app?.gallery?.scroll?.current || 0);
        this.y = 0;
        this.vy = 0;
        this.vx = 0;
        this.surfaceAngle = 0;
        this.aiState = 'on_letters';
        this.lettersExploreSubstate = 'survey';
        this.lettersExploreTimer = 0;
        this.state = 'standing';
        this.currentAnim = 'standing';
        this.updateCanvasZIndex();
        return true;
      },
      jumpToLetters: (letterIndex = 0) => {
        return this.executeJumpToLetters(letterIndex);
      },
      jumpFromLettersToCard: (cardId) => {
        return this.executeJumpFromLettersToCard(cardId);
      },
      jumpFromLettersToPill: () => {
        return this.executeJumpFromLettersToPill();
      },
      getTitleLettersCollision: () => this.getTitleLettersCollision(),
      placeOnPill: (offsetRel = 0) => {
        const pillColl = this.getFilterPillCollision();
        if (!pillColl) return false;
        const centerX = (pillColl.left + pillColl.right) / 2;
        const targetX = Math.max(pillColl.left + 5, Math.min(pillColl.right - 5, centerX + offsetRel));
        const surface = pillColl.getSurfaceAtScreenX(targetX);
        this.attachedObstacle = {
          id: 'filter-pill',
          type: 'pill',
          name: pillColl.name
        };
        this.x = targetX;
        this.baseY = surface.y;
        this.pageBaseY = this.baseY + (window.__app?.gallery?.scroll?.current || 0);
        this.y = 0;
        this.vy = 0;
        this.vx = 0;
        this.surfaceAngle = surface.angle;
        this.aiState = 'on_pill';
        this.pillExploreSubstate = 'survey';
        this.pillExploreTimer = 0;
        this.state = 'standing';
        this.currentAnim = 'standing';
        this.slideVx = 0;
        this.updateCanvasZIndex();
        return true;
      },
      jumpToPill: () => {
        return this.executeJumpToPill();
      },
      jumpFromPillToCard: (cardId = 0) => {
        return this.executeJumpFromPillToCard(cardId);
      },
      getFilterPillCollision: () => this.getFilterPillCollision(),
      placeOnCard: (cardIdOrIndex = 0) => {
        const cards = window.__app?.gallery?.getCardScreenRects() || [];
        const card = (typeof cardIdOrIndex === 'number' && cardIdOrIndex < cards.length)
          ? cards[cardIdOrIndex]
          : cards.find(c => c.id === cardIdOrIndex);
        if (card) {
          this.attachedObstacle = {
            id: `card-${card.id}-top`,
            cardId: card.id,
            type: 'card',
            relX: 0,
            cardRef: card.cardRef
          };
          const surfacePoint = card.getLedgePoint(0);
          this.x = surfacePoint.x;
          this.baseY = surfacePoint.y;
          this.y = 0;
          this.vy = 0;
          this.vx = 0;
          this.surfaceAngle = card.topLedge.angle;
          this.aiState = 'on_card';
          this.cardExploreSubstate = 'survey';
          this.cardExploreTimer = 0;
          this.state = 'standing';
          this.currentAnim = 'standing';
          return true;
        }
        return false;
      },
      placeOnCardRelX: (cardIdOrIndex = 0, relX = 0) => {
        const cards = window.__app?.gallery?.getCardScreenRects() || [];
        const card = (typeof cardIdOrIndex === 'number' && cardIdOrIndex < cards.length)
          ? cards[cardIdOrIndex]
          : cards.find(c => c.id === cardIdOrIndex);
        if (card) {
          this.attachedObstacle = {
            id: `card-${card.id}-top`,
            cardId: card.id,
            type: 'card',
            relX: relX,
            cardRef: card.cardRef
          };
          const surfacePoint = card.getLedgePoint(relX);
          this.x = surfacePoint.x;
          this.baseY = surfacePoint.y;
          this.y = 0;
          this.vy = 0;
          this.vx = 0;
          this.surfaceAngle = surfacePoint.surfaceAngle || card.topLedge.angle;
          this.aiState = 'on_card';
          this.cardExploreSubstate = 'survey';
          this.cardExploreTimer = 0;
          this.state = 'standing';
          this.currentAnim = 'standing';
          this.slideCardVx = 0;
          return true;
        }
        return false;
      },
      jumpToCard: (cardId) => {
        const cards = window.__app?.gallery?.getCardScreenRects() || [];
        const target = cardId ? cards.find(c => c.id === cardId) : cards[0];
        if (target) {
          this.targetCardId = target.id;
          this.executeJumpToCard(target.id);
          return true;
        }
        return false;
      },
      jumpToAdjacentCard: (targetId) => {
        if (!this.attachedObstacle || this.attachedObstacle.type !== 'card') return false;
        const cards = window.__app?.gallery?.getCardScreenRects() || [];
        const currentCard = cards.find(c => c.id === this.attachedObstacle.cardId);
        if (!currentCard) return false;
        const neighbors = this.findAdjacentCards(currentCard, cards);
        if (neighbors.length > 0) {
          const target = targetId ? (neighbors.find(n => n.id === targetId) || neighbors[0]) : neighbors[0];
          this.targetCardId = target.id;
          this.executeCardToCardJump(target.id);
          return true;
        }
        return false;
      },
      simulateStickCollision: (pushAway = true) => {
        if (pushAway) {
          const cards = window.__app?.gallery?.getCardScreenRects() || [];
          const target = cards.find(c => c.id === this.smartJumpData?.targetCardId || c.id === this.targetCardId);
          if (target) {
            this.x = target.left - 45;
          }
        }
        this.handleJumpCollisionWithObstacle('stick', -this.facing, 0);
      },
      jumpFromCardToFloor: (side = null) => {
        return this.executeJumpFromCardToFloor(side);
      },
      jumpFromPillToFloor: (side = null) => {
        return this.executeJumpFromPillToFloor(side);
      },
      jumpFromLettersToFloor: (side = null) => {
        return this.executeJumpFromLettersToFloor(side);
      },
      startFloorRunning: (targetX = null) => {
        this.startFloorRunning(targetX);
        return true;
      },
      isFloorRunning: () => this.floorSubstate === 'running_free',
      buildLadder: (targetX = null, targetY = null, targetObstacle = null) => {
        return this.buildLadder(targetX, targetY, targetObstacle);
      },
      getLadders: () => this.ladders,
      getCurrentLadder: () => this.currentLadder,
      jumpToStick: (targetStick = null) => {
        return this.jumpToStick(targetStick);
      },
      isSwingingOnStick: () => Boolean(this.attachedStick),
      getAttachedStick: () => this.attachedStick,
      dismountFromStick: () => {
        this.dismountFromStick();
      },
      thinkNow: () => {
        this.aiTimer = 999;
        this.cardExploreTimer = 999;
        this.lettersExploreTimer = 999;
      }
    };
  }

  isPointerOverCharacter(clientX, clientY) {
    const charScreenY = this.baseY + this.y - 22;
    // Cannot interact if character is out of view
    if (charScreenY < -50 || charScreenY > this.height + 50 || this.x < -40 || this.x > this.width + 40) {
      return false;
    }
    const dx = Math.abs(clientX - this.x);
    const dy = Math.abs(clientY - charScreenY);

    const isSleeping = this.currentAnim === 'lying' || this.state === 'lying';
    // When active, body hitbox is tight to his visual frame (~16px width, ~30px height)
    // When sleeping, slightly easier to tap; when fleeing, nimble and tight
    const hitW = isSleeping ? 38 : (this.isFleeing ? 16 : 20);
    const hitH = isSleeping ? 24 : (this.isFleeing ? 28 : 36);
    return dx < hitW && dy < hitH;
  }

  initEvents() {
    window.addEventListener('resize', () => this.onResize());

    // --- POINTER DOWN (Grab character) ---
    const onDown = (clientX, clientY, e) => {
      if (this.isPointerOverCharacter(clientX, clientY)) {
        this.isDragging = true;
        this.isFleeing = false;
        this.fleeTimer = 0;
        this.dragStartPos = { x: clientX, y: clientY };
        this.dragDistance = 0;

        const charScreenY = this.baseY + this.y;
        this.dragOffset.x = clientX - this.x;
        this.dragOffset.y = clientY - charScreenY;

        this.dragHistory = [{ x: clientX, y: clientY, time: performance.now() }];

        this.attachedObstacle = null;
        this.attachedStick = null;
        this.currentLadder = null;
        this.ladders = [];
        this.smartJumpData = null;
        this.intendedTargetCardId = null;
        this.retryJumpCount = 0;
        this.jumpArcBonusExtra = 0;
        this.aiState = 'grabbed';
        this.state = 'grabbed';
        this.currentAnim = 'standing';
        this.runCycle = 0;
        this.targetTilt = 0;
        this.rotation = 0;
        this.targetRotation = 0;
        this.vy = 0;
        this.vx = 0;

        // Unify coordinates: zero delta on grab!
        this.baseY = charScreenY;
        this.y = 0;

        const scrollCurrent = window.__app?.gallery?.scroll?.current || 0;
        this.pageBaseY = this.baseY + scrollCurrent;

        this.canvas.style.zIndex = '65';
        this.canvas.style.pointerEvents = 'auto';
        this.canvas.style.cursor = 'grabbing';
        document.body.style.userSelect = 'none';
        document.body.style.cursor = 'grabbing';

        sounds?.playHop?.(0.18);
        e?.preventDefault?.();
        e?.stopPropagation?.();
      } else {
        // If clicked close to the character, react with an evasive jump!
        const charScreenY = this.baseY + this.y - 20;
        const nearDist = Math.hypot(clientX - this.x, clientY - charScreenY);
        if (nearDist < 75 && !this.isDragging && this.state !== 'in_jump' && this.state !== 'falling' &&
            this.aiState !== 'climbing_ladder' && this.aiState !== 'pocket_ladder_deploy' && this.aiState !== 'sitting_ladder_top') {
          const dodgeDir = (this.x - clientX) >= 0 ? 1 : -1;
          this.facing = dodgeDir;
          this.vx = dodgeDir * 5.4;
          this.vy = -3.8;
          this.setFloorCoordinateSpace();
          this.state = 'in_jump';
          this.targetScaleY = 0.75;
          this.targetScaleX = 1.35;
          this.spawnLandingDust();
          sounds?.playHop?.(0.12);
        }
      }
    };

    // --- POINTER MOVE (Drag / Hover) ---
    const onMove = (clientX, clientY) => {
      this.mouse.x = clientX;
      this.mouse.y = clientY;

      if (this.isDragging) {
        const dx = clientX - this.dragStartPos.x;
        const dy = clientY - this.dragStartPos.y;
        this.dragDistance += Math.hypot(dx, dy);

        const now = performance.now();
        this.dragHistory.push({ x: clientX, y: clientY, time: now });
        if (this.dragHistory.length > 8) this.dragHistory.shift();

        const newX = clientX - this.dragOffset.x;
        const newFeetY = clientY - this.dragOffset.y;

        const deltaX = newX - this.x;
        this.vx = deltaX * 0.4;
        if (Math.abs(deltaX) > 0.5) {
          this.facing = deltaX > 0 ? 1 : -1;
        }

        // Smooth clamp within screen bounds (with room near bottom)
        this.x = Math.max(25, Math.min(this.width - 25, newX));
        this.baseY = Math.max(30, Math.min(this.height + 60, newFeetY));
        this.y = 0;

        const scrollCurrent = window.__app?.gallery?.scroll?.current || 0;
        this.pageBaseY = this.baseY + scrollCurrent;
      } else {
        this.isHovered = this.isPointerOverCharacter(clientX, clientY);
        this.canvas.style.cursor = this.isHovered ? 'grab' : 'default';
        this.canvas.style.pointerEvents = this.isHovered ? 'auto' : 'none';
      }
    };

    // --- POINTER UP (Drop character onto 3D card or floor) ---
    const onUp = () => {
      if (!this.isDragging) return;

      this.isDragging = false;
      document.body.style.userSelect = '';
      document.body.style.cursor = '';
      this.canvas.style.cursor = this.isHovered ? 'grab' : 'default';
      this.canvas.style.pointerEvents = this.isHovered ? 'auto' : 'none';

      const now = performance.now();
      const recent = this.dragHistory.filter(h => now - h.time < 120);
      let flingVx = 0;
      let flingVy = 0;

      if (recent.length >= 2) {
        const first = recent[0];
        const last = recent[recent.length - 1];
        const dt = Math.max(16, last.time - first.time);
        flingVx = ((last.x - first.x) / dt) * 16;
        flingVy = ((last.y - first.y) / dt) * 16;
      }

      flingVx = Math.max(-14, Math.min(14, flingVx));
      flingVy = Math.max(-14, Math.min(14, flingVy));

      const dropX = this.x;
      const dropFeetY = this.baseY; // Since this.y is 0 during drag
      const scrollCurrent = window.__app?.gallery?.scroll?.current || 0;

      // Check title letters first (higher in z-index / fixed)
      const titleColl = this.getTitleLettersCollision();
      if (titleColl && dropX >= titleColl.left - 20 && dropX <= titleColl.right + 20) {
        const ledgeY = titleColl.getLedgeYAtScreenX(dropX);
        if (dropFeetY >= ledgeY - 55 && dropFeetY <= titleColl.bottom + 25 && flingVy > -5) {
          this.attachedObstacle = {
            id: 'title-letters',
            type: 'letters',
            name: titleColl.name
          };
          this.x = dropX;
          this.baseY = ledgeY;
          this.pageBaseY = this.baseY + scrollCurrent;
          this.y = 0;
          this.vy = 0;
          this.vx = 0;
          this.surfaceAngle = 0;

          this.aiState = 'on_letters';
          this.lettersExploreSubstate = 'survey';
          this.lettersExploreTimer = 0;
          this.aiTimer = 0;
          this.aiDecisionInterval = 8.0 + Math.random() * 4.0;

          this.currentAnim = 'standing';
          this.state = 'landing_jump';
          this.targetScaleY = 0.65;
          this.targetScaleX = 1.40;
          this.spawnLandingDust();
          sounds?.playHop();
          this.updateCanvasZIndex();

          setTimeout(() => {
            if (this.state === 'landing_jump') {
              this.targetScaleY = 1.0;
              this.targetScaleX = 1.0;
              this.state = 'standing';
            }
          }, 140);
          return;
        }
      }

      // Check filter pill
      const pillColl = this.getFilterPillCollision();
      if (pillColl && dropX >= pillColl.left - 15 && dropX <= pillColl.right + 15) {
        const surface = pillColl.getSurfaceAtScreenX(dropX);
        if (dropFeetY >= surface.y - 50 && dropFeetY <= pillColl.bottom + 25 && flingVy > -5) {
          this.attachedObstacle = {
            id: 'filter-pill',
            type: 'pill',
            name: pillColl.name
          };
          this.x = dropX;
          this.baseY = surface.y;
          this.pageBaseY = this.baseY + scrollCurrent;
          this.y = 0;
          this.vy = 0;
          this.vx = 0;
          this.surfaceAngle = surface.angle;

          this.aiState = 'on_pill';
          this.pillExploreSubstate = 'survey';
          this.pillExploreTimer = 0;
          this.aiTimer = 0;
          this.aiDecisionInterval = 8.0 + Math.random() * 4.0;
          this.slideVx = 0;

          this.currentAnim = 'standing';
          this.state = 'landing_jump';
          this.targetScaleY = 0.65;
          this.targetScaleX = 1.40;
          this.spawnLandingDust();
          sounds?.playHop();
          this.updateCanvasZIndex();

          setTimeout(() => {
            if (this.state === 'landing_jump') {
              this.targetScaleY = 1.0;
              this.targetScaleX = 1.0;
              this.state = 'standing';
            }
          }, 140);
          return;
        }
      }

      const cards = window.__app?.gallery?.getCardScreenRects() || [];
      let bestCard = null;
      let minDy = 99999;

      for (const card of cards) {
        if (!card.cardRef?.isVisible) continue;
        const ledgeY = card.getLedgeYAtScreenX(dropX);
        if (dropX >= card.left - 25 && dropX <= card.right + 25) {
          if (dropFeetY >= ledgeY - 65 && dropFeetY <= card.bottom + 20) {
            const dy = Math.abs(dropFeetY - ledgeY);
            if (dy < minDy) {
              minDy = dy;
              bestCard = card;
            }
          }
        }
      }

      // If dropped onto a card without strong upward fling
      if (bestCard && flingVy > -5) {
        const relX = bestCard.screenXToLocalX(dropX);
        this.attachedObstacle = {
          id: `card-${bestCard.id}-top`,
          cardId: bestCard.id,
          type: 'card',
          ledge: 'top',
          relX: relX
        };
        const surfacePoint = bestCard.getLedgePoint(relX);
        this.x = surfacePoint.x;
        this.baseY = surfacePoint.y;
        this.pageBaseY = this.baseY + scrollCurrent;
        this.y = 0;
        this.vy = 0;
        this.vx = 0;
        this.surfaceAngle = bestCard.topLedge.angle;

        this.aiState = 'on_card';
        this.cardExploreSubstate = 'survey';
        this.cardExploreTimer = 0;
        this.aiTimer = 0;
        this.aiDecisionInterval = 8.0 + Math.random() * 4.0;

        this.currentAnim = 'standing';
        this.state = 'landing_jump';
        this.targetScaleY = 0.65;
        this.targetScaleX = 1.40;
        this.spawnLandingDust();
        sounds?.playHop();
        this.updateCanvasZIndex();

        setTimeout(() => {
          if (this.state === 'landing_jump') {
            this.targetScaleY = 1.0;
            this.targetScaleX = 1.0;
            this.state = 'standing';
          }
        }, 140);
        return;
      }

      // Dropped near bottom floor without upward fling
      // Dropped near bottom floor or on background without upward fling
      if (dropFeetY >= this.floorY - 25 && flingVy >= -2) {
        this.attachedObstacle = null;
        this.baseY = dropFeetY;
        this.pageBaseY = dropFeetY + scrollCurrent;
        this.y = 0;
        this.vy = 0;
        this.vx = 0;
        this.surfaceAngle = 0;
        this.aiState = 'floor_idle';
        this.aiTimer = 0;
        this.aiDecisionInterval = 8.0 + Math.random() * 4.0;
        this.currentAnim = 'standing';
        this.state = 'landing_jump';
        this.targetScaleY = 0.65;
        this.targetScaleX = 1.40;
        this.spawnLandingDust();
        sounds?.playHop();
        this.updateCanvasZIndex();

        setTimeout(() => {
          if (this.state === 'landing_jump') {
            this.targetScaleY = 1.0;
            this.targetScaleX = 1.0;
            this.state = 'standing';
          }
        }, 140);
        return;
      }

      // Released in mid-air or flung with velocity
      this.attachedObstacle = null;
      this.baseY = dropFeetY;
      this.pageBaseY = dropFeetY + scrollCurrent;
      this.y = 0;
      this.vx = flingVx;
      this.vy = flingVy;
      this.surfaceAngle = 0;
      this.state = 'falling';
      this.currentAnim = 'standing';
      this.aiTimer = 0;
      this.aiDecisionInterval = 8.0 + Math.random() * 4.0;
      this.updateCanvasZIndex();
    };

    window.addEventListener('mousedown', (e) => {
      this.resetUserActivity();
      onDown(e.clientX, e.clientY, e);
    });
    window.addEventListener('mousemove', (e) => {
      this.resetUserActivity();
      onMove(e.clientX, e.clientY);
    });
    window.addEventListener('mouseup', onUp);
    window.addEventListener('blur', onUp);

    window.addEventListener('touchstart', (e) => {
      this.resetUserActivity();
      if (e.touches.length > 0) onDown(e.touches[0].clientX, e.touches[0].clientY, e);
    }, { passive: false });

    window.addEventListener('touchmove', (e) => {
      this.resetUserActivity();
      if (e.touches.length > 0 && this.isDragging) {
        onMove(e.touches[0].clientX, e.touches[0].clientY);
        e.preventDefault();
      }
    }, { passive: false });

    window.addEventListener('touchend', onUp);

    window.addEventListener('keydown', (e) => {
      this.resetUserActivity();
      if (e.key === 'l' || e.key === 'L' || e.key === 'д' || e.key === 'Д') {
        const targetX = (this.mouse && this.mouse.x > 0) ? this.mouse.x : (this.x + this.facing * 40);
        const targetY = (this.mouse && this.mouse.y > 0) ? this.mouse.y : null;
        this.buildLadder(targetX, targetY);
      } else if (e.key === 's' || e.key === 'S' || e.key === 'ы' || e.key === 'Ы' || e.key === 'c' || e.key === 'C' || e.key === 'с' || e.key === 'С') {
        this.jumpToStick();
      }
    });

    window.addEventListener('dblclick', (e) => {
      this.resetUserActivity();
      const segments = window.__app?.gallery?.getSticksScreenSegments() || [];
      const clickedStick = segments.find(s => {
        const dist = Math.hypot(e.clientX - s.cx, e.clientY - s.cy);
        return dist < Math.max(40, s.length * 0.65);
      });
      if (clickedStick) {
        this.jumpToStick(clickedStick.stick);
      } else {
        this.buildLadder(e.clientX, e.clientY);
      }
    });

    window.addEventListener('wheel', () => this.resetUserActivity(), { passive: true });
    window.addEventListener('scroll', () => this.resetUserActivity(), { passive: true });
  }

  resetUserActivity() {
    this.userIdleTime = 0;
    if (this.state === 'lying' || this.currentAnim === 'lying' || this.cardExploreSubstate === 'rest' || this.lettersExploreSubstate === 'rest' || this.pillExploreSubstate === 'rest') {
      this.wakeUp();
    }
  }

  wakeUp() {
    if (this.state === 'lying' || this.currentAnim === 'lying' || this.cardExploreSubstate === 'rest' || this.lettersExploreSubstate === 'rest' || this.pillExploreSubstate === 'rest') {
      this.sleepBubbles = [];
      this.state = 'standing';
      this.currentAnim = 'standing';
      this.targetScaleY = 1.25;
      this.targetScaleX = 0.85;
      this.spawnLandingDust();
      sounds?.playHop?.();

      if (this.attachedObstacle && this.attachedObstacle.type === 'card') {
        this.cardExploreSubstate = 'survey';
        this.cardExploreTimer = 0;
      } else if (this.attachedObstacle && this.attachedObstacle.type === 'letters') {
        this.lettersExploreSubstate = 'survey';
        this.lettersExploreTimer = 0;
      } else if (this.attachedObstacle && this.attachedObstacle.type === 'pill') {
        this.pillExploreSubstate = 'survey';
        this.pillExploreTimer = 0;
      } else {
        this.aiState = 'floor_idle';
        this.aiTimer = 0;
      }

      setTimeout(() => {
        if (this.state === 'standing') {
          this.targetScaleY = 1.0;
          this.targetScaleX = 1.0;
        }
      }, 200);
    }
  }

  onResize() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.floorY = this.height - 55;

    this.canvas.width = this.width * this.dpr;
    this.canvas.height = this.height * this.dpr;
    this.ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);

    this._cachedTitleCollision = null;
    this._cachedFilterPillCollision = null;

    if (!this.attachedObstacle) {
      this.baseY = this.floorY;
      this.x = Math.max(40, Math.min(this.width - 40, this.x));
    }
  }

  onScroll(scrollVelocity) {
    if (Math.abs(scrollVelocity) > 0.05) {
      this.resetUserActivity();
    }

    if (this.isDragging) return;

    this.scrollVelocity = scrollVelocity;
    this.isScrolling = Math.abs(scrollVelocity) > 0.3;

    clearTimeout(this.scrollTimeout);
    this.scrollTimeout = setTimeout(() => {
      this.isScrolling = false;
      this.scrollVelocity = 0;
    }, 150);
  }

  // --- ANIMATION SWITCHER (MIN 20s, MAX 120s / 2min) ---
  switchNextAnimation() {
    const isUserIdleForSleep = this.userIdleTime >= this.userIdleThreshold;
    // 'lying' (sleep) is ONLY allowed if user is inactive for > 5 minutes (300s)
    const allowedAnims = isUserIdleForSleep
      ? this.animsList
      : this.animsList.filter(a => a !== 'lying');
    const available = allowedAnims.filter(a => a !== this.currentAnim);
    const next = available.length > 0 ? available[Math.floor(Math.random() * available.length)] : 'standing';
    this.setAnimation(next);
  }

  setAnimation(animName) {
    // If user is not idle for > 5 min, deny 'lying' (sleep)
    if (animName === 'lying' && this.userIdleTime < this.userIdleThreshold) {
      animName = 'standing';
    }

    this.currentAnim = animName;
    this.animTimer = 0;
    // Guaranteed interval: 20s to 120s (2 minutes)
    this.animDuration = 20 + Math.random() * 100;
    this.animSubTimer = 0;
    this.targetRotation = 0;
    this.rotation = 0;
    this.targetScaleX = 1.0;
    this.targetScaleY = 1.0;

    this.restoreCurrentAnimState();
  }

  restoreCurrentAnimState() {
    if (this.currentAnim === 'running') {
      this.state = 'running';
      this.runDuration = 4.0 + Math.random() * 4.0;
    } else if (this.currentAnim === 'standing') {
      this.state = 'standing';
    } else if (this.currentAnim === 'jumping') {
      this.state = 'standing';
      this.aiTimer = 999; // trigger AI to seek card or leap to neighbor immediately
      this.cardExploreTimer = 999;
    } else if (this.currentAnim === 'lying') {
      this.state = 'lying';
      this.aiState = 'floor_idle';
      this.navTargetX = null;
      this.vx = 0;
      this.spawnLandingDust();
    }
  }

  triggerTurn() {
    if (this.isDragging) return;
    this.facing *= -1;
    this.state = 'running';
    this.animSubTimer = 0;
    this.targetTilt = this.facing * 0.16;
    this.spawnLandingDust();
  }

  setFloorCoordinateSpace() {
    const scrollCurrent = window.__app?.gallery?.scroll?.current || 0;
    const currentFeetY = this.baseY + this.y;
    if (this.pageBaseY === undefined || this.pageBaseY === null) {
      this.pageBaseY = currentFeetY + scrollCurrent;
    }
    this.baseY = this.pageBaseY - scrollCurrent;
    this.y = currentFeetY - this.baseY;
    this.attachedObstacle = null;
  }

  detachFromObstacle(newVy = 1.0) {
    if (this.attachedObstacle) {
      this.setFloorCoordinateSpace();
      this.state = 'falling';
      this.vy = newVy;
      this.updateCanvasZIndex();
    }
  }

  detachToFloor() {
    const scrollCurrent = window.__app?.gallery?.scroll?.current || 0;
    this.attachedObstacle = null;
    this.attachedStick = null;
    this.smartJumpData = null;
    this.baseY = this.floorY;
    this.pageBaseY = this.floorY + scrollCurrent;
    this.y = 0;
    this.vy = 0;
    this.vx = 0;
    this.state = 'standing';
    this.aiState = 'floor_idle';
    this.aiTimer = 0;
    this.targetScaleX = 1.0;
    this.targetScaleY = 1.0;
    this.targetTilt = 0;
    this.spawnLandingDust();
    sounds?.playHop();
    this.updateCanvasZIndex();
  }

  triggerSingleJump(isSuper = false) {
    if (this.isDragging || this.state === 'crouch' || this.state === 'in_jump') return;

    this.state = 'crouch';
    this.targetScaleY = 0.70;
    this.targetScaleX = 1.34;

    const jumpStrength = isSuper ? -13.2 : (-9.5 - Math.random() * 2.2);
    const doFlip = isSuper || Math.random() < 0.35;
    const runningBoost = (this.state === 'running') ? (this.facing * Math.min(3.0, this.currentSpeed * 0.7)) : 0;

    setTimeout(() => {
      if (this.state !== 'crouch') return;
      this.setFloorCoordinateSpace();
      this.state = 'in_jump';
      this.vy = jumpStrength;
      this.targetScaleY = 1.38;
      this.targetScaleX = 0.76;
      sounds?.playHop();
      this.updateCanvasZIndex();

      this.vx = runningBoost + (Math.random() - 0.45) * 1.2;
      if (doFlip) {
        this.targetRotation = this.rotation + this.facing * Math.PI * 2;
      }
    }, 130);
  }

  spawnFootstepDust() {
    const dir = -this.facing;
    this.particles.push({
      x: this.x + dir * 6,
      y: this.baseY - 1,
      vx: dir * (1.2 + Math.random() * 1.2),
      vy: -0.3 - Math.random() * 0.5,
      radius: 1.8 + Math.random() * 1.2,
      alpha: 0.35,
      decay: 0.04
    });
  }

  spawnSkidDust() {
    const dir = -this.facing;
    for (let i = 0; i < 4; i++) {
      this.particles.push({
        x: this.x + dir * (4 + i * 3),
        y: this.baseY - 1,
        vx: dir * (1.8 + Math.random() * 1.5),
        vy: -0.4 - Math.random() * 0.8,
        radius: 2.2 + Math.random() * 1.5,
        alpha: 0.45,
        decay: 0.035
      });
    }
  }

  spawnLandingDust() {
    for (let i = 0; i < 4; i++) {
      const dir = (i % 2 === 0 ? -1 : 1);
      this.particles.push({
        x: this.x + dir * (4 + Math.random() * 5),
        y: this.baseY - 1,
        vx: dir * (1.2 + Math.random() * 1.4),
        vy: -0.3 - Math.random() * 0.6,
        radius: 2.0 + Math.random() * 1.5,
        alpha: 0.35,
        decay: 0.035
      });
    }
  }

  updateCanvasZIndex() {
    if (this.isDragging) {
      this.canvas.style.zIndex = '65';
      return;
    }

    if (this.attachedStick || this.currentLadder || this.aiState === 'climbing_ladder' || this.aiState === 'pocket_ladder_deploy' || this.aiState === 'building_ladder' || this.aiState === 'sitting_ladder_top') {
      this.canvas.style.zIndex = '35';
      return;
    }

    if (this.state === 'in_jump' || this.state === 'falling') {
      this.canvas.style.zIndex = '65';
      return;
    }

    // Always in front of cards (#canvas-container is z-index 10)
    if (!this.attachedObstacle) {
      // Ground floor - always in front of cards!
      this.canvas.style.zIndex = '25';
      return;
    }

    if (this.attachedObstacle.type === 'card') {
      // On top of card
      this.canvas.style.zIndex = '25';
    } else {
      // On top of DOM text, filters, header, cta
      this.canvas.style.zIndex = '65';
    }
  }

  getTitleLettersCollision() {
    if (this._cachedTitleCollision) {
      return this._cachedTitleCollision;
    }

    const title = document.querySelector('.project-filters__title');
    if (!title) return null;
    const titleRect = title.getBoundingClientRect();
    if (titleRect.width === 0 || titleRect.height === 0) return null;

    const spans = Array.from(title.querySelectorAll('.title-char'));
    if (spans.length === 0) return null;

    if (!this._measureCanvas) {
      this._measureCanvas = document.createElement('canvas');
      this._measureCtx = this._measureCanvas.getContext('2d');
    }
    const cs = window.getComputedStyle(title);
    this._measureCtx.font = `${cs.fontWeight} ${cs.fontSize} ${cs.fontFamily}`;

    const mAll = this._measureCtx.measureText(title.textContent);
    const fontDescent = mAll.fontBoundingBoxDescent || (parseFloat(cs.fontSize) * 0.25);
    const baseline = titleRect.bottom - fontDescent;

    const letters = spans.map((span, i) => {
      const r = span.getBoundingClientRect();
      const ch = span.textContent;
      const m = this._measureCtx.measureText(ch);
      const glyphAscent = m.actualBoundingBoxAscent || (parseFloat(cs.fontSize) * 0.52);
      const letterTop = baseline - glyphAscent;

      return {
        index: i,
        char: ch,
        left: r.left,
        right: r.right,
        width: r.width,
        top: letterTop,
        bottom: r.bottom,
        baseline
      };
    });

    const firstLetter = letters[0];
    const lastLetter = letters[letters.length - 1];

    const getLedgeYAtScreenX = (screenX) => {
      const margin = 3;
      const found = letters.find(l => screenX >= l.left - margin && screenX <= l.right + margin);
      if (found) return found.top;

      if (letters.length >= 10 && screenX >= letters[8].right && screenX <= letters[9].left) {
        return (letters[8].top + letters[9].top) / 2;
      }

      if (screenX < firstLetter.left) return firstLetter.top;
      return lastLetter.top;
    };

    const result = {
      id: 'title-letters',
      type: 'letters',
      name: 'Заголовок "Портфолио проектов"',
      left: firstLetter.left,
      right: lastLetter.right,
      top: Math.min(...letters.map(l => l.top)),
      bottom: titleRect.bottom,
      letters,
      getLedgeYAtScreenX
    };

    this._cachedTitleCollision = result;
    return result;
  }

  getFilterPillCollision() {
    if (this._cachedFilterPillCollision) {
      return this._cachedFilterPillCollision;
    }

    const pill = document.querySelector('.project-filters__inner');
    if (!pill) return null;
    const r = pill.getBoundingClientRect();
    if (r.width === 0 || r.height === 0) return null;

    // border-radius: 9999px means half-height semicircles at ends
    const radius = Math.min(r.height / 2, r.width / 2);
    const leftCornerCenterX = r.left + radius;
    const rightCornerCenterX = r.right - radius;
    const centerY = r.top + radius;

    const getSurfaceAtScreenX = (screenX) => {
      // 1. Left rounded corner
      if (screenX < leftCornerCenterX) {
        const dx = leftCornerCenterX - screenX;
        if (dx >= radius) {
          return {
            y: centerY,
            angle: -Math.PI / 2,
            isCorner: true,
            cornerSide: -1,
            slopeFactor: 1.0,
            isOff: true
          };
        }
        const dy = Math.sqrt(Math.max(0, radius * radius - dx * dx));
        const surfaceY = centerY - dy;
        const angle = -Math.atan2(dx, Math.max(0.01, dy));
        const slopeFactor = dx / radius;
        return {
          y: surfaceY,
          angle,
          isCorner: true,
          cornerSide: -1,
          slopeFactor,
          isOff: false
        };
      }

      // 2. Right rounded corner
      if (screenX > rightCornerCenterX) {
        const dx = screenX - rightCornerCenterX;
        if (dx >= radius) {
          return {
            y: centerY,
            angle: Math.PI / 2,
            isCorner: true,
            cornerSide: 1,
            slopeFactor: 1.0,
            isOff: true
          };
        }
        const dy = Math.sqrt(Math.max(0, radius * radius - dx * dx));
        const surfaceY = centerY - dy;
        const angle = Math.atan2(dx, Math.max(0.01, dy));
        const slopeFactor = dx / radius;
        return {
          y: surfaceY,
          angle,
          isCorner: true,
          cornerSide: 1,
          slopeFactor,
          isOff: false
        };
      }

      // 3. Flat top ledge
      return {
        y: r.top,
        angle: 0,
        isCorner: false,
        cornerSide: 0,
        slopeFactor: 0,
        isOff: false
      };
    };

    const result = {
      id: 'filter-pill',
      type: 'pill',
      name: 'Панель фильтров',
      left: r.left,
      right: r.right,
      top: r.top,
      bottom: r.bottom,
      width: r.width,
      height: r.height,
      radius,
      leftCornerCenterX,
      rightCornerCenterX,
      getSurfaceAtScreenX,
      getLedgeYAtScreenX: (screenX) => getSurfaceAtScreenX(screenX).y
    };

    this._cachedFilterPillCollision = result;
    return result;
  }

  getSceneObstacles() {
    const cards = window.__app?.gallery?.getCardScreenRects() || [];
    const list = cards.map(card => ({
      id: `card-${card.id}-top`,
      cardId: card.id,
      type: 'card',
      ledge: 'top',
      name: `Карточка ${card.title} (верх)`,
      left: card.left,
      right: card.right,
      top: card.top,
      bottom: card.bottom,
      isPlatform: true,
      isCeiling: false,
      isWall: false,
      cardRef: card.cardRef,
      cardData: card
    }));

    const titleColl = this.getTitleLettersCollision();
    if (titleColl) {
      list.push({
        id: 'title-letters',
        type: 'letters',
        name: titleColl.name,
        left: titleColl.left,
        right: titleColl.right,
        top: titleColl.top,
        bottom: titleColl.bottom,
        isPlatform: true,
        titleData: titleColl
      });
    }

    const pillColl = this.getFilterPillCollision();
    if (pillColl) {
      list.push({
        id: 'filter-pill',
        type: 'pill',
        name: pillColl.name,
        left: pillColl.left,
        right: pillColl.right,
        top: pillColl.top,
        bottom: pillColl.bottom,
        isPlatform: true,
        pillData: pillColl
      });
    }

    return list;
  }

  checkSticksCollision(fromPrevX = null, fromPrevFeetY = null) {
    const gallery = window.__app?.gallery;
    if (!gallery || !gallery.getSticksScreenSegments) return;

    const stickSegments = gallery.getSticksScreenSegments();
    if (!stickSegments || stickSegments.length === 0) return;

    const currX = this.x;
    const currFeetY = this.baseY + this.y;
    // Don't collide with sticks if character is offscreen!
    const isOffscreen = currFeetY < -70 || currFeetY > this.height + 70 || currX < -60 || currX > this.width + 60;
    if (isOffscreen) return;

    const prevX = fromPrevX !== null ? fromPrevX : (this.prevX !== undefined ? this.prevX : currX);
    const prevFeetY = fromPrevFeetY !== null ? fromPrevFeetY : (this.prevFeetY !== undefined ? this.prevFeetY : currFeetY);

    const isAirborne = (this.state === 'in_jump' || this.state === 'falling');
    // Sample along trajectory to prevent tunneling through thin sticks during fast motion (CCD)
    const numSubSteps = isAirborne ? 5 : 1;

    for (let i = 0; i < stickSegments.length; i++) {
      const seg = stickSegments[i];
      if (!seg || !seg.stick) continue;

      // Z-depth spatial check: allow all visible sticks (sticks diving behind cards reach -75)
      if (seg.depthZ !== undefined && Math.abs(seg.depthZ) > 90) continue;

      const x1 = seg.x1;
      const y1 = seg.y1;
      const x2 = seg.x2;
      const y2 = seg.y2;
      const dx = x2 - x1;
      const dy = y2 - y1;
      const lenSq = dx * dx + dy * dy;
      const stickRadius = seg.radius || 2.5;

      let hit = false;
      let minHitDistSq = Infinity;
      let closestHitX = 0;
      let closestHitY = 0;
      let hitBodyPoint = null;
      let hitSampleX = currX;
      let hitSampleFeetY = currFeetY;

      for (let s = 0; s <= numSubSteps; s++) {
        const alpha = numSubSteps > 0 ? (s / numSubSteps) : 1;
        const subX = prevX + (currX - prevX) * alpha;
        const subFeetY = prevFeetY + (currFeetY - prevFeetY) * alpha;

        const bodyPoints = [
          { x: subX, y: subFeetY - 6, r: 15 },   // Feet / lower legs
          { x: subX, y: subFeetY - 20, r: 18 },  // Torso / center of mass
          { x: subX, y: subFeetY - 36, r: 15 }   // Head / upper torso
        ];

        for (let p = 0; p < bodyPoints.length; p++) {
          const bp = bodyPoints[p];
          const contactRadius = bp.r + stickRadius + 4.0;
          const contactRadiusSq = contactRadius * contactRadius;

          let t = 0;
          if (lenSq > 0.0001) {
            t = Math.max(0, Math.min(1, ((bp.x - x1) * dx + (bp.y - y1) * dy) / lenSq));
          }
          const cx = x1 + t * dx;
          const cy = y1 + t * dy;
          const distSq = (bp.x - cx) * (bp.x - cx) + (bp.y - cy) * (bp.y - cy);

          if (distSq < contactRadiusSq && distSq < minHitDistSq) {
            hit = true;
            minHitDistSq = distSq;
            closestHitX = cx;
            closestHitY = cy;
            hitBodyPoint = bp;
            hitSampleX = subX;
            hitSampleFeetY = subFeetY;
          }
        }
        if (hit) break; // Detected earliest contact along swept path
      }

      if (hit && hitBodyPoint) {
        // Normal pointing from stick contact point towards character
        let nx = hitSampleX - closestHitX;
        let ny = (hitSampleFeetY - 20) - closestHitY;
        const nLen = Math.hypot(nx, ny) || 1;
        nx /= nLen;
        ny /= nLen;

        // 1. DRAGGED BY USER (batting / swatting sticks with character)
        if (this.isDragging) {
          if (this.stickCollisionCooldown <= 0) {
            const impulseX = (this.vx || 0) * 0.65 + (Math.random() - 0.5) * 2.5;
            const impulseY = -(this.vy || 0) * 0.65 + (Math.random() - 0.5) * 2.5;
            const spin = (Math.random() - 0.5) * 0.20;
            if (seg.stick.applyImpulse) {
              seg.stick.applyImpulse(impulseX, impulseY, spin);
            } else {
              seg.stick.velocity.x += impulseX;
              seg.stick.velocity.y += impulseY;
              seg.stick.rotSpeed += spin;
            }
            sounds.playWoodClack?.(0.08);
            this.spawnLandingDust();
            this.stickCollisionCooldown = 0.16;
          }
          continue;
        }

        // 2. SLEEPING
        if (this.state === 'lying') {
          if (this.stickCollisionCooldown <= 0) {
            if (seg.stick.applyImpulse) {
              seg.stick.applyImpulse((Math.random() - 0.5) * 2.0, (Math.random() - 0.5) * 2.0, (Math.random() - 0.5) * 0.1);
            }
            sounds.playWoodClack?.(0.04);
            this.stickCollisionCooldown = 0.5;
          }
          continue;
        }

        // 3. MID-AIR JUMP & FALLING: CATCH STICK & SWING!
        if (this.state === 'in_jump' || this.state === 'falling') {
          const isTargetingThisStick = (this.smartJumpData?.targetType === 'stick' && this.smartJumpData?.targetStick === seg.stick);
          const canGrabStick = (this.stickGrabCooldown <= 0 && this.vy >= -4.8);

          if (isTargetingThisStick || canGrabStick) {
            this.grabStick(seg.stick, closestHitX, closestHitY);
            return;
          }

          // Otherwise, if grab cooldown is active, rebound off stick:
          if (this.stickCollisionCooldown <= 0) {
            const pushDist = hitBodyPoint.r + stickRadius + 3.0;
            this.x = closestHitX + nx * pushDist;
            this.y = (closestHitY + ny * pushDist + 20) - this.baseY;

            const hitVx = this.vx || (this.facing * 4.0);
            const hitVy = this.vy || 2.5;
            const impulseX = -nx * 3.4 + hitVx * 0.85;
            const impulseY = ny * 3.4 - hitVy * 0.85;
            const spinKick = (Math.random() < 0.5 ? 1 : -1) * (0.12 + Math.random() * 0.08);

            if (seg.stick.applyImpulse) {
              seg.stick.applyImpulse(impulseX, impulseY, spinKick);
            } else {
              seg.stick.velocity.x += impulseX;
              seg.stick.velocity.y += impulseY;
              seg.stick.rotSpeed += spinKick;
            }

            this.handleJumpCollisionWithObstacle('stick', nx, ny);
            this.stickCollisionCooldown = 0.35;
          }
          return;
        }

        // 5. ON GROUND / RUNNING / WALKING / STANDING
        if (this.stickCollisionCooldown <= 0) {
          const pushX = (this.facing || 1) * 3.8;
          const spinKick = (Math.random() < 0.5 ? 1 : -1) * 0.10;
          if (seg.stick.applyImpulse) {
            seg.stick.applyImpulse(pushX, (Math.random() - 0.5) * 2.0, spinKick);
          } else {
            seg.stick.velocity.x += pushX;
            seg.stick.velocity.y += (Math.random() - 0.5) * 2.0;
            seg.stick.rotSpeed += spinKick;
          }

          // Stop character from walking through the stick
          const pushDist = hitBodyPoint.r + stickRadius + 3.0;
          this.x = closestHitX + nx * pushDist;

          sounds.playWoodClack?.(0.085);
          this.spawnLandingDust();

          if (this.state === 'running' || this.floorSubstate === 'running_free') {
            const reboundDir = nx !== 0 ? (nx > 0 ? 1 : -1) : -this.facing;
            this.facing = reboundDir;
            this.isSkidding = false;
            this.state = 'running';
            this.currentSpeed = 3.2 + Math.random() * 0.8;
            this.targetTilt = this.facing * 0.16;
            this.floorRunTargetX = this.facing > 0 ? (this.width - 85) : 85;
            this.targetScaleX = 1.25;
            this.targetScaleY = 0.75;
          } else {
            this.targetTilt = -this.facing * 0.25;
            this.targetScaleX = 1.20;
            this.targetScaleY = 0.80;
          }
          this.stickCollisionCooldown = 0.35;
        }
      }
    }
  }

  handleJumpCollisionWithObstacle(type, nx = 0, ny = 0) {
    if (this.isDragging) return;

    // Remember the intended goal before clearing smartJumpData
    if (this.smartJumpData?.targetCardId) {
      this.intendedTargetCardId = this.smartJumpData.targetCardId;
    } else if (this.targetCardId) {
      this.intendedTargetCardId = this.targetCardId;
    }

    this.lastFailedTakeoffX = this.navTargetX || this.x;
    this.smartJumpData = null; // Abort automatic trajectory
    this.setFloorCoordinateSpace();
    this.state = 'falling';    // Fall down with realistic gravity

    // Strong knockback impulse based on collision direction
    const bounceDir = nx !== 0 ? Math.sign(nx) : -Math.sign(this.vx || this.facing || 1);
    this.vx = bounceDir * (4.5 + Math.random() * 1.5);
    this.vy = Math.max(3.6, Math.abs(this.vy) * 0.45 + 3.2); // Sharp downward drop, zero lift
    this.targetRotation = this.rotation + bounceDir * 1.4;
    this.targetScaleX = 1.40;
    this.targetScaleY = 0.60;
    this.targetTilt = -bounceDir * 0.40;
    this.spawnLandingDust();
    sounds.playWoodClack?.(0.095);
  }

  checkAntiStuck(dt) {
    if (this.isDragging || this.state === 'lying' || this.state === 'landing_jump') {
      this.stuckTimer = 0;
      this.lastTrackedX = this.x;
      return;
    }

    const isMovingState = this.state === 'running' ||
                          this.aiState === 'navigating_to_card' ||
                          this.aiState === 'navigating_to_edge' ||
                          this.aiState === 'prepare_card_launch' ||
                          this.cardExploreSubstate === 'patrol' ||
                          this.lettersExploreSubstate === 'patrol' ||
                          this.pillExploreSubstate === 'patrol';

    if (isMovingState) {
      const deltaX = Math.abs(this.x - this.lastTrackedX);
      if (deltaX < 0.35) {
        this.stuckTimer += dt;
      } else {
        this.stuckTimer = 0;
        this.lastTrackedX = this.x;
      }

      // If position is frozen while in motion for > 0.75s:
      if (this.stuckTimer > 0.75) {
        this.handleStuckResolution();
      }
    } else {
      this.stuckTimer = 0;
      this.lastTrackedX = this.x;
    }
  }

  handleStuckResolution() {
    this.stuckTimer = 0;
    this.lastTrackedX = this.x;

    // A. If stuck while navigating to a card takeoff spot
    if (this.aiState === 'navigating_to_card') {
      const cards = window.__app?.gallery?.getCardScreenRects() || [];
      const targetCard = cards.find(c => c.id === this.targetCardId);

      // If already within reasonable jumping distance to the card, launch jump now!
      if (targetCard && Math.abs(targetCard.x - this.x) < 450) {
        this.aiState = 'prepare_card_launch';
        this.aiTimer = 0;
        this.state = 'crouch';
        this.targetScaleY = 0.68;
        this.targetScaleX = 1.34;
        return;
      }

      // Otherwise, hop forward over whatever is blocking:
      this.triggerSingleJump(false);
      this.vx = this.facing * 2.5;
      this.vy = -6.2;
      return;
    }

    // B. If stuck while navigating to card edge
    if (this.aiState === 'navigating_to_edge') {
      this.executeCardToCardJump(this.targetCardId);
      return;
    }

    // C. If stuck while patrolling a card
    if (this.cardExploreSubstate === 'patrol') {
      this.facing *= -1;
      this.cardExploreSubstate = 'survey';
      this.cardExploreTimer = 0;
      this.state = 'standing';
      return;
    }

    // D. If stuck while patrolling letters
    if (this.attachedObstacle?.type === 'letters' && this.lettersExploreSubstate === 'patrol') {
      this.facing *= -1;
      this.lettersExploreSubstate = 'survey';
      this.lettersExploreTimer = 0;
      this.state = 'standing';
      return;
    }

    // E. If stuck while patrolling filter pill
    if (this.attachedObstacle?.type === 'pill' && this.pillExploreSubstate === 'patrol') {
      this.facing *= -1;
      this.pillExploreSubstate = 'survey';
      this.pillExploreTimer = 0;
      this.state = 'standing';
      return;
    }

    // E. General running stuck resolution
    if (this.state === 'running') {
      if (Math.random() < 0.5) {
        this.triggerSingleJump(false);
        this.vx = this.facing * 2.4;
        this.vy = -5.8;
      } else {
        this.triggerTurn();
      }
    }
  }

  updatePhysics(dt) {
    // Accumulate user idle time
    this.userIdleTime += dt;

    if (this.recentlyLeftCardTimer > 0) {
      this.recentlyLeftCardTimer -= dt;
      if (this.recentlyLeftCardTimer <= 0) {
        this.recentlyLeftCardId = null;
      }
    }
    if (this.recentlyLeftPillTimer > 0) {
      this.recentlyLeftPillTimer -= dt;
    }

    // --- INTERVAL TIMING BETWEEN ANIMATIONS (20s - 120s) ---
    if (!this.isDragging && this.state !== 'falling' && this.state !== 'grabbed') {
      this.animTimer += dt;
      if (this.animTimer >= this.animDuration) {
        this.switchNextAnimation();
      }
    }

    this.animSubTimer += dt;

    // Decay speeds & scales smoothly
    this.currentSpeed += (this.baseSpeed - this.currentSpeed) * 0.04;
    this.scaleX += (this.targetScaleX - this.scaleX) * 0.22;
    this.scaleY += (this.targetScaleY - this.scaleY) * 0.22;
    this.rotation += (this.targetRotation - this.rotation) * 0.16;

    if (this.stickCollisionCooldown > 0) {
      this.stickCollisionCooldown -= dt;
    }
    if (this.stickGrabCooldown > 0) {
      this.stickGrabCooldown -= dt;
    }
    if (this.dodgeCooldown > 0) {
      this.dodgeCooldown -= dt;
    }
    if (this.fleeTimer > 0) {
      this.fleeTimer -= dt;
      if (this.fleeTimer <= 0) {
        this.isFleeing = false;
      }
    }

    // Real-time sticks collision
    this.checkSticksCollision();

    // Update ladders lifecycle
    this.updateLadders(dt);

    // --- PLATFORM / OBSTACLE SYNCHRONIZATION ---
    let minBounds = 35;
    let maxBounds = this.width - 35;

    if (this.state === 'falling' || this.state === 'in_jump') {
      if (this.attachedObstacle) {
        this.setFloorCoordinateSpace();
      }
    }

    const scrollCurrent = window.__app?.gallery?.scroll?.current || 0;

    if (this.attachedObstacle && !this.isDragging && this.aiState !== 'climbing_ladder' && this.aiState !== 'sitting_ladder_top') {
      const obs = this.attachedObstacle;

      if (obs.type === 'card') {
        const cardRects = window.__app?.gallery?.getCardScreenRects() || [];
        const card = cardRects.find(c => c.id === obs.cardId);

        if (card && card.cardRef?.isVisible) {
          const hw = card.hw;

          if (obs.relX === undefined) {
            obs.relX = card.screenXToLocalX(this.x);
          }

          // Real-time 3D-projected surface point on the card top ledge at relX (including rounded corners!)
          const surfacePoint = card.getLedgePoint(obs.relX);

          // GLUED TO CARD: tracks 3D tilt, rotation, and elevation with zero levitation!
          this.x = surfacePoint.x;
          this.baseY = surfacePoint.y;
          this.y = 0;

          // Align character tilt to 3D card slope in screen space
          this.surfaceAngle = surfacePoint.surfaceAngle || card.topLedge.angle;

          this.pageBaseY = this.baseY + scrollCurrent;
          minBounds = card.left + 16;
          maxBounds = card.right - 16;

          // --- ROUNDED CORNER SLIDING ON CARD ---
          if (surfacePoint.isCorner && surfacePoint.slopeFactor > 0.18) {
            const slideAccel = surfacePoint.cornerSide * (2.2 * surfacePoint.slopeFactor + 0.8);
            this.slideCardVx = (this.slideCardVx || 0) + slideAccel * dt * 60;
            obs.relX += this.slideCardVx;
            const newSurfacePoint = card.getLedgePoint(obs.relX);
            this.x = newSurfacePoint.x;
            this.baseY = newSurfacePoint.y;
            this.targetTilt = (newSurfacePoint.surfaceAngle - card.topLedge.angle) * 1.5;
            if (Math.random() < 0.4) this.spawnFootstepDust();

            // Slid off the rounded corner!
            if (newSurfacePoint.slopeFactor > 0.72 || obs.relX <= -hw + 4 || obs.relX >= hw - 4) {
              const flingDir = newSurfacePoint.cornerSide;
              const cardId = obs.cardId;
              this.detachFromObstacle(2.5);
              this.recentlyLeftCardId = cardId;
              this.recentlyLeftCardTimer = 0.45;
              this.vx = flingDir * (3.8 + Math.abs(this.slideCardVx) * 0.4);
              this.vy = 2.0;
              this.slideCardVx = 0;
              this.targetRotation = this.rotation + flingDir * 0.9;
              this.state = 'falling';
              this.spawnLandingDust();
              sounds?.playWoodClack?.(0.05);
            }
          } else {
            this.slideCardVx = 0;
          }
        } else {
          this.detachFromObstacle(2);
        }
      } else if (obs.type === 'pill') {
        const pillColl = this.getFilterPillCollision();
        if (pillColl) {
          const surface = pillColl.getSurfaceAtScreenX(this.x);
          this.baseY = surface.y;
          this.y = 0;
          this.surfaceAngle = surface.angle;
          this.pageBaseY = this.baseY + scrollCurrent;
          minBounds = pillColl.left + pillColl.radius;
          maxBounds = pillColl.right - pillColl.radius;

          // --- ROUNDED CORNER SLIDING ON FILTER PILL ---
          if (surface.isCorner && surface.slopeFactor > 0.18) {
            const slideAccel = surface.cornerSide * (2.4 * surface.slopeFactor + 1.0);
            this.slideVx = (this.slideVx || 0) + slideAccel * dt * 60;
            this.x += this.slideVx;
            const newSurface = pillColl.getSurfaceAtScreenX(this.x);
            this.baseY = newSurface.y;
            this.targetTilt = newSurface.angle * 1.4;
            if (Math.random() < 0.4) this.spawnFootstepDust();

            // Slid completely off the pill's rounded edge!
            if (newSurface.isOff || newSurface.slopeFactor > 0.72 || this.x <= pillColl.left + 3 || this.x >= pillColl.right - 3) {
              const flingDir = surface.cornerSide;
              this.detachFromObstacle(2.5);
              this.recentlyLeftPillTimer = 0.45;
              this.vx = flingDir * (4.0 + Math.abs(this.slideVx) * 0.4);
              this.vy = 2.0;
              this.slideVx = 0;
              this.targetRotation = this.rotation + flingDir * 0.9;
              this.state = 'falling';
              this.spawnLandingDust();
              sounds?.playWoodClack?.(0.05);
            }
          } else {
            this.slideVx = 0;
          }
        } else {
          this.detachFromObstacle(2);
        }
      } else if (obs.type === 'letters') {
        const titleColl = this.getTitleLettersCollision();
        if (titleColl) {
          this.x = Math.max(titleColl.left + 8, Math.min(titleColl.right - 8, this.x));
          const targetLedgeY = titleColl.getLedgeYAtScreenX(this.x);
          if (Math.abs(targetLedgeY - this.baseY) < 0.5) {
            this.baseY = targetLedgeY;
          } else {
            this.baseY += (targetLedgeY - this.baseY) * 0.45;
          }
          this.y = 0;
          this.surfaceAngle = 0;
          this.pageBaseY = this.baseY + scrollCurrent;
          minBounds = titleColl.left + 10;
          maxBounds = titleColl.right - 10;
        } else {
          this.detachFromObstacle(2);
        }
      } else {
        this.detachFromObstacle(2);
      }
    } else if (!this.isDragging) {
      if (this.attachedStick) {
        this.pageBaseY = this.baseY + scrollCurrent;
        this.surfaceAngle = 0;
      } else if (this.aiState === 'climbing_ladder' || this.aiState === 'sitting_ladder_top' || this.aiState === 'pocket_ladder_deploy' || this.aiState === 'building_ladder') {
        this.pageBaseY = this.baseY + scrollCurrent;
        this.surfaceAngle = 0;
      } else {
        // Character is on the page background!
        // Lock to page coordinates so character stays at his page position during scroll!
        if (this.pageBaseY === undefined || this.pageBaseY === null) {
          this.pageBaseY = this.floorY + scrollCurrent;
        }
        this.baseY = this.pageBaseY - scrollCurrent;
        this.surfaceAngle = 0;
      }
      minBounds = 70;
      maxBounds = this.width - 70;
    }

    this.updateCanvasZIndex();

    // --- STATE MACHINE & GOAL-ORIENTED INTELLIGENT AI ---
    if (this.attachedStick) {
      this.updateStickAI(dt);
    } else if (this.state !== 'in_jump' && this.state !== 'falling' && this.state !== 'grabbed') {
      this.updateAI(dt, minBounds, maxBounds);
    }

    // IN JUMP & FALLING (BALLISTIC TRAJECTORY & COLLISION SOLVER)
    else if (this.state === 'in_jump' || this.state === 'falling') {
      this.vy += this.gravity;
      this.vx *= 0.985;

      const prevFeetY = this.baseY + this.y;
      const prevHeadY = prevFeetY - 44;
      const prevX = this.x;

      this.y += this.vy;
      this.x += this.vx;
      this.runCycle += 0.15;

      const currFeetY = this.baseY + this.y;
      const currHeadY = currFeetY - 44;

      // Real-time continuous swept sticks collision during flight:
      this.checkSticksCollision(prevX, prevFeetY);

      if (this.vy < -2) {
        this.targetScaleY = 1.30;
        this.targetScaleX = 0.80;
        this.targetTilt = this.facing * 0.18;
      } else if (Math.abs(this.vy) <= 2) {
        this.targetScaleY = 1.04;
        this.targetScaleX = 0.96;
        this.targetTilt = 0;
      } else {
        this.targetScaleY = 1.16;
        this.targetScaleX = 0.88;
        this.targetTilt = -this.facing * 0.12;
      }

      // Left / Right screen boundaries
      const minJumpX = (this.isFleeing || this.x < 0) ? -85 : 70;
      const maxJumpX = (this.isFleeing || this.x > this.width) ? (this.width + 85) : (this.width - 70);
      if (this.x < minJumpX) {
        this.x = minJumpX;
        this.vx = Math.abs(this.vx) * 0.5 + 1.5;
        this.facing = 1;
      } else if (this.x > maxJumpX) {
        this.x = maxJumpX;
        this.vx = -(Math.abs(this.vx) * 0.5 + 1.5);
        this.facing = -1;
      }

      // Top ceiling
      if (currHeadY < 5) {
        this.y = (5 + 44) - this.baseY;
        this.vy = Math.max(1.8, -this.vy * 0.35);
        this.targetScaleY = 0.8;
        this.targetScaleX = 1.25;
        sounds.playClick();
      }

      // 3D Card & Title Letters Landing (when falling down: vy >= 0)
      if (this.vy >= 0) {
        let landedLetters = false;
        const isTargetingCard = Boolean(this.smartJumpData?.targetCardId);
        const isTargetingPill = this.smartJumpData?.targetType === 'pill';
        const isTargetingLetters = this.smartJumpData?.targetType === 'letters';
        const isTargetingFloor = this.smartJumpData?.targetType === 'floor';
        const titleColl = this.getTitleLettersCollision();
        if (!isTargetingFloor && !isTargetingCard && !isTargetingPill && titleColl && this.x >= titleColl.left - 15 && this.x <= titleColl.right + 15) {
          const ledgeY = titleColl.getLedgeYAtScreenX(this.x);
          if (currFeetY >= ledgeY - 8 && prevFeetY <= ledgeY + 36) {
            landedLetters = true;
            this.attachedObstacle = {
              id: 'title-letters',
              type: 'letters',
              name: titleColl.name
            };
            this.x = Math.max(titleColl.left + 8, Math.min(titleColl.right - 8, this.x));
            this.baseY = ledgeY;
            this.y = 0;
            this.vy = 0;
            this.vx = 0;
            this.surfaceAngle = 0;
            this.pageBaseY = this.baseY + scrollCurrent;
            this.smartJumpData = null;
            this.intendedTargetCardId = null;
            this.retryJumpCount = 0;
            this.jumpArcBonusExtra = 0;

            this.aiState = 'on_letters';
            this.lettersExploreSubstate = 'survey';
            this.lettersExploreTimer = 0;
            this.currentAnim = 'standing';

            this.targetScaleY = 0.65;
            this.targetScaleX = 1.40;
            this.targetRotation = Math.round(this.rotation / (Math.PI * 2)) * (Math.PI * 2);
            this.spawnLandingDust();
            sounds?.playHop();
            this.updateCanvasZIndex();

            this.state = 'landing_jump';
            setTimeout(() => {
              if (this.state === 'landing_jump') {
                this.targetScaleY = 1.0;
                this.targetScaleX = 1.0;
                this.state = 'standing';
              }
            }, 140);
          }
        }

        let landedPill = false;
        const pillColl = this.getFilterPillCollision();
        if (!isTargetingFloor && !isTargetingCard && !isTargetingLetters && (!this.recentlyLeftPillTimer || this.recentlyLeftPillTimer <= 0) && pillColl && this.x >= pillColl.left - 10 && this.x <= pillColl.right + 10) {
          const surface = pillColl.getSurfaceAtScreenX(this.x);
          if (currFeetY >= surface.y - 8 && prevFeetY <= surface.y + 36) {
            landedPill = true;
            this.attachedObstacle = {
              id: 'filter-pill',
              type: 'pill',
              name: pillColl.name
            };
            this.baseY = surface.y;
            this.y = 0;
            this.vy = 0;
            this.vx = 0;
            this.surfaceAngle = surface.angle;
            this.pageBaseY = this.baseY + scrollCurrent;
            this.smartJumpData = null;
            this.intendedTargetCardId = null;
            this.retryJumpCount = 0;
            this.jumpArcBonusExtra = 0;

            this.aiState = 'on_pill';
            this.pillExploreSubstate = 'survey';
            this.pillExploreTimer = 0;
            this.slideVx = 0;
            this.currentAnim = 'standing';

            this.targetScaleY = 0.65;
            this.targetScaleX = 1.40;
            this.targetRotation = Math.round(this.rotation / (Math.PI * 2)) * (Math.PI * 2);
            this.spawnLandingDust();
            sounds?.playHop();
            this.updateCanvasZIndex();

            this.state = 'landing_jump';
            setTimeout(() => {
              if (this.state === 'landing_jump') {
                this.targetScaleY = 1.0;
                this.targetScaleX = 1.0;
                this.state = 'standing';
              }
            }, 140);
          }
        }

        if (!landedLetters && !landedPill) {
          let landedCard = null;
          let landedRelX = 0;

          const cards = window.__app?.gallery?.getCardScreenRects() || [];

          // 1. Check targeted card first if executing smart jump
          if (this.smartJumpData?.targetCardId) {
            const target = cards.find(c => c.id === this.smartJumpData.targetCardId);
            if (target && target.cardRef?.isVisible && target.cardRef?.group?.visible) {
              const minLedgeX = Math.min(target.topLedge.x1, target.topLedge.x2) - 20;
              const maxLedgeX = Math.max(target.topLedge.x1, target.topLedge.x2) + 20;
              if (this.x >= minLedgeX && this.x <= maxLedgeX) {
                const ledgeY = target.getLedgeYAtScreenX(this.x);
                if (currFeetY >= ledgeY - 8 && prevFeetY <= ledgeY + 36) {
                  landedCard = target;
                  landedRelX = this.smartJumpData.targetRelX !== undefined ? this.smartJumpData.targetRelX : target.screenXToLocalX(this.x);
                }
              }
            }
          }

          // 2. Check all other cards if not already landed
          if (!landedCard) {
            for (const card of cards) {
              if (this.recentlyLeftCardId === card.id && this.recentlyLeftCardTimer > 0) continue;
              if (!card.cardRef?.isVisible || !card.cardRef?.group?.visible) continue;
              const minLedgeX = Math.min(card.topLedge.x1, card.topLedge.x2) - 16;
              const maxLedgeX = Math.max(card.topLedge.x1, card.topLedge.x2) + 16;
              if (this.x < minLedgeX || this.x > maxLedgeX) continue;
              const ledgeY = card.getLedgeYAtScreenX(this.x);
              if (currFeetY >= ledgeY - 6 && prevFeetY <= ledgeY + 32) {
                landedCard = card;
                landedRelX = card.screenXToLocalX(this.x);
                break;
              }
            }
          }

          if (landedCard) {
            const clampedRelX = Math.max(-landedCard.hw + 8, Math.min(landedCard.hw - 8, landedRelX));
            const surfacePoint = landedCard.getLedgePoint(clampedRelX);

            this.attachedObstacle = {
              id: `card-${landedCard.id}-top`,
              cardId: landedCard.id,
              type: 'card',
              relX: clampedRelX,
              cardRef: landedCard.cardRef
            };

            this.x = surfacePoint.x;
            this.baseY = surfacePoint.y;
            this.y = 0;
            this.vy = 0;
            this.vx = 0;
            this.surfaceAngle = landedCard.topLedge.angle;
            this.pageBaseY = this.baseY + scrollCurrent;
            this.smartJumpData = null;
            this.intendedTargetCardId = null;
            this.retryJumpCount = 0;
            this.jumpArcBonusExtra = 0;

            this.aiState = 'on_card';
            this.cardExploreSubstate = 'survey';
            this.cardExploreTimer = 0;
            this.currentAnim = 'standing';

            this.targetScaleY = 0.65;
            this.targetScaleX = 1.40;
            this.targetRotation = Math.round(this.rotation / (Math.PI * 2)) * (Math.PI * 2);
            this.spawnLandingDust();
            sounds?.playHop();
            this.updateCanvasZIndex();

            this.state = 'landing_jump';
            setTimeout(() => {
              if (this.state === 'landing_jump') {
                this.targetScaleY = 1.0;
                this.targetScaleX = 1.0;
                this.state = 'standing';
              }
            }, 140);
          } else {
            // Check floor landing:
            // Do NOT cut a smart jump short if targeting a lower card that hasn't been reached yet!
            const groundFloorY = (this.smartJumpData?.targetType === 'floor' && this.smartJumpData?.targetY !== undefined)
              ? this.smartJumpData.targetY
              : ((this.pageBaseY !== undefined && this.pageBaseY !== null) ? (this.pageBaseY - scrollCurrent) : this.floorY);

            const isTargetingLowerCard = Boolean(
              this.smartJumpData?.targetCardId &&
              this.smartJumpData?.targetY &&
              this.smartJumpData.targetY > groundFloorY - 10
            );

            const hitFloor = (currFeetY >= groundFloorY && !isTargetingLowerCard) ||
                             (isTargetingLowerCard && currFeetY >= (this.smartJumpData.targetY + 45));

            if (hitFloor) {
              // Before landing on floor, check if character's feet are directly above/within a card!
              const cardUnderneath = cards.find(c => {
                if (!c.cardRef?.isVisible || !c.cardRef?.group?.visible) return false;
                const minLedgeX = Math.min(c.topLedge.x1, c.topLedge.x2) - 16;
                const maxLedgeX = Math.max(c.topLedge.x1, c.topLedge.x2) + 16;
                return this.x >= minLedgeX && this.x <= maxLedgeX && (c.top <= groundFloorY + 65 && c.bottom >= groundFloorY - 65);
              });

              if (cardUnderneath) {
                // Land safely on the card ledge instead of floating in empty space above it!
                const clampedRelX = Math.max(-cardUnderneath.hw + 8, Math.min(cardUnderneath.hw - 8, cardUnderneath.screenXToLocalX(this.x)));
                const surfacePoint = cardUnderneath.getLedgePoint(clampedRelX);

                this.attachedObstacle = {
                  id: `card-${cardUnderneath.id}-top`,
                  cardId: cardUnderneath.id,
                  type: 'card',
                  relX: clampedRelX,
                  cardRef: cardUnderneath.cardRef
                };

                this.x = surfacePoint.x;
                this.baseY = surfacePoint.y;
                this.y = 0;
                this.vy = 0;
                this.vx = 0;
                this.surfaceAngle = cardUnderneath.topLedge.angle;
                this.pageBaseY = this.baseY + scrollCurrent;
                this.smartJumpData = null;
                this.intendedTargetCardId = null;
                this.retryJumpCount = 0;
                this.jumpArcBonusExtra = 0;

                this.aiState = 'on_card';
                this.cardExploreSubstate = 'survey';
                this.cardExploreTimer = 0;
                this.currentAnim = 'standing';

                this.targetScaleY = 0.65;
                this.targetScaleX = 1.40;
                this.targetRotation = Math.round(this.rotation / (Math.PI * 2)) * (Math.PI * 2);
                this.spawnLandingDust();
                sounds?.playHop();
                this.updateCanvasZIndex();

                this.state = 'landing_jump';
                setTimeout(() => {
                  if (this.state === 'landing_jump') {
                    this.targetScaleY = 1.0;
                    this.targetScaleX = 1.0;
                    this.state = 'standing';
                  }
                }, 140);
              } else {
                // True bottom floor landing
                const wasTargetingFloor = this.smartJumpData?.targetType === 'floor';
                this.attachedObstacle = null;
                this.baseY = groundFloorY;
                this.pageBaseY = groundFloorY + scrollCurrent;
                this.y = 0;
                this.vy = 0;
                this.vx = 0;
                this.smartJumpData = null;

                this.targetScaleY = 0.65;
                this.targetScaleX = 1.40;
                this.targetRotation = Math.round(this.rotation / (Math.PI * 2)) * (Math.PI * 2);
                this.spawnLandingDust();
                sounds.playHop();
                this.updateCanvasZIndex();

                this.state = 'landing_jump';

                if (this.intendedTargetCardId && this.retryJumpCount < this.maxRetries) {
                  this.aiState = 'recovering_from_fall';
                  this.recoveryTimer = 0;
                  setTimeout(() => {
                    this.targetScaleY = 1.0;
                    this.targetScaleX = 1.0;
                    this.state = 'standing';
                  }, 140);
                } else {
                  this.intendedTargetCardId = null;
                  this.retryJumpCount = 0;
                  this.jumpArcBonusExtra = 0;
                  this.aiState = 'floor_idle';
                  this.aiTimer = 0;
                  this.currentAnim = 'standing';
                  setTimeout(() => {
                    this.targetScaleY = 1.0;
                    this.targetScaleX = 1.0;
                    if (wasTargetingFloor || Math.random() < 0.60) {
                      this.startFloorRunning();
                    } else {
                      this.state = 'standing';
                    }
                  }, 140);
                }
              }
            }
          }
        }
      }
    }

    // GRABBED (held / moved by cursor: dangling relaxed, no frantic running!)
    else if (this.state === 'grabbed') {
      this.runCycle = 0;
      this.vx *= 0.85;
      this.targetTilt = Math.max(-0.25, Math.min(0.25, -this.vx * 0.03));
      this.targetScaleY = 1.06;
      this.targetScaleX = 0.95;
    }

    // Safety check for crouch state
    if (this.state === 'crouch') {
      this.crouchSafetyTimer += dt;
      if (this.crouchSafetyTimer > 0.8) {
        this.crouchSafetyTimer = 0;
        this.state = 'standing';
        this.targetScaleX = 1.0;
        this.targetScaleY = 1.0;
      }
    } else {
      this.crouchSafetyTimer = 0;
    }

    // Safety screen boundary enforcement for all non-dragged states
    const allowOffscreen = this.isFleeing || (this.offscreenReturnTimer !== undefined && this.offscreenReturnTimer > 0) || this.x < 0 || this.x > this.width;
    const minScreenX = allowOffscreen ? -85 : 70;
    const maxScreenX = allowOffscreen ? (this.width + 85) : (this.width - 70);
    if (!this.isDragging) {
      if (this.x < minScreenX) {
        this.x = minScreenX;
        if (this.state === 'running' || this.state === 'skid') {
          this.isSkidding = false;
          this.facing = 1;
          this.state = 'running';
          this.targetTilt = this.facing * 0.16;
          this.floorRunTargetX = this.width - 85 - Math.random() * 120;
          this.spawnLandingDust();
        } else if (this.state === 'in_jump' || this.state === 'falling') {
          this.vx = Math.abs(this.vx || 2.5);
          this.facing = 1;
        }
      } else if (this.x > maxScreenX) {
        this.x = maxScreenX;
        if (this.state === 'running' || this.state === 'skid') {
          this.isSkidding = false;
          this.facing = -1;
          this.state = 'running';
          this.targetTilt = this.facing * 0.16;
          this.floorRunTargetX = 85 + Math.random() * 120;
          this.spawnLandingDust();
        } else if (this.state === 'in_jump' || this.state === 'falling') {
          this.vx = -Math.abs(this.vx || 2.5);
          this.facing = -1;
        }
      }
    }

    // Anti-stuck motion watchdog
    this.checkAntiStuck(dt);

    this.tilt += (this.targetTilt - this.tilt) * 0.20;

    // Update dust particles
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vx *= 0.92;
      p.vy += 0.04;
      p.alpha -= p.decay;
      if (p.alpha <= 0) this.particles.splice(i, 1);
    }

    // Update sleep Zzz bubbles
    for (let i = this.sleepBubbles.length - 1; i >= 0; i--) {
      const b = this.sleepBubbles[i];
      b.x += b.vx;
      b.y += b.vy;
      b.scale += 0.01;
      b.alpha -= 0.007;
      if (b.alpha <= 0) this.sleepBubbles.splice(i, 1);
    }

    // Cache previous frame position for continuous swept collision detection
    this.prevX = this.x;
    this.prevFeetY = this.baseY + this.y;
  }

  // --- BALLISTIC TRAJECTORY SOLVER ---
  calculateBallisticJump(sourceX, sourceY, targetX, targetY, arcBonus = 55) {
    const g = this.gravity; // 0.55
    const k = 0.985;        // horizontal drag

    // The apex must clear both takeoff and landing positions
    const apexY = Math.min(sourceY, targetY) - arcBonus;
    const hUp = Math.max(16, sourceY - apexY);
    const hDown = Math.max(16, targetY - apexY);

    // Smooth natural timing based on physics ascent and descent
    const tUp = Math.sqrt((2 * hUp) / g);
    const tDown = Math.sqrt((2 * hDown) / g);
    const totalFrames = Math.max(18, Math.round(tUp + tDown));

    // Exact discrete Euler equation for vertical velocity vy0:
    // y(N) - y(0) = N * vy0 + g * N * (N + 1) / 2
    // vy0 = (targetY - sourceY) / N - g * (N + 1) / 2
    const deltaY = targetY - sourceY;
    const vy0 = (deltaY / totalFrames) - (g * (totalFrames + 1) / 2);

    // Exact discrete Euler equation for horizontal velocity vx0 with drag k:
    // x(N) - x(0) = vx0 * k * (1 - k^N) / (1 - k)
    // vx0 = deltaX * (1 - k) / (k * (1 - k^totalFrames))
    const deltaX = targetX - sourceX;
    const geomSum = (k * (1 - Math.pow(k, totalFrames))) / (1 - k);
    const vx0 = deltaX / geomSum;

    return {
      vx: vx0,
      vy: vy0,
      totalFrames,
      targetX,
      targetY
    };
  }

  // --- ELUSIVE CURSOR FLEE & DODGE SYSTEM ---
  updateCursorAvoidance(dt, minBounds, maxBounds) {
    if (this.isDragging) return false;
    if (this.state === 'grabbed') return false;
    if (this.state === 'landing_jump') return false;
    if (this.state === 'in_jump' || this.state === 'falling') return false;
    if (this.aiState === 'pocket_ladder_deploy' || this.aiState === 'climbing_ladder' || this.aiState === 'sitting_ladder_top') return false;
    if (!this.mouse || this.mouse.x < 0 || this.mouse.y < 0) {
      this.isFleeing = false;
      this.fleeTimer = 0;
      return false;
    }

    const charScreenY = this.baseY + this.y - 20;
    const dx = this.x - this.mouse.x; // Positive = cursor is left, char runs right
    const dy = charScreenY - this.mouse.y;
    const dist = Math.hypot(dx, dy);

    // Track mouse velocity to detect fast grab swipes
    const now = performance.now();
    if (!this.prevMouseTime) this.prevMouseTime = now;
    const elapsed = Math.max(16, now - this.prevMouseTime);
    this.prevMouseTime = now;
    const vx = (this.mouse.x - (this.prevMouseX ?? this.mouse.x)) / (elapsed / 1000);
    const vy = (this.mouse.y - (this.prevMouseY ?? this.mouse.y)) / (elapsed / 1000);
    this.prevMouseX = this.mouse.x;
    this.prevMouseY = this.mouse.y;
    this.mouseSpeed = Math.hypot(vx, vy);

    // Startle awake if sleeping and cursor approaches
    if (dist < 160 && (this.state === 'lying' || this.currentAnim === 'lying')) {
      this.wakeUp();
      this.spawnLandingDust();
      sounds?.playHop?.(0.12);
      this.isFleeing = true;
      this.fleeTimer = 1.0;
    }

    // Threat detection radius (140px)
    const isThreatened = dist < 140 || this.fleeTimer > 0;
    if (!isThreatened) {
      this.isFleeing = false;
      return false;
    }

    this.isFleeing = true;
    this.fleeTimer = Math.max(this.fleeTimer, 0.75);

    const fleeDir = (Math.abs(dx) > 2) ? (dx > 0 ? 1 : -1) : (this.x > this.width / 2 ? -1 : 1);
    this.facing = fleeDir;

    // Check if cornered against boundaries
    const isAtScreenEdge = (fleeDir === 1 && this.x >= maxBounds - 35) || (fleeDir === -1 && this.x <= minBounds + 35);

    let isAtCardEdge = false;
    let cardRefObj = null;
    if (this.attachedObstacle && this.attachedObstacle.type === 'card') {
      const cards = window.__app?.gallery?.getCardScreenRects() || [];
      cardRefObj = cards.find(c => c.id === this.attachedObstacle.cardId);
      if (cardRefObj) {
        const relX = this.attachedObstacle.relX ?? 0;
        isAtCardEdge = (fleeDir === 1 && relX >= cardRefObj.hw - 35) || (fleeDir === -1 && relX <= -cardRefObj.hw + 35);
      }
    }

    // 1. ACROBATIC EVASIONS (When cornered or fast swipe)
    // A. Cornered on a card ledge: make a daring leap off the card!
    if (isAtCardEdge && dist < 100 && this.dodgeCooldown <= 0) {
      this.dodgeCooldown = 0.95;
      this.cardsVisitedInSequence = 0;
      this.executeJumpFromCardToFloor(fleeDir > 0 ? 'right' : 'left');
      sounds?.playHop?.(0.14);
      return true;
    }

    // B. Cornered on a platform/obstacle against screen edge: do a high ninja vault OVER the cursor!
    if (this.attachedObstacle && isAtScreenEdge && dist < 105 && this.dodgeCooldown <= 0) {
      this.dodgeCooldown = 1.1;
      const leapDir = -fleeDir; // leap back across and over the cursor!
      this.facing = leapDir;
      this.setFloorCoordinateSpace();
      this.state = 'in_jump';
      this.aiState = 'in_smart_jump';
      this.smartJumpData = {
        targetType: 'floor',
        targetX: Math.max(minBounds + 35, Math.min(maxBounds - 35, this.x + leapDir * 175)),
        targetY: this.baseY
      };
      this.vx = leapDir * 6.4;
      this.vy = -6.8; // High arc leap!
      this.targetRotation = this.rotation + leapDir * Math.PI * 2;
      this.targetScaleY = 1.45;
      this.targetScaleX = 0.70;
      this.spawnLandingDust();
      sounds?.playHop?.(0.16);
      return true;
    }

    // C. Sudden fast swipe dodge (cursor rushing in fast)
    if (this.mouseSpeed > 450 && dist < 75 && this.dodgeCooldown <= 0) {
      this.dodgeCooldown = 0.8;
      this.facing = fleeDir;
      this.setFloorCoordinateSpace();
      this.state = 'in_jump';
      this.vy = -4.0;
      this.vx = fleeDir * 5.8;
      this.targetScaleY = 0.75;
      this.targetScaleX = 1.35;
      this.spawnLandingDust();
      sounds?.playHop?.(0.12);
      return true;
    }

    // 2. ACTIVE SPRINT AWAY FROM CURSOR
    // The closer the cursor, the faster the panic sprint (from 3.8 up to 7.0 px/frame)
    const panicRatio = Math.max(0, 1 - dist / 140);
    const sprintSpeed = 3.8 + panicRatio * 3.2;

    this.state = 'running';
    this.currentAnim = 'running';
    this.currentSpeed = sprintSpeed;

    if (this.attachedObstacle && this.attachedObstacle.type === 'card' && cardRefObj) {
      const curRelX = this.attachedObstacle.relX ?? 0;
      const newRelX = Math.max(-cardRefObj.hw + 18, Math.min(cardRefObj.hw - 18, curRelX + fleeDir * sprintSpeed));
      this.attachedObstacle.relX = newRelX;
      const pt = cardRefObj.getLedgePoint(newRelX);
      this.x = pt.x;
      this.baseY = pt.y;
    } else if (this.attachedObstacle && this.attachedObstacle.type === 'pill') {
      const pillColl = this.getFilterPillCollision();
      if (pillColl) {
        this.x = Math.max(pillColl.left + 15, Math.min(pillColl.right - 15, this.x + fleeDir * sprintSpeed));
      }
    } else if (this.attachedObstacle && this.attachedObstacle.type === 'letters') {
      const titleColl = this.getTitleLettersCollision();
      if (titleColl) {
        this.x = Math.max(titleColl.left + 15, Math.min(titleColl.right - 15, this.x + fleeDir * sprintSpeed));
      }
    } else {
      // Floor sprint: allows running out of the field of view into the wings!
      const fleeMinX = -85;
      const fleeMaxX = this.width + 85;
      this.x = Math.max(fleeMinX, Math.min(fleeMaxX, this.x + fleeDir * sprintSpeed));
      if (this.x <= -50 || this.x >= this.width + 50) {
        // Escaped successfully out of user's field of view!
        this.isFleeing = false;
        this.fleeTimer = 0;
        this.offscreenReturnTimer = 0;
      }
    }

    this.targetTilt = fleeDir * (0.20 + panicRatio * 0.12);
    this.targetScaleY = 0.90;
    this.targetScaleX = 1.15;

    const stepFreq = sprintSpeed * 0.065;
    this.runCycle += stepFreq;
    const currentStep = Math.sin(this.runCycle);
    if (currentStep * this.lastStepPhase < 0) {
      this.spawnFootstepDust();
      if (Math.random() < 0.40) sounds?.playWoodClack?.(0.025);
    }
    this.lastStepPhase = currentStep;
    return true;
  }

  // --- GOAL-ORIENTED INTELLIGENT AI SYSTEM ---
  updateAI(dt, minBounds, maxBounds) {
    const charScreenY = this.baseY + this.y;
    const isOffscreen = charScreenY < -70 || charScreenY > this.height + 70 || this.x < 0 || this.x > this.width;

    // If character is out of the field of view, remain quietly in place where he was!
    if (isOffscreen) {
      this.state = (this.currentAnim === 'lying' && this.userIdleTime >= this.userIdleThreshold ? 'lying' : 'standing');
      this.vx = 0;
      this.targetTilt = 0;
      this.targetScaleX = 1.0;
      this.targetScaleY = 1.0;

      // If offscreen horizontally after fleeing from cursor:
      if (this.x < 0 || this.x > this.width) {
        this.offscreenReturnTimer = (this.offscreenReturnTimer || 0) + dt;
        // Check if cursor is safely away from the exit border (> 200px)
        const cursorSafe = !this.mouse || (this.x < 0 ? this.mouse.x > 200 : this.mouse.x < this.width - 200);
        if (this.offscreenReturnTimer > 2.0 && cursorSafe) {
          // Sneak back into view!
          const returnDir = this.x < 0 ? 1 : -1;
          this.facing = returnDir;
          this.state = 'running';
          this.currentAnim = 'running';
          this.currentSpeed = 2.2;
          this.x += returnDir * this.currentSpeed;
          this.targetTilt = returnDir * 0.12;
          if (this.x >= 75 && this.x <= this.width - 75) {
            this.offscreenReturnTimer = 0;
          }
        }
      }
      return;
    }

    if (this.state === 'landing_jump') {
      return;
    }

    if (this.attachedStick) {
      this.updateStickAI(dt);
      return;
    }

    // Active evasion & escape from cursor!
    if (this.updateCursorAvoidance(dt, minBounds, maxBounds)) {
      return;
    }

    if (this.aiState === 'navigating_to_ladder' ||
        this.aiState === 'building_ladder' ||
        this.aiState === 'pocket_ladder_deploy' ||
        this.aiState === 'climbing_ladder' ||
        this.aiState === 'sitting_ladder_top') {
      this.updateLadderAI(dt);
      return;
    }

    if (this.attachedObstacle && this.attachedObstacle.type === 'card') {
      this.updateCardAI(dt, minBounds, maxBounds);
    } else if (this.attachedObstacle && this.attachedObstacle.type === 'letters') {
      this.updateLettersAI(dt, minBounds, maxBounds);
    } else if (this.attachedObstacle && this.attachedObstacle.type === 'pill') {
      this.updatePillAI(dt, minBounds, maxBounds);
    } else {
      this.updateFloorAI(dt, minBounds, maxBounds);
    }
  }

  updateFloorAI(dt, minBounds, maxBounds) {
    this.aiTimer += dt;

    // 0. Recovering from fall after colliding with a stick / obstacle
    if (this.aiState === 'recovering_from_fall') {
      this.recoveryTimer += dt;

      // Stage 1: Shake off dust with determined wiggle, face target card (0 - 0.45s)
      if (this.recoveryTimer < 0.45) {
        this.state = 'standing';
        this.targetTilt = Math.sin(this.recoveryTimer * 30) * 0.14;
        if (Math.random() < 0.25) this.spawnLandingDust();

        const cards = window.__app?.gallery?.getCardScreenRects() || [];
        const targetCard = cards.find(c => c.id === this.intendedTargetCardId);
        if (targetCard) {
          this.facing = targetCard.x > this.x ? 1 : -1;
        }
        return;
      }

      // Stage 2: Calculate intelligent retry strategy!
      const cards = window.__app?.gallery?.getCardScreenRects() || [];
      const targetCard = cards.find(c => c.id === this.intendedTargetCardId);

      if (!targetCard || !targetCard.cardRef?.isVisible || targetCard.top > this.height - 30) {
        this.intendedTargetCardId = null;
        this.retryJumpCount = 0;
        this.aiState = 'floor_idle';
        this.aiTimer = 0;
        return;
      }

      this.retryJumpCount++;
      this.jumpArcBonusExtra += 35; // Higher trajectory to vault over the obstacle!

      const margin = 50;
      const cardLeft = targetCard.left + margin;
      const cardRight = targetCard.right - margin;
      const cardCenter = targetCard.x;

      let newTakeoffX;
      if (this.retryJumpCount === 1) {
        // 1st retry: try opposite side of the card from failed launch
        if (this.lastFailedTakeoffX && this.lastFailedTakeoffX > cardCenter) {
          newTakeoffX = Math.max(45, cardLeft);
        } else {
          newTakeoffX = Math.min(this.width - 45, cardRight);
        }
      } else if (this.retryJumpCount === 2) {
        // 2nd retry: try dead center with maximum high arc
        newTakeoffX = cardCenter;
      } else {
        // 3rd retry: launch from current position with super arc!
        newTakeoffX = Math.max(45, Math.min(this.width - 45, this.x));
      }

      this.targetCardId = this.intendedTargetCardId;
      this.navTargetX = Math.max(40, Math.min(this.width - 40, newTakeoffX));
      this.aiState = 'navigating_to_card';
      this.currentAnim = 'running';
      this.state = 'running';
      this.aiTimer = 0;
      this.stuckTimer = 0;
      return;
    }

    // Inactivity Sleep: ONLY sleep if user has been inactive for > 5 min (300s)
    if (this.userIdleTime >= this.userIdleThreshold && !this.intendedTargetCardId) {
      if (this.state !== 'lying') {
        this.currentAnim = 'lying';
        this.state = 'lying';
        this.aiState = 'floor_idle';
        this.navTargetX = null;
        this.vx = 0;
        this.spawnLandingDust();
      }
      this.targetTilt = 0;
      if (Math.random() < 0.015 && this.sleepBubbles.length < 3) {
        this.sleepBubbles.push({
          x: this.x + this.facing * 12,
          y: this.baseY - 14,
          vx: this.facing * 0.3 + (Math.random() - 0.5) * 0.4,
          vy: -0.6 - Math.random() * 0.4,
          alpha: 0.45,
          scale: 0.6
        });
      }
      return;
    }

    // 1. Actively navigating with purpose to a card takeoff position
    if (this.aiState === 'navigating_to_card') {
      if (this.navTargetX === null || !this.targetCardId) {
        this.aiState = 'floor_idle';
        this.state = 'standing';
        return;
      }

      const cards = window.__app?.gallery?.getCardScreenRects() || [];
      const targetCard = cards.find(c => c.id === this.targetCardId);
      if (!targetCard || !targetCard.cardRef?.isVisible || targetCard.top > this.height) {
        this.aiState = 'floor_idle';
        this.intendedTargetCardId = null;
        this.retryJumpCount = 0;
        this.state = 'standing';
        return;
      }

      const dist = this.navTargetX - this.x;
      const withinCardX = this.x >= targetCard.left + 25 && this.x <= targetCard.right - 25;
      if (Math.abs(dist) < 28 || withinCardX || (dist > 0 && this.x >= this.width - 50) || (dist < 0 && this.x <= 50)) {
        // Arrived at takeoff point! Smooth stop without coordinate snap
        this.vx = 0;
        this.aiState = 'prepare_card_launch';
        this.aiTimer = 0;
        this.state = 'crouch';
        this.targetScaleY = 0.68;
        this.targetScaleX = 1.34;
        this.targetTilt = 0;

        // Face towards target card center
        this.facing = targetCard.x > this.x ? 1 : -1;
      } else {
        // Run purposefully towards target takeoff spot with agile speed
        this.facing = dist > 0 ? 1 : -1;
        this.state = 'running';
        this.currentSpeed = Math.min(3.2, Math.max(1.8, Math.abs(dist) * 0.035 + 1.6));
        this.x += this.facing * this.currentSpeed;
        this.x = Math.max(75, Math.min(this.width - 75, this.x));
        this.targetTilt = this.facing * 0.13;

        const stepFreq = this.currentSpeed * 0.055;
        this.runCycle += stepFreq;
        const currentStep = Math.sin(this.runCycle);
        if (currentStep * this.lastStepPhase < 0) {
          this.spawnFootstepDust();
        }
        this.lastStepPhase = currentStep;
      }
      return;
    }

    // 2. Crouch wind-up anticipation before launching jump
    if (this.aiState === 'prepare_card_launch') {
      this.state = 'crouch';
      this.targetScaleY = 0.68;
      this.targetScaleX = 1.34;
      this.targetTilt = 0;

      if (this.aiTimer >= 0.22) {
        this.executeJumpToCard(this.targetCardId);
      } else if (this.aiTimer > 1.2) {
        this.aiState = 'floor_idle';
        this.state = 'standing';
      }
      return;
    }

    // 3. Floor Idle & Varied Ground Life
    if (this.aiState === 'floor_idle') {
      // Safety check: ensure character never hovers or levitates in midair!
      if (!this.attachedObstacle && !this.attachedStick && !this.currentLadder) {
        const cards = window.__app?.gallery?.getCardScreenRects() || [];
        const cardUnderneath = cards.find(c => {
          if (!c.cardRef?.isVisible || !c.cardRef?.group?.visible) return false;
          const minLedgeX = Math.min(c.topLedge.x1, c.topLedge.x2) - 15;
          const maxLedgeX = Math.max(c.topLedge.x1, c.topLedge.x2) + 15;
          return this.x >= minLedgeX && this.x <= maxLedgeX && (this.baseY >= c.top - 15 && this.baseY <= c.top + 50);
        });

        if (cardUnderneath) {
          // Snap directly to card ledge and explore card!
          const clampedRelX = Math.max(-cardUnderneath.hw + 8, Math.min(cardUnderneath.hw - 8, cardUnderneath.screenXToLocalX(this.x)));
          const pt = cardUnderneath.getLedgePoint(clampedRelX);
          this.attachedObstacle = {
            id: `card-${cardUnderneath.id}-top`,
            cardId: cardUnderneath.id,
            type: 'card',
            relX: clampedRelX,
            cardRef: cardUnderneath.cardRef
          };
          this.baseY = pt.y;
          this.x = pt.x;
          this.y = 0;
          this.aiState = 'on_card';
          this.cardExploreSubstate = 'survey';
          this.cardExploreTimer = 0;
          return;
        } else {
          const scrollCurr = window.__app?.gallery?.scroll?.current || 0;
          const targetBackgroundY = (this.pageBaseY !== undefined && this.pageBaseY !== null)
            ? (this.pageBaseY - scrollCurr)
            : this.floorY;
          if (Math.abs(this.baseY - targetBackgroundY) > 2) {
            // Snap cleanly to solid floor level in page space
            this.baseY = targetBackgroundY;
            this.y = 0;
          }
        }
      }

      // Inactivity Sleep: ONLY sleep if user has been inactive for > 5 min (300s)
      if (this.userIdleTime >= this.userIdleThreshold) {
        if (this.state !== 'lying') {
          this.currentAnim = 'lying';
          this.state = 'lying';
          this.spawnLandingDust();
        }
        this.targetTilt = 0;
        if (Math.random() < 0.015 && this.sleepBubbles.length < 3) {
          this.sleepBubbles.push({
            x: this.x + this.facing * 12,
            y: this.baseY - 14,
            vx: this.facing * 0.3 + (Math.random() - 0.5) * 0.4,
            vy: -0.6 - Math.random() * 0.4,
            alpha: 0.45,
            scale: 0.6
          });
        }
        return;
      }

      // If user was active but state is lying, wake up immediately
      if (this.state === 'lying') {
        this.wakeUp();
        return;
      }

      // Handle active micro-states on floor
      if (this.floorSubstate === 'sitting_edge' ||
          this.floorSubstate === 'inspecting' ||
          this.floorSubstate === 'waving' ||
          this.floorSubstate === 'stretching' ||
          this.floorSubstate === 'balancing' ||
          this.floorSubstate === 'looking_up') {

        this.state = (this.floorSubstate === 'looking_up') ? 'standing' : this.floorSubstate;
        this.vx = 0;

        if (this.floorSubstate === 'looking_up') {
          this.targetTilt = -this.facing * 0.22;
        } else if (this.floorSubstate === 'inspecting') {
          this.targetTilt = this.facing * 0.18;
        } else if (this.floorSubstate === 'stretching') {
          this.targetScaleY = 1.15;
          this.targetScaleX = 0.90;
          this.targetTilt = -this.facing * 0.08;
        } else if (this.floorSubstate === 'balancing') {
          this.targetTilt = Math.sin(performance.now() * 0.003) * 0.09;
        } else {
          this.targetTilt = 0;
        }

        this.idleBlinkTimer += dt;
        if (this.idleBlinkTimer > 2.5) {
          this.isBlinking = true;
          if (this.idleBlinkTimer > 2.68) {
            this.isBlinking = false;
            this.idleBlinkTimer = 0;
          }
        }

        this.floorActionTimer = (this.floorActionTimer || 0) + dt;
        if (this.floorActionTimer >= (this.floorActionDuration || 1.8)) {
          const wasLookingUp = (this.floorSubstate === 'looking_up');
          this.floorSubstate = 'survey';
          this.floorActionTimer = 0;
          this.state = 'standing';
          this.targetTilt = 0;
          this.targetScaleX = 1.0;
          this.targetScaleY = 1.0;

          if (wasLookingUp) {
            // Inspired by looking up at the cards above: leap up to the nearest reachable card!
            const reachableCards = this.findReachableCardsFromFloor();
            if (reachableCards.length > 0) {
              reachableCards.sort((a, b) => Math.hypot(a.x - this.x, a.top - this.baseY) - Math.hypot(b.x - this.x, b.top - this.baseY));
              this.initiateSeekCard(reachableCards[0]);
              return;
            }
          }
        }
        return;
      }

      if (this.floorSubstate === 'running_free') {
        this.floorRunTimer += dt;
        this.floorHopTimer = (this.floorHopTimer || 0) + dt;

        // Joyful little hop while running on the floor
        if (this.floorHopTimer > 1.6 && Math.random() < 0.08 && this.y === 0 && this.state === 'running') {
          this.vy = -5.2;
          this.y = -1;
          this.targetScaleY = 1.28;
          this.targetScaleX = 0.80;
          this.floorHopTimer = 0;
          sounds?.playHop();
        }

        if (this.floorRunTargetX === null || this.floorRunTargetX === undefined) {
          this.floorRunTargetX = this.facing > 0 ? (this.width - 85) : 85;
        }

        const dist = this.floorRunTargetX - this.x;
        const nearLeftEdge = this.x <= 80 && this.facing < 0;
        const nearRightEdge = this.x >= this.width - 80 && this.facing > 0;

        if (Math.abs(dist) < 20 || nearLeftEdge || nearRightEdge) {
          // Reached destination or near boundary
          if (this.floorRunTimer < this.floorRunDuration) {
            // Still have run time: turn around and keep running briskly!
            this.facing = nearLeftEdge ? 1 : (nearRightEdge ? -1 : (dist > 0 ? -1 : 1));
            this.state = 'running';
            this.currentSpeed = 2.1 + Math.random() * 0.5;
            this.targetTilt = this.facing * 0.12;
            const margin = 85;
            this.floorRunTargetX = this.facing > 0
              ? (this.width - margin - Math.random() * 120)
              : (margin + Math.random() * 120);
            this.spawnFootstepDust();
          } else {
            // Finished running session across the background floor
            this.floorSubstate = 'survey';
            this.state = 'standing';
            this.targetTilt = 0;
            this.targetScaleX = 1.0;
            this.targetScaleY = 1.0;
            this.aiTimer = 0;
            this.aiDecisionInterval = 1.8 + Math.random() * 1.6;
          }
        } else if (this.floorRunTimer >= this.floorRunDuration) {
          // Finished running session, stop smoothly and survey surroundings
          this.floorSubstate = 'survey';
          this.state = 'standing';
          this.targetTilt = 0;
          this.targetScaleX = 1.0;
          this.targetScaleY = 1.0;
          this.aiTimer = 0;
          this.aiDecisionInterval = 1.8 + Math.random() * 1.6;
        } else {
          // Spontaneous leap opportunity: if running under a reachable card (only if not scrolling and on screen!)
          const gallery = window.__app?.gallery;
          const isScrollActive = this.isScrolling || Math.abs(gallery?.scroll?.velocity || 0) > 0.04 || Math.abs((gallery?.scroll?.target || 0) - (gallery?.scroll?.current || 0)) > 1.5;
          const isCharOffscreen = this.baseY < -50 || this.baseY > this.height + 50;
          if (!isScrollActive && !isCharOffscreen && this.floorRunTimer > 0.8 && Math.random() < 0.035) {
            const cards = gallery?.getCardScreenRects() || [];
            const cardDirectlyAbove = cards.find(c => {
              if (!c.cardRef?.isVisible || c.bottom < 40 || c.top > this.height - 20) return false;
              const dy = this.baseY - c.top;
              return dy > 20 && dy <= 600 && (this.x >= c.left + 35 && this.x <= c.right - 35);
            });
            if (cardDirectlyAbove) {
              this.initiateSeekCard(cardDirectlyAbove);
              return;
            }
          }

          this.state = 'running';
          this.facing = dist > 0 ? 1 : -1;
          this.x += this.facing * this.currentSpeed;
          this.x = Math.max(75, Math.min(this.width - 75, this.x));
          this.targetTilt = this.facing * 0.12;

          const stepFreq = this.currentSpeed * 0.055;
          this.runCycle += stepFreq;
          const currentStep = Math.sin(this.runCycle);
          if (currentStep * this.lastStepPhase < 0) {
            this.spawnFootstepDust();
          }
          this.lastStepPhase = currentStep;
        }
        return;
      }

      if (this.floorSubstate === 'stroll') {
        if (this.floorStrollTargetX === undefined || this.floorStrollTargetX === null) {
          this.floorSubstate = 'survey';
          this.state = 'standing';
          return;
        }

        const dist = this.floorStrollTargetX - this.x;
        if (Math.abs(dist) < 10) {
          this.floorSubstate = 'survey';
          this.state = 'standing';
          this.targetTilt = 0;
          this.aiTimer = 0;
          this.aiDecisionInterval = 3.5 + Math.random() * 3.0;
        } else {
          this.facing = dist > 0 ? 1 : -1;
          this.state = 'running';
          this.currentSpeed = 1.3;
          this.x += this.facing * this.currentSpeed;
          this.x = Math.max(75, Math.min(this.width - 75, this.x));
          this.targetTilt = this.facing * 0.10;

          const stepFreq = this.currentSpeed * 0.055;
          this.runCycle += stepFreq;
          const currentStep = Math.sin(this.runCycle);
          if (currentStep * this.lastStepPhase < 0) {
            this.spawnFootstepDust();
          }
          this.lastStepPhase = currentStep;
        }
        return;
      }

      this.state = 'standing';
      this.targetTilt = 0;
      this.targetScaleX = 1.0;
      this.targetScaleY = 1.0;

      // Blinking & looking around
      this.idleBlinkTimer += dt;
      if (this.idleBlinkTimer > 2.5) {
        this.isBlinking = true;
        if (this.idleBlinkTimer > 2.68) {
          this.isBlinking = false;
          this.idleBlinkTimer = 0;
          if (Math.random() < 0.35) this.facing *= -1;
        }
      }

      // Diverse floor life decision timer:
      if (this.aiTimer >= this.aiDecisionInterval) {
        this.aiTimer = 0;
        this.aiDecisionInterval = 2.4 + Math.random() * 2.0;

        // If user is actively scrolling, remain peacefully where he was
        if (this.isScrolling) return;

        const reachableCards = this.findReachableCardsFromFloor();
        const roll = Math.random();

        // 18% chance: Leap up to catch a floating stick and swing on it!
        if (roll < 0.18) {
          if (this.jumpToStick()) return;
        }

        // 20% chance: Spontaneously pull ladder out of pocket to climb up to a card or view perch!
        if (roll < 0.38) {
          const ladderTarget = this.findBestLadderTarget(this.x + this.facing * 18, this.baseY);
          if (ladderTarget) {
            this.buildLadder(ladderTarget.topX, ladderTarget.topY, ladderTarget.obstacle);
            return;
          }
        }

        // 30% chance: Seek a card and leap up onto it!
        if (reachableCards.length > 0 && roll < 0.68) {
          reachableCards.sort((a, b) => Math.hypot(a.x - this.x, a.top - this.baseY) - Math.hypot(b.x - this.x, b.top - this.baseY));
          this.initiateSeekCard(reachableCards[0]);
          return;
        }

        // 20% chance: Run freely across the background floor!
        if (roll < 0.88) {
          this.startFloorRunning();
          return;
        } else if (roll < 0.94) {
          // Look up in wonder at the floating cards above
          this.floorSubstate = 'looking_up';
          this.floorActionDuration = 2.2 + Math.random() * 1.0;
          this.floorActionTimer = 0;
        } else if (roll < 0.97) {
          // Wave to the user
          this.floorSubstate = 'waving';
          this.floorActionDuration = 2.0 + Math.random() * 0.8;
          this.floorActionTimer = 0;
        } else {
          // Stretch arms high or balance
          this.floorSubstate = Math.random() < 0.5 ? 'stretching' : 'balancing';
          this.floorActionDuration = 2.0 + Math.random() * 0.8;
          this.floorActionTimer = 0;
        }
      }
      return;
    }
  }

  updateCardAI(dt, minBounds, maxBounds) {
    const cardRects = window.__app?.gallery?.getCardScreenRects() || [];
    const currentCard = cardRects.find(c => c.id === this.attachedObstacle.cardId);
    if (!currentCard) {
      this.detachFromObstacle(1.5);
      return;
    }

    // If card is off-screen or user is actively scrolling, remain calmly in place on card ledge
    const isCardOffscreen = currentCard.bottom < 15 || currentCard.top > this.height - 15;
    if (isCardOffscreen || this.isScrolling) {
      this.state = 'standing';
      this.targetTilt = 0;
      this.targetScaleX = 1.0;
      this.targetScaleY = 1.0;
      return;
    }

    // 1. If preparing to leap across to an adjacent card
    if (this.aiState === 'prepare_card_to_card_leap') {
      this.state = 'crouch';
      this.targetScaleY = 0.68;
      this.targetScaleX = 1.34;
      this.targetTilt = 0;

      this.aiTimer += dt;
      if (this.aiTimer >= 0.22) {
        this.executeCardToCardJump(this.targetCardId);
      } else if (this.aiTimer > 1.2) {
        this.aiState = 'on_card';
        this.cardExploreSubstate = 'survey';
        this.state = 'standing';
      }
      return;
    }

    // 2. If navigating to the card's edge before leaping across
    if (this.aiState === 'navigating_to_edge') {
      if (this.navTargetRelX === undefined || this.navTargetRelX === null) {
        this.navTargetRelX = (this.facing > 0) ? (currentCard.hw - 28) : (-currentCard.hw + 28);
      }

      const currentRelX = this.attachedObstacle.relX ?? 0;
      const dist = this.navTargetRelX - currentRelX;
      if (Math.abs(dist) < 14) {
        // Arrived at card edge! Smooth stop
        this.vx = 0;
        this.aiState = 'prepare_card_to_card_leap';
        this.aiTimer = 0;
        this.state = 'crouch';
        this.targetScaleY = 0.68;
        this.targetScaleX = 1.34;
        this.targetTilt = 0;

        const targetCard = cardRects.find(c => c.id === this.targetCardId);
        if (targetCard) {
          this.facing = targetCard.x > this.x ? 1 : -1;
        }
      } else {
        this.facing = dist > 0 ? 1 : -1;
        this.state = 'running';
        this.currentSpeed = Math.min(2.4, Math.max(1.4, Math.abs(dist) * 0.03 + 1.2));
        this.attachedObstacle.relX = Math.max(-currentCard.hw + 24, Math.min(currentCard.hw - 24, currentRelX + this.facing * this.currentSpeed));
        const surfacePoint = currentCard.getLedgePoint(this.attachedObstacle.relX);
        this.x = surfacePoint.x;
        this.baseY = surfacePoint.y;
        this.targetTilt = this.facing * 0.11;

        const stepFreq = this.currentSpeed * 0.052;
        this.runCycle += stepFreq;
        const currentStep = Math.sin(this.runCycle);
        if (currentStep * this.lastStepPhase < 0) {
          this.spawnFootstepDust();
        }
        this.lastStepPhase = currentStep;
      }
      return;
    }

    // 3. Exploring & Living on the Card
    // Inactivity Sleep on card: ONLY sleep if user inactive for > 5 min (300s)
    if (this.userIdleTime >= this.userIdleThreshold) {
      if (this.cardExploreSubstate !== 'rest' && this.state !== 'crouch' && this.state !== 'in_jump') {
        this.cardExploreSubstate = 'rest';
        this.cardExploreTimer = 0;
        this.currentAnim = 'lying';
        this.state = 'lying';
        this.spawnLandingDust();
      }
    } else if (this.cardExploreSubstate === 'rest' || this.state === 'lying') {
      // User is active, wake up immediately!
      this.wakeUp();
      return;
    }

    this.cardExploreTimer += dt;

    if (this.cardExploreSubstate === 'sitting_edge' ||
        this.cardExploreSubstate === 'inspecting' ||
        this.cardExploreSubstate === 'waving' ||
        this.cardExploreSubstate === 'stretching' ||
        this.cardExploreSubstate === 'balancing') {

      this.state = this.cardExploreSubstate;
      this.vx = 0;

      if (this.cardExploreSubstate === 'inspecting') {
        this.targetTilt = this.facing * 0.18;
      } else if (this.cardExploreSubstate === 'stretching') {
        this.targetScaleY = 1.15;
        this.targetScaleX = 0.90;
        this.targetTilt = -this.facing * 0.08;
      } else if (this.cardExploreSubstate === 'balancing') {
        this.targetTilt = Math.sin(performance.now() * 0.003) * 0.09;
        this.targetScaleX = 1.0;
        this.targetScaleY = 1.0;
      } else {
        this.targetTilt = 0;
        this.targetScaleX = 1.0;
        this.targetScaleY = 1.0;
      }

      this.idleBlinkTimer += dt;
      if (this.idleBlinkTimer > 2.2) {
        this.isBlinking = true;
        if (this.idleBlinkTimer > 2.38) {
          this.isBlinking = false;
          this.idleBlinkTimer = 0;
        }
      }

      if (this.cardExploreTimer >= (this.microActionDuration || 2.4)) {
        this.cardExploreTimer = 0;
        this.cardExploreSubstate = 'survey';
        this.state = 'standing';
        this.targetTilt = 0;
        this.targetScaleX = 1.0;
        this.targetScaleY = 1.0;
      }
      return;
    }

    if (this.cardExploreSubstate === 'survey') {
      this.state = 'standing';
      this.targetTilt = 0;
      this.targetScaleX = 1.0;
      this.targetScaleY = 1.0;

      this.idleBlinkTimer += dt;
      if (this.idleBlinkTimer > 2.0) {
        this.isBlinking = true;
        if (this.idleBlinkTimer > 2.18) {
          this.isBlinking = false;
          this.idleBlinkTimer = 0;
          if (Math.random() < 0.35) this.facing *= -1;
        }
      }

      // Calm decision: 2.4s - 4.2s
      if (this.cardExploreTimer >= 2.4 + Math.random() * 1.8) {
        this.cardExploreTimer = 0;
        this.chooseNextCardAction(currentCard, cardRects);
      }
    } else if (this.cardExploreSubstate === 'patrol') {
      if (this.patrolTargetRelX === undefined || this.patrolTargetRelX === null) {
        this.chooseNextCardAction(currentCard, cardRects);
        return;
      }

      const currentRelX = this.attachedObstacle.relX ?? 0;
      const dist = this.patrolTargetRelX - currentRelX;
      if (Math.abs(dist) < 8) {
        this.attachedObstacle.relX = this.patrolTargetRelX;
        const surfacePoint = currentCard.getLedgePoint(this.attachedObstacle.relX);
        this.x = surfacePoint.x;
        this.baseY = surfacePoint.y;
        this.cardExploreSubstate = 'survey';
        this.cardExploreTimer = 0;
        this.state = 'standing';
        this.targetTilt = 0;
      } else {
        this.facing = dist > 0 ? 1 : -1;
        this.state = 'running';
        this.currentSpeed = 1.4;
        this.attachedObstacle.relX = Math.max(-currentCard.hw + 24, Math.min(currentCard.hw - 24, currentRelX + this.facing * this.currentSpeed));
        const surfacePoint = currentCard.getLedgePoint(this.attachedObstacle.relX);
        this.x = surfacePoint.x;
        this.baseY = surfacePoint.y;
        this.targetTilt = this.facing * 0.10;

        const stepFreq = this.currentSpeed * 0.052;
        this.runCycle += stepFreq;
        const currentStep = Math.sin(this.runCycle);
        if (currentStep * this.lastStepPhase < 0) {
          this.spawnFootstepDust();
        }
        this.lastStepPhase = currentStep;
      }
    } else if (this.cardExploreSubstate === 'rest') {
      this.state = 'lying';
      this.targetTilt = 0;

      if (Math.random() < 0.02 && this.sleepBubbles.length < 3) {
        this.sleepBubbles.push({
          x: this.x + this.facing * 12,
          y: this.baseY - 14,
          vx: this.facing * 0.3 + (Math.random() - 0.5) * 0.4,
          vy: -0.6 - Math.random() * 0.4,
          alpha: 0.45,
          scale: 0.6
        });
      }
    }
  }

  chooseNextCardAction(currentCard, allCards) {
    if (this.isScrolling) return;

    // Rare chance (4%) to jump up to filter pill if card is high enough
    const pillColl = this.getFilterPillCollision();
    if (pillColl && currentCard.top < 620 && Math.random() < 0.04) {
      this.executeJumpToPill();
      return;
    }

    // Rare chance (4%) to jump up to title letters if card is high enough
    const titleColl = this.getTitleLettersCollision();
    if (titleColl && currentCard.top < 520 && Math.random() < 0.04) {
      const nearestLetter = titleColl.letters.reduce((closest, l) => {
        const lx = (l.left + l.right) / 2;
        return Math.abs(lx - this.x) < Math.abs((closest.left + closest.right) / 2 - this.x) ? l : closest;
      }, titleColl.letters[0]);
      this.executeJumpToLetters(nearestLetter.index);
      return;
    }

    // 16% chance: Leap off card ledge to catch a floating stick and swing!
    if (Math.random() < 0.16) {
      if (this.jumpToStick()) return;
    }

    // 20% chance: Take pocket ladder out and climb up to an overhead higher card or observation perch!
    const overheadTarget = this.findBestLadderTarget(this.x, this.baseY);
    if (overheadTarget && Math.random() < 0.20) {
      this.buildLadder(overheadTarget.topX, overheadTarget.topY, overheadTarget.obstacle);
      return;
    }

    const neighbors = this.findAdjacentCards(currentCard, allCards);

    this.cardsVisitedInSequence = (this.cardsVisitedInSequence || 0) + 1;

    // Check if there is a card directly below us in this column
    const cardBelow = allCards.find(c => {
      if (c.id === currentCard.id) return false;
      if (!c.cardRef?.isVisible || !c.cardRef?.group?.visible) return false;
      if (c.top <= currentCard.top + 60) return false;
      if (c.top > this.height + 80) return false;
      const overlapX = Math.min(c.right, currentCard.right) - Math.max(c.left, currentCard.left);
      return overlapX > 60;
    });

    // If there is a card directly below us, high chance to leap down to it!
    if (cardBelow && Math.random() < 0.45) {
      this.initiateCardToCardJump(currentCard, cardBelow);
      return;
    }

    // 45% chance: Leap across to an adjacent neighbor card!
    if (neighbors.length > 0 && Math.random() < 0.45) {
      const targetNeighbor = neighbors[Math.floor(Math.random() * neighbors.length)];
      this.initiateCardToCardJump(currentCard, targetNeighbor);
      return;
    }

    // Leap down to the background floor ONLY if no card is blocking below
    if (!cardBelow && (this.cardsVisitedInSequence >= 2 || Math.random() < 0.35)) {
      this.cardsVisitedInSequence = 0;
      this.executeJumpFromCardToFloor();
      return;
    }

    // 15% chance: Run across this card ledge to the opposite edge
    if (Math.random() < 0.55) {
      const currentRelX = this.attachedObstacle.relX ?? 0;
      const targetSideRelX = (currentRelX > 0) ? (-currentCard.hw + 35) : (currentCard.hw - 35);
      this.patrolTargetRelX = Math.max(-currentCard.hw + 26, Math.min(currentCard.hw - 26, targetSideRelX));
      this.cardExploreSubstate = 'patrol';
      this.cardExploreTimer = 0;
      return;
    }

    // 10% chance: Quick charming activity (1.2s - 1.8s) before next jump!
    const roll = Math.random();
    if (roll < 0.35) {
      // 1. Sitting on edge with swinging legs
      this.cardExploreSubstate = 'sitting_edge';
      this.state = 'sitting_edge';
      this.microActionDuration = 1.3 + Math.random() * 0.6;
      this.cardExploreTimer = 0;
    } else if (roll < 0.70) {
      // 2. Waving happily to user
      this.cardExploreSubstate = 'waving';
      this.state = 'waving';
      this.microActionDuration = 1.2 + Math.random() * 0.5;
      this.cardExploreTimer = 0;
    } else {
      // 3. Stretching arms high into the air
      this.cardExploreSubstate = 'stretching';
      this.state = 'stretching';
      this.microActionDuration = 1.2 + Math.random() * 0.5;
      this.cardExploreTimer = 0;
    }
  }

  findReachableCardsFromFloor() {
    // If page is scrolling or character is offscreen, do not seek cards!
    const gallery = window.__app?.gallery;
    const scrollVel = Math.abs(gallery?.scroll?.velocity || 0);
    const scrollTargetDiff = Math.abs((gallery?.scroll?.target || 0) - (gallery?.scroll?.current || 0));
    if (this.isScrolling || scrollVel > 0.04 || scrollTargetDiff > 1.5) return [];

    const isOffscreen = this.baseY < -50 || this.baseY > this.height + 50 || this.x < -40 || this.x > this.width + 40;
    if (isOffscreen) return [];

    const cards = gallery?.getCardScreenRects() || [];
    return cards.filter(card => {
      if (!card.cardRef?.isVisible) return false;
      if (card.right < 50 || card.left > this.width - 50) return false;
      if (card.bottom < 40 || card.top > this.height - 20) return false;

      const dy = this.baseY - card.top;
      return dy > 20 && dy <= 650;
    });
  }

  initiateSeekCard(card) {
    this.targetCardId = card.id;
    this.intendedTargetCardId = card.id;
    this.aiTimer = 0;
    this.stuckTimer = 0;
    this.isSkidding = false;

    // Check if character is already positioned under or right near the card:
    const alreadyUnderCard = (this.x >= card.left - 25 && this.x <= card.right + 25);
    if (alreadyUnderCard) {
      this.navTargetX = this.x;
      this.vx = 0;
      this.aiState = 'prepare_card_launch';
      this.state = 'crouch';
      this.targetScaleY = 0.68;
      this.targetScaleX = 1.34;
      this.targetTilt = 0;
      this.facing = card.x > this.x ? 1 : -1;
      return;
    }

    this.aiState = 'navigating_to_card';
    this.currentAnim = 'running';

    const margin = 45;
    if (this.x < card.left) {
      this.navTargetX = Math.max(40, card.left + margin);
    } else if (this.x > card.right) {
      this.navTargetX = Math.min(this.width - 40, card.right - margin);
    } else {
      this.navTargetX = this.x;
    }
  }

  executeJumpToCard(cardId) {
    const cards = window.__app?.gallery?.getCardScreenRects() || [];
    const targetCard = cards.find(c => c.id === cardId);
    if (!targetCard) {
      this.aiState = 'floor_idle';
      this.restoreCurrentAnimState();
      return;
    }

    this.intendedTargetCardId = cardId;
    const targetRelX = targetCard.screenXToLocalX(this.x);
    const clampedRelX = Math.max(-targetCard.hw + 35, Math.min(targetCard.hw - 35, targetRelX));
    const targetPoint = targetCard.getLedgePoint(clampedRelX);
    const targetX = targetPoint.x;
    const targetY = targetPoint.y;

    const currentFeetY = this.baseY + this.y;
    const extraArc = this.jumpArcBonusExtra || 0;
    const heightDiff = Math.abs(targetY - currentFeetY);
    const arcBonus = Math.max(50, Math.min(130, heightDiff * 0.12 + 45 + extraArc));
    const jump = this.calculateBallisticJump(this.x, currentFeetY, targetX, targetY, arcBonus);

    this.setFloorCoordinateSpace();

    this.state = 'in_jump';
    this.aiState = 'in_smart_jump';
    this.smartJumpData = {
      targetCardId: cardId,
      targetX,
      targetY,
      targetRelX: clampedRelX,
      landingLedge: 'top'
    };

    this.vx = jump.vx;
    this.vy = jump.vy;
    this.targetScaleY = 1.38;
    this.targetScaleX = 0.76;
    this.facing = jump.vx >= 0 ? 1 : -1;
    this.spawnLandingDust();
    sounds?.playHop();
    this.updateCanvasZIndex();
  }

  findAdjacentCards(currentCard, allCards) {
    return allCards.filter(other => {
      if (other.id === currentCard.id) return false;
      if (!other.cardRef?.isVisible) return false;
      if (other.bottom < 40 || other.top > this.height - 30) return false;
      if (other.right < 40 || other.left > this.width - 40) return false;

      const dx = Math.abs(other.x - currentCard.x);
      const dy = Math.abs(other.top - currentCard.top);

      return dx < 750 && dy < 480;
    });
  }

  initiateCardToCardJump(currentCard, targetCard) {
    this.targetCardId = targetCard.id;
    this.intendedTargetCardId = targetCard.id;
    this.aiState = 'navigating_to_edge';
    this.aiTimer = 0;
    this.stuckTimer = 0;

    if (Math.abs(targetCard.x - currentCard.x) < 50) {
      this.navTargetRelX = Math.max(-currentCard.hw + 35, Math.min(currentCard.hw - 35, this.attachedObstacle?.relX ?? 0));
    } else if (targetCard.x > currentCard.x) {
      this.navTargetRelX = currentCard.hw - 28;
    } else {
      this.navTargetRelX = -currentCard.hw + 28;
    }
  }

  executeCardToCardJump(targetCardId) {
    const cards = window.__app?.gallery?.getCardScreenRects() || [];
    const targetCard = cards.find(c => c.id === targetCardId);
    if (!targetCard) {
      this.aiState = 'on_card';
      this.cardExploreSubstate = 'survey';
      return;
    }

    this.intendedTargetCardId = targetCardId;
    const targetRelX = (this.x < targetCard.x) ? (-targetCard.hw + 45) : (targetCard.hw - 45);
    const targetPoint = targetCard.getLedgePoint(targetRelX);
    const landingX = targetPoint.x;
    const landingY = targetPoint.y;

    const currentFeetY = this.baseY + this.y;
    const extraArc = this.jumpArcBonusExtra || 0;
    const dist = Math.abs(landingX - this.x);
    const arcBonus = Math.max(50, Math.min(130, dist * 0.14 + 40 + extraArc));
    const jump = this.calculateBallisticJump(this.x, currentFeetY, landingX, landingY, arcBonus);

    this.setFloorCoordinateSpace();

    this.state = 'in_jump';
    this.aiState = 'in_smart_jump';
    this.smartJumpData = {
      targetCardId,
      targetX: landingX,
      targetY: landingY,
      targetRelX,
      landingLedge: 'top'
    };

    this.vx = jump.vx;
    this.vy = jump.vy;
    this.targetScaleY = 1.36;
    this.targetScaleX = 0.76;
    this.facing = jump.vx >= 0 ? 1 : -1;

    if (Math.abs(jump.vx) > 3.2) {
      this.targetRotation = this.rotation + this.facing * Math.PI * 2;
    }

    this.spawnLandingDust();
    sounds?.playHop();
    this.updateCanvasZIndex();
  }

  updateLettersAI(dt, minBounds, maxBounds) {
    const titleColl = this.getTitleLettersCollision();
    if (!titleColl || !titleColl.letters.length) {
      this.detachFromObstacle(2);
      return;
    }

    // Inactivity Sleep on letters: ONLY sleep if user inactive for > 5 min (300s)
    if (this.userIdleTime >= this.userIdleThreshold) {
      if (this.lettersExploreSubstate !== 'rest' && this.state !== 'crouch' && this.state !== 'in_jump') {
        this.lettersExploreSubstate = 'rest';
        this.lettersExploreTimer = 0;
        this.currentAnim = 'lying';
        this.state = 'lying';
        this.spawnLandingDust();
      }
    } else if (this.lettersExploreSubstate === 'rest' || this.state === 'lying') {
      // User is active, wake up immediately!
      this.wakeUp();
      return;
    }

    this.lettersExploreTimer += dt;

    if (this.lettersExploreSubstate === 'sitting_edge' ||
        this.lettersExploreSubstate === 'inspecting' ||
        this.lettersExploreSubstate === 'waving' ||
        this.lettersExploreSubstate === 'stretching' ||
        this.lettersExploreSubstate === 'balancing') {

      this.state = this.lettersExploreSubstate;
      this.vx = 0;

      if (this.lettersExploreSubstate === 'inspecting') {
        this.targetTilt = this.facing * 0.18;
      } else if (this.lettersExploreSubstate === 'stretching') {
        this.targetScaleY = 1.15;
        this.targetScaleX = 0.90;
        this.targetTilt = -this.facing * 0.08;
      } else if (this.lettersExploreSubstate === 'balancing') {
        this.targetTilt = Math.sin(performance.now() * 0.003) * 0.09;
        this.targetScaleX = 1.0;
        this.targetScaleY = 1.0;
      } else {
        this.targetTilt = 0;
        this.targetScaleX = 1.0;
        this.targetScaleY = 1.0;
      }

      this.idleBlinkTimer += dt;
      if (this.idleBlinkTimer > 2.2) {
        this.isBlinking = true;
        if (this.idleBlinkTimer > 2.38) {
          this.isBlinking = false;
          this.idleBlinkTimer = 0;
        }
      }

      if (this.lettersExploreTimer >= (this.microActionDuration || 4.0)) {
        this.lettersExploreTimer = 0;
        this.lettersExploreSubstate = 'survey';
        this.state = 'standing';
        this.targetTilt = 0;
        this.targetScaleX = 1.0;
        this.targetScaleY = 1.0;
      }
      return;
    }

    if (this.lettersExploreSubstate === 'survey') {
      this.state = 'standing';
      this.targetTilt = 0;
      this.targetScaleX = 1.0;
      this.targetScaleY = 1.0;

      this.idleBlinkTimer += dt;
      if (this.idleBlinkTimer > 2.2) {
        this.isBlinking = true;
        if (this.idleBlinkTimer > 2.38) {
          this.isBlinking = false;
          this.idleBlinkTimer = 0;
          if (Math.random() < 0.35) this.facing *= -1;
        }
      }

      // Calm decision: 2.4s - 4.2s
      if (this.lettersExploreTimer >= 2.4 + Math.random() * 1.8) {
        this.lettersExploreTimer = 0;
        this.chooseNextLettersAction(titleColl);
      }
    } else if (this.lettersExploreSubstate === 'patrol') {
      if (this.lettersPatrolTargetX === undefined || this.lettersPatrolTargetX === null) {
        this.chooseNextLettersAction(titleColl);
        return;
      }

      const dist = this.lettersPatrolTargetX - this.x;
      if (Math.abs(dist) < 5) {
        this.x = this.lettersPatrolTargetX;
        const targetLedgeY = titleColl.getLedgeYAtScreenX(this.x);
        this.baseY = targetLedgeY;
        this.lettersExploreSubstate = 'survey';
        this.lettersExploreTimer = 0;
        this.state = 'standing';
        this.targetTilt = 0;
      } else {
        this.facing = dist > 0 ? 1 : -1;
        this.state = 'running';
        this.currentSpeed = 1.4;
        this.x += this.facing * this.currentSpeed;
        this.x = Math.max(titleColl.left + 8, Math.min(titleColl.right - 8, this.x));
        const targetLedgeY = titleColl.getLedgeYAtScreenX(this.x);
        if (Math.abs(targetLedgeY - this.baseY) < 0.5) {
          this.baseY = targetLedgeY;
        } else {
          this.baseY += (targetLedgeY - this.baseY) * 0.45;
        }
        this.targetTilt = this.facing * 0.10;

        const stepFreq = this.currentSpeed * 0.052;
        this.runCycle += stepFreq;
        const currentStep = Math.sin(this.runCycle);
        if (currentStep * this.lastStepPhase < 0) {
          this.spawnFootstepDust();
        }
        this.lastStepPhase = currentStep;
      }
    } else if (this.lettersExploreSubstate === 'rest') {
      this.state = 'lying';
      this.targetTilt = 0;

      if (Math.random() < 0.02 && this.sleepBubbles.length < 3) {
        this.sleepBubbles.push({
          x: this.x + this.facing * 12,
          y: this.baseY - 14,
          vx: this.facing * 0.3 + (Math.random() - 0.5) * 0.4,
          vy: -0.6 - Math.random() * 0.4,
          alpha: 0.45,
          scale: 0.6
        });
      }
    }
  }

  chooseNextLettersAction(titleColl) {
    if (this.isScrolling) return;

    const cards = window.__app?.gallery?.getCardScreenRects() || [];
    const visibleCards = cards.filter(c => c.cardRef?.isVisible && c.top > 160 && c.top < this.height - 40);

    // 40% chance: Jump down onto a card if cards are visible below
    if (visibleCards.length > 0 && Math.random() < 0.40) {
      const targetCard = visibleCards.reduce((closest, c) => {
        return Math.abs(c.x - this.x) < Math.abs((closest.x - this.x)) ? c : closest;
      }, visibleCards[0]);
      this.executeJumpFromLettersToCard(targetCard.id);
      return;
    }

    // 30% chance: Leap down to the background floor and run freely!
    if (Math.random() < 0.35) {
      this.executeJumpFromLettersToFloor();
      return;
    }

    // 15% chance: Jump down onto filter pill
    const pillColl = this.getFilterPillCollision();
    if (pillColl && Math.random() < 0.25) {
      this.executeJumpFromLettersToPill();
      return;
    }

    // 10% chance: Patrol to another letter
    if (Math.random() < 0.60) {
      const randomLetter = titleColl.letters[Math.floor(Math.random() * titleColl.letters.length)];
      this.lettersPatrolTargetX = (randomLetter.left + randomLetter.right) / 2;
      this.lettersExploreSubstate = 'patrol';
      this.lettersExploreTimer = 0;
      return;
    }

    // 5% chance: Quick micro action
    const roll = Math.random();
    if (roll < 0.40) {
      this.lettersExploreSubstate = 'sitting_edge';
      this.state = 'sitting_edge';
      this.microActionDuration = 1.3 + Math.random() * 0.6;
      this.lettersExploreTimer = 0;
    } else if (roll < 0.70) {
      this.lettersExploreSubstate = 'waving';
      this.state = 'waving';
      this.microActionDuration = 1.2 + Math.random() * 0.5;
      this.lettersExploreTimer = 0;
    } else {
      this.lettersExploreSubstate = 'stretching';
      this.state = 'stretching';
      this.microActionDuration = 1.2 + Math.random() * 0.5;
      this.lettersExploreTimer = 0;
    }
  }

  executeJumpFromLettersToCard(cardId) {
    const cards = window.__app?.gallery?.getCardScreenRects() || [];
    const targetCard = (typeof cardId === 'number' && cardId < cards.length)
      ? cards[cardId]
      : cards.find(c => c.id === cardId);
    if (!targetCard) {
      this.lettersExploreSubstate = 'survey';
      return false;
    }

    // Aim toward center of the target card for a natural leap
    const targetRelX = 0;
    const targetPoint = targetCard.getLedgePoint(targetRelX);
    const targetX = targetPoint.x;
    const targetY = targetPoint.y;

    const currentFeetY = this.baseY + this.y;
    const arcBonus = 45;
    const jump = this.calculateBallisticJump(this.x, currentFeetY, targetX, targetY, arcBonus);

    this.setFloorCoordinateSpace();
    this.facing = targetX > this.x ? 1 : -1;
    this.state = 'in_jump';
    this.aiState = 'in_smart_jump';
    this.smartJumpData = {
      targetCardId: targetCard.id,
      targetX,
      targetY,
      targetRelX,
      landingLedge: 'top'
    };

    this.vx = jump.vx;
    this.vy = jump.vy;
    this.targetScaleY = 1.38;
    this.targetScaleX = 0.76;
    this.targetTilt = this.facing * 0.22;
    this.spawnLandingDust();
    sounds?.playHop();
    this.updateCanvasZIndex();
    return true;
  }

  executeJumpToLetters(letterIndex = 0) {
    const titleColl = this.getTitleLettersCollision();
    if (!titleColl || !titleColl.letters.length) return false;

    const letter = (letterIndex >= 0 && letterIndex < titleColl.letters.length)
      ? titleColl.letters[letterIndex]
      : titleColl.letters[Math.floor(Math.random() * titleColl.letters.length)];

    const targetX = (letter.left + letter.right) / 2;
    const targetY = letter.top;

    const currentFeetY = this.baseY + this.y;
    const heightDiff = Math.abs(targetY - currentFeetY);
    const arcBonus = Math.max(50, Math.min(140, heightDiff * 0.15 + 40));
    const jump = this.calculateBallisticJump(this.x, currentFeetY, targetX, targetY, arcBonus);

    this.setFloorCoordinateSpace();
    this.facing = targetX > this.x ? 1 : -1;
    this.state = 'in_jump';
    this.aiState = 'in_smart_jump';
    this.smartJumpData = {
      targetType: 'letters',
      targetX,
      targetY,
      letterIndex: letter.index
    };

    this.vx = jump.vx;
    this.vy = jump.vy;
    this.targetScaleY = 1.38;
    this.targetScaleX = 0.76;
    this.targetTilt = this.facing * 0.22;
    this.spawnLandingDust();
    sounds?.playHop();
    this.updateCanvasZIndex();
    return true;
  }

  executeJumpFromLettersToPill() {
    const pillColl = this.getFilterPillCollision();
    if (!pillColl) {
      this.lettersExploreSubstate = 'survey';
      return false;
    }

    // Target a spot on the flat top ledge of the filter pill
    const flatMinX = pillColl.left + pillColl.radius + 15;
    const flatMaxX = pillColl.right - pillColl.radius - 15;
    const targetX = Math.max(flatMinX, Math.min(flatMaxX, this.x + (Math.random() - 0.5) * 120));
    const targetY = pillColl.top;

    const currentFeetY = this.baseY + this.y;
    const arcBonus = 40;
    const jump = this.calculateBallisticJump(this.x, currentFeetY, targetX, targetY, arcBonus);

    this.setFloorCoordinateSpace();
    this.facing = targetX > this.x ? 1 : -1;
    this.state = 'in_jump';
    this.aiState = 'in_smart_jump';
    this.smartJumpData = {
      targetType: 'pill',
      targetX,
      targetY
    };

    this.vx = jump.vx;
    this.vy = jump.vy;
    this.targetScaleY = 1.38;
    this.targetScaleX = 0.76;
    this.targetTilt = this.facing * 0.22;
    this.spawnLandingDust();
    sounds?.playHop();
    this.updateCanvasZIndex();
    return true;
  }

  executeJumpToPill() {
    const pillColl = this.getFilterPillCollision();
    if (!pillColl) return false;

    // Pick a landing spot on the flat section
    const flatMinX = pillColl.left + pillColl.radius + 15;
    const flatMaxX = pillColl.right - pillColl.radius - 15;
    const targetX = Math.max(flatMinX, Math.min(flatMaxX, this.x + (Math.random() - 0.5) * 80));
    const targetY = pillColl.top;

    const currentFeetY = this.baseY + this.y;
    const heightDiff = Math.abs(targetY - currentFeetY);
    const arcBonus = Math.max(50, Math.min(130, heightDiff * 0.15 + 40));
    const jump = this.calculateBallisticJump(this.x, currentFeetY, targetX, targetY, arcBonus);

    this.setFloorCoordinateSpace();
    this.facing = targetX > this.x ? 1 : -1;
    this.state = 'in_jump';
    this.aiState = 'in_smart_jump';
    this.smartJumpData = {
      targetType: 'pill',
      targetX,
      targetY
    };

    this.vx = jump.vx;
    this.vy = jump.vy;
    this.targetScaleY = 1.38;
    this.targetScaleX = 0.76;
    this.targetTilt = this.facing * 0.22;
    this.spawnLandingDust();
    sounds?.playHop();
    this.updateCanvasZIndex();
    return true;
  }

  executeJumpFromPillToCard(cardId) {
    const cards = window.__app?.gallery?.getCardScreenRects() || [];
    const targetCard = (typeof cardId === 'number' && cardId < cards.length)
      ? cards[cardId]
      : cards.find(c => c.id === cardId);
    if (!targetCard) {
      this.pillExploreSubstate = 'survey';
      return false;
    }

    const targetRelX = (this.x < targetCard.x) ? (-targetCard.hw + 50) : (targetCard.hw - 50);
    const targetPoint = targetCard.getLedgePoint(targetRelX);
    const targetX = targetPoint.x;
    const targetY = targetPoint.y;

    const currentFeetY = this.baseY + this.y;
    const arcBonus = 45;
    const jump = this.calculateBallisticJump(this.x, currentFeetY, targetX, targetY, arcBonus);

    this.setFloorCoordinateSpace();
    this.facing = targetX > this.x ? 1 : -1;
    this.state = 'in_jump';
    this.aiState = 'in_smart_jump';
    this.smartJumpData = {
      targetCardId: targetCard.id,
      targetX,
      targetY,
      targetRelX,
      landingLedge: 'top'
    };

    this.vx = jump.vx;
    this.vy = jump.vy;
    this.targetScaleY = 1.38;
    this.targetScaleX = 0.76;
    this.targetTilt = this.facing * 0.22;
    this.spawnLandingDust();
    sounds?.playHop();
    this.updateCanvasZIndex();
    return true;
  }

  executeJumpFromCardToFloor(side = null) {
    const cards = window.__app?.gallery?.getCardScreenRects() || [];
    const currentCard = cards.find(c => c.id === this.attachedObstacle?.cardId);

    // If there is a card directly below, leap down to it instead of floating in the gap!
    if (currentCard) {
      const cardBelow = cards.find(c => {
        if (c.id === currentCard.id) return false;
        if (!c.cardRef?.isVisible || !c.cardRef?.group?.visible) return false;
        if (c.top <= currentCard.top + 60) return false;
        if (c.top > this.height + 80) return false;
        const overlapX = Math.min(c.right, currentCard.right) - Math.max(c.left, currentCard.left);
        return overlapX > 60;
      });
      if (cardBelow) {
        return this.initiateCardToCardJump(currentCard, cardBelow);
      }
    }

    let landingX;
    if (side === 'left' || (!side && this.x < (this.width / 2))) {
      landingX = currentCard ? Math.max(65, currentCard.left - 75 - Math.random() * 40) : Math.max(65, this.x - 140);
    } else {
      landingX = currentCard ? Math.min(this.width - 65, currentCard.right + 75 + Math.random() * 40) : Math.min(this.width - 65, this.x + 140);
    }
    landingX = Math.max(65, Math.min(this.width - 65, landingX));

    const landingY = this.floorY;
    const currentFeetY = this.baseY + this.y;
    const heightDiff = Math.abs(landingY - currentFeetY);
    const arcBonus = Math.max(30, Math.min(75, heightDiff * 0.08 + 25));
    const jump = this.calculateBallisticJump(this.x, currentFeetY, landingX, landingY, arcBonus);

    this.setFloorCoordinateSpace();
    this.facing = landingX > this.x ? 1 : -1;
    this.state = 'in_jump';
    this.aiState = 'in_smart_jump';
    this.smartJumpData = {
      targetType: 'floor',
      targetX: landingX,
      targetY: landingY
    };

    this.vx = jump.vx;
    this.vy = jump.vy;
    this.targetScaleY = 1.38;
    this.targetScaleX = 0.76;
    this.targetTilt = this.facing * 0.22;
    this.spawnLandingDust();
    sounds?.playHop();
    this.updateCanvasZIndex();
    return true;
  }

  executeJumpFromPillToFloor(side = null) {
    const landingX = (side === 'left' || (side === null && (this.x > this.width / 2 ? Math.random() < 0.6 : Math.random() < 0.4)))
      ? Math.max(70, this.x - 140 - Math.random() * 100)
      : Math.min(this.width - 70, this.x + 140 + Math.random() * 100);
    const landingY = this.floorY;
    const currentFeetY = this.baseY + this.y;
    const heightDiff = Math.abs(landingY - currentFeetY);
    const arcBonus = Math.max(35, Math.min(80, heightDiff * 0.08 + 30));
    const jump = this.calculateBallisticJump(this.x, currentFeetY, landingX, landingY, arcBonus);

    this.setFloorCoordinateSpace();
    this.facing = landingX > this.x ? 1 : -1;
    this.state = 'in_jump';
    this.aiState = 'in_smart_jump';
    this.smartJumpData = {
      targetType: 'floor',
      targetX: landingX,
      targetY: landingY
    };

    this.vx = jump.vx;
    this.vy = jump.vy;
    this.targetScaleY = 1.38;
    this.targetScaleX = 0.76;
    this.targetTilt = this.facing * 0.22;
    this.spawnLandingDust();
    sounds?.playHop();
    this.updateCanvasZIndex();
    return true;
  }

  executeJumpFromLettersToFloor(side = null) {
    const landingX = (side === 'left' || (side === null && (this.x > this.width / 2 ? Math.random() < 0.6 : Math.random() < 0.4)))
      ? Math.max(70, this.x - 140 - Math.random() * 100)
      : Math.min(this.width - 70, this.x + 140 + Math.random() * 100);
    const landingY = this.floorY;
    const currentFeetY = this.baseY + this.y;
    const heightDiff = Math.abs(landingY - currentFeetY);
    const arcBonus = Math.max(40, Math.min(90, heightDiff * 0.08 + 35));
    const jump = this.calculateBallisticJump(this.x, currentFeetY, landingX, landingY, arcBonus);

    this.setFloorCoordinateSpace();
    this.facing = landingX > this.x ? 1 : -1;
    this.state = 'in_jump';
    this.aiState = 'in_smart_jump';
    this.smartJumpData = {
      targetType: 'floor',
      targetX: landingX,
      targetY: landingY
    };

    this.vx = jump.vx;
    this.vy = jump.vy;
    this.targetScaleY = 1.38;
    this.targetScaleX = 0.76;
    this.targetTilt = this.facing * 0.22;
    this.spawnLandingDust();
    sounds?.playHop();
    this.updateCanvasZIndex();
    return true;
  }

  startFloorRunning(targetX = null) {
    this.aiState = 'floor_idle';
    this.floorSubstate = 'running_free';
    this.state = 'running';
    this.currentAnim = 'running';
    this.floorRunDuration = 2.4 + Math.random() * 1.8;
    this.floorRunTimer = 0;
    this.floorHopTimer = 0;
    this.isSkidding = false;

    if (targetX !== null) {
      this.floorRunTargetX = Math.max(85, Math.min(this.width - 85, targetX));
    } else {
      const margin = 85;
      if (this.x < this.width * 0.4) {
        this.floorRunTargetX = this.width - margin - Math.random() * 120;
      } else if (this.x > this.width * 0.6) {
        this.floorRunTargetX = margin + Math.random() * 120;
      } else {
        this.floorRunTargetX = Math.random() < 0.5
          ? (margin + Math.random() * 100)
          : (this.width - margin - Math.random() * 100);
      }
    }

    this.facing = this.floorRunTargetX > this.x ? 1 : -1;
    this.currentSpeed = 2.1 + Math.random() * 0.5;
    this.targetTilt = this.facing * 0.12;
  }

  // --- KINETIC STICK SWINGING SYSTEM ---
  grabStick(stick, hitX, hitY) {
    if (this.isDragging) return;

    const gallery = window.__app?.gallery;
    if (!gallery || !gallery.getSticksScreenSegments) return;

    const segments = gallery.getSticksScreenSegments();
    const seg = segments.find(s => s.stick === stick) || segments[0];
    if (!seg) return;

    // Calculate normalized position along stick segment (-0.65 to 0.65)
    const dx = seg.x2 - seg.cx;
    const dy = seg.y2 - seg.cy;
    const lenSq = dx * dx + dy * dy;
    let relT = 0;
    if (lenSq > 0.001) {
      relT = ((hitX - seg.cx) * dx + (hitY - seg.cy) * dy) / lenSq;
    }
    relT = Math.max(-0.65, Math.min(0.65, relT));

    // Choose mode: 60% hang trapeze swing, 40% sit on stick rocking
    const mode = Math.random() < 0.6 ? 'hang' : 'sit';
    this.attachedStick = {
      stick,
      relT,
      mode,
      timer: 0,
      duration: 3.2 + Math.random() * 1.6,
      swingAmp: 0.58 + Math.random() * 0.22
    };

    this.state = mode === 'hang' ? 'swinging_stick_hang' : 'swinging_stick_sit';
    this.aiState = this.state;
    this.attachedObstacle = null;
    this.smartJumpData = null;
    this.stickGrabCooldown = 1.0;
    this.swingTimer = 0;
    this.vy = 0;
    this.vx = 0;
    this.targetScaleX = 1.0;
    this.targetScaleY = 1.0;
    this.targetRotation = 0;
    this.rotation = 0;

    // Stick physical reaction to impact!
    const impactDir = (this.facing || 1);
    if (stick.applyImpulse) {
      stick.applyImpulse(impactDir * 1.8, -2.2, (Math.random() - 0.5) * 0.12);
    } else {
      stick.velocity.x += impactDir * 1.8;
      stick.velocity.y -= 2.2;
    }

    sounds.playWoodClack?.(0.09);
    this.spawnLandingDust();
    this.updateCanvasZIndex();
  }

  updateStickAI(dt) {
    if (!this.attachedStick) return;

    const gallery = window.__app?.gallery;
    const segments = gallery?.getSticksScreenSegments?.() || [];
    const seg = segments.find(s => s.stick === this.attachedStick.stick);

    // If stick disappeared or faded out, dismount smoothly
    if (!seg) {
      this.dismountFromStick();
      return;
    }

    const stick = this.attachedStick.stick;
    const dx = seg.x2 - seg.cx;
    const dy = seg.y2 - seg.cy;
    const stickAngle = Math.atan2(dy, dx);
    const grabX = seg.cx + dx * this.attachedStick.relT;
    const grabY = seg.cy + dy * this.attachedStick.relT;

    this.swingTimer += dt;
    this.attachedStick.timer += dt;

    // Bi-directional physical reaction: character weight pulls stick down slightly
    stick.velocity.y -= 0.06 * dt * 60;

    const swingFreq = 4.2;
    this.swingAngle = Math.sin(this.swingTimer * swingFreq) * this.attachedStick.swingAmp;

    // Character swinging exerts torque & impulse on the stick
    stick.rotSpeed += Math.sin(this.swingAngle) * 0.00025;
    stick.velocity.x += Math.cos(this.swingAngle) * 0.025;

    if (this.attachedStick.mode === 'hang') {
      this.state = 'swinging_stick_hang';
      // Hands grip grabX, grabY. Body hangs down as pendulum!
      this.x = grabX - Math.sin(this.swingAngle) * 16;
      this.baseY = grabY + Math.cos(this.swingAngle) * 36;
      this.y = 0;
      this.tilt = this.swingAngle * 0.85 + stickAngle * 0.35;
    } else {
      this.state = 'swinging_stick_sit';
      // Seated on stick: rocks with stick angle and gentle swing
      this.x = grabX;
      this.baseY = grabY + 8;
      this.y = 0;
      this.tilt = stickAngle + Math.sin(this.swingTimer * 3.5) * 0.18;
    }

    // Occasional gentle wood sound during high swing
    if (Math.abs(this.swingAngle) > 0.45 && Math.random() < 0.04) {
      sounds.playWoodClack?.(0.035);
    }

    // Dismount when duration expires at forward peak of swing
    if (this.attachedStick.timer >= this.attachedStick.duration) {
      const swingCos = Math.cos(this.swingTimer * swingFreq);
      if (swingCos > 0.3) {
        this.dismountFromStick();
      }
    }
  }

  dismountFromStick() {
    if (!this.attachedStick) return;

    const stick = this.attachedStick.stick;
    this.attachedStick = null;
    this.stickGrabCooldown = 1.0;

    const swingCos = Math.cos(this.swingTimer * 4.2);
    const launchDir = (swingCos >= 0 ? this.facing : -this.facing) || 1;
    this.facing = launchDir;

    // Recoil impulse to stick as character pushes off!
    if (stick.applyImpulse) {
      stick.applyImpulse(-launchDir * 2.0, 2.5, (Math.random() - 0.5) * 0.15);
    } else {
      stick.velocity.x -= launchDir * 2.0;
      stick.velocity.y += 2.5;
    }

    sounds.playHop?.();
    this.spawnLandingDust();

    const cards = window.__app?.gallery?.getCardScreenRects() || [];
    const cardBelow = cards.find(c => {
      if (!c.cardRef?.isVisible) return false;
      return this.x >= c.left - 40 && this.x <= c.right + 40 && c.top > this.baseY - 20 && c.top < this.height - 40;
    });

    this.setFloorCoordinateSpace();
    this.state = 'in_jump';
    this.aiState = 'in_smart_jump';

    if (cardBelow) {
      const targetRelX = Math.max(-cardBelow.hw + 30, Math.min(cardBelow.hw - 30, cardBelow.screenXToLocalX(this.x + launchDir * 60)));
      const pt = cardBelow.getLedgePoint(targetRelX);
      this.smartJumpData = {
        targetType: 'card',
        targetCardId: cardBelow.id,
        targetRelX,
        targetX: pt.x,
        targetY: pt.y
      };
      const jump = this.calculateBallisticJump(this.x, this.baseY, pt.x, pt.y, 35);
      this.vx = jump.vx;
      this.vy = jump.vy;
    } else {
      this.smartJumpData = {
        targetType: 'floor',
        targetX: Math.max(80, Math.min(this.width - 80, this.x + launchDir * 120)),
        targetY: this.floorY
      };
      this.vx = launchDir * (3.8 + Math.random() * 1.2);
      this.vy = -6.2;
    }

    this.targetRotation = this.rotation + launchDir * Math.PI * 2;
    this.targetScaleY = 1.35;
    this.targetScaleX = 0.78;
    this.updateCanvasZIndex();
  }

  jumpToStick(targetStick = null) {
    if (this.isDragging || this.attachedStick) return false;

    const gallery = window.__app?.gallery;
    if (!gallery || !gallery.getSticksScreenSegments) return false;

    const stickSegments = gallery.getSticksScreenSegments();
    if (!stickSegments || stickSegments.length === 0) return false;

    let candidate = null;
    if (targetStick) {
      candidate = stickSegments.find(s => s.stick === targetStick);
    }

    if (!candidate) {
      const currentFeetY = this.baseY + this.y;
      const validSticks = stickSegments.filter(s => {
        const dy = currentFeetY - s.cy;
        const dx = Math.abs(s.cx - this.x);
        return s.cy > 70 && s.cy < this.height - 70 && dx < 480 && dy > -60 && dy < 420;
      });

      if (validSticks.length > 0) {
        validSticks.sort((a, b) => Math.hypot(a.cx - this.x, a.cy - currentFeetY) - Math.hypot(b.cx - this.x, b.cy - currentFeetY));
        candidate = validSticks[0];
      }
    }

    if (!candidate) return false;

    if (this.state === 'lying') this.wakeUp();

    const currentFeetY = this.baseY + this.y;
    const targetX = candidate.cx;
    const targetY = candidate.cy;

    const heightDiff = Math.abs(targetY - currentFeetY);
    const arcBonus = Math.max(35, Math.min(80, heightDiff * 0.12 + 30));
    const jump = this.calculateBallisticJump(this.x, currentFeetY, targetX, targetY, arcBonus);

    this.setFloorCoordinateSpace();
    this.facing = targetX > this.x ? 1 : -1;
    this.state = 'in_jump';
    this.aiState = 'in_smart_jump';
    this.smartJumpData = {
      targetType: 'stick',
      targetStick: candidate.stick,
      targetX,
      targetY
    };

    this.vx = jump.vx;
    this.vy = jump.vy;
    this.targetScaleY = 1.38;
    this.targetScaleX = 0.76;
    this.targetTilt = this.facing * 0.22;
    this.spawnLandingDust();
    sounds?.playHop();
    this.updateCanvasZIndex();
    return true;
  }

  // --- LADDER BUILDING & CLIMBING SYSTEM ---
  spawnWoodChips(x, y, count = 4) {
    const colors = ['#3d2b1f', '#5c4033', '#8b5a2b', '#2b211a'];
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 1.2 + Math.random() * 2.8;
      this.particles.push({
        x: x + (Math.random() - 0.5) * 12,
        y: y + (Math.random() - 0.5) * 8,
        vx: Math.cos(angle) * speed,
        vy: -Math.abs(Math.sin(angle) * speed) - 1.2,
        radius: 1.2 + Math.random() * 1.5,
        alpha: 0.90,
        decay: 0.035 + Math.random() * 0.025,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }
  }

  findBestLadderTarget(fromX, fromY) {
    const cards = window.__app?.gallery?.getCardScreenRects() || [];
    const currentCardId = this.attachedObstacle?.cardId;
    const MAX_LADDER_REACH = 280;
    const MIN_TOP_PANEL_Y = 115; // Top panel boundary: ladder must stay strictly below!

    // Filter cards strictly higher than current surface by between 45px and MAX_LADDER_REACH
    // AND must be strictly below top panel!
    const candidates = cards.filter(c => {
      if (!c.cardRef?.isVisible || !c.cardRef?.group?.visible) return false;
      if (currentCardId && c.id === currentCardId) return false;
      if (c.top < MIN_TOP_PANEL_Y) return false; // Never target cards behind/above top panel!
      const heightDiff = fromY - c.top;
      if (heightDiff < 45 || heightDiff > MAX_LADDER_REACH) return false;
      const centerDistX = Math.abs((c.left + c.right) / 2 - fromX);
      return centerDistX < 360;
    });

    if (candidates.length > 0) {
      candidates.sort((a, b) => {
        const distA = Math.hypot((a.left + a.right) / 2 - fromX, (fromY - a.top) * 0.75);
        const distB = Math.hypot((b.left + b.right) / 2 - fromX, (fromY - b.top) * 0.75);
        return distA - distB;
      });

      const cardAbove = candidates[0];
      const clampedRelX = Math.max(-cardAbove.hw + 30, Math.min(cardAbove.hw - 30, cardAbove.screenXToLocalX(fromX)));
      const pt = cardAbove.getLedgePoint(clampedRelX);
      if (pt.y < MIN_TOP_PANEL_Y) return null;
      return {
        topX: pt.x,
        topY: pt.y,
        obstacle: {
          id: `card-${cardAbove.id}-top`,
          cardId: cardAbove.id,
          type: 'card',
          relX: clampedRelX,
          cardRef: cardAbove.cardRef
        }
      };
    }

    // Never build ladders into the top panel (filter pills or title letters)
    return null;
  }

  buildLadder(targetX = null, targetY = null, targetObstacle = null) {
    if (this.isDragging) return false;
    if (this.state === 'in_jump' || this.state === 'falling') return false;
    if (this.aiState === 'pocket_ladder_deploy' || this.aiState === 'climbing_ladder') return false;

    if (this.state === 'lying' || this.currentAnim === 'lying') {
      this.wakeUp();
    }

    // Dismount from stick if on stick
    if (this.attachedStick) {
      this.dismountFromStick();
      return false;
    }

    // Determine bottom anchoring: where character is standing right now!
    let bottomX = this.x;
    let bottomY = this.baseY;
    let baseObstacle = null;
    let baseType = 'floor';

    if (this.attachedObstacle && this.attachedObstacle.type === 'card') {
      baseType = 'card';
      baseObstacle = { ...this.attachedObstacle };
      bottomY = this.baseY;
      bottomX = this.x;
    } else {
      baseType = 'floor';
      baseObstacle = null;
      bottomY = this.baseY;
      bottomX = this.x;
    }

    // Target calculation
    let finalTopX = targetX;
    let finalTopY = targetY;
    let finalObstacle = targetObstacle;

    if (targetX !== null && targetY !== null && !finalObstacle) {
      const cards = window.__app?.gallery?.getCardScreenRects() || [];
      const currentCardId = this.attachedObstacle?.cardId;
      const clickedCard = cards.find(c => {
        if (!c.cardRef?.isVisible || !c.cardRef?.group?.visible) return false;
        if (currentCardId && c.id === currentCardId) return false;
        return targetX >= c.left - 25 && targetX <= c.right + 25 && targetY >= c.top - 30 && targetY <= c.bottom + 30;
      });
      if (clickedCard) {
        const clampedRelX = Math.max(-clickedCard.hw + 30, Math.min(clickedCard.hw - 30, clickedCard.screenXToLocalX(targetX)));
        const pt = clickedCard.getLedgePoint(clampedRelX);
        finalTopX = pt.x;
        finalTopY = pt.y;
        finalObstacle = {
          id: `card-${clickedCard.id}-top`,
          cardId: clickedCard.id,
          type: 'card',
          relX: clampedRelX,
          cardRef: clickedCard.cardRef
        };
      }
    }

    if (finalTopY === null || finalTopY === undefined) {
      const best = this.findBestLadderTarget(bottomX, bottomY);
      if (!best) return false;
      finalTopX = best.topX;
      finalTopY = best.topY;
      finalObstacle = best.obstacle;
    }

    if (finalTopX === null || finalTopX === undefined) {
      finalTopX = bottomX;
    }

    // Facing towards ladder
    this.facing = (finalTopX >= bottomX) ? 1 : -1;
    bottomX = Math.max(50, Math.min(this.width - 50, bottomX + this.facing * 14));

    if (baseType === 'card' && baseObstacle) {
      const cards = window.__app?.gallery?.getCardScreenRects() || [];
      const baseCard = cards.find(c => c.id === baseObstacle.cardId);
      if (baseCard) {
        baseObstacle.relX = baseCard.screenXToLocalX(bottomX);
        const pt = baseCard.getLedgePoint(baseObstacle.relX);
        bottomX = pt.x;
        bottomY = pt.y;
      }
    }

    const MIN_TOP_PANEL_Y = 115;
    // Ladder must climb UPWARD: finalTopY must be higher than bottomY - 45, max reach 280px, strictly below top panel
    if (finalTopY >= bottomY - 45 || (bottomY - finalTopY) > 280 || finalTopY < MIN_TOP_PANEL_Y) {
      return false;
    }

    finalTopX = Math.max(50, Math.min(this.width - 50, finalTopX));

    const dx = finalTopX - bottomX;
    const dy = finalTopY - bottomY;
    const ladderHeight = Math.hypot(dx, dy);
    const rungsCount = Math.max(5, Math.min(18, Math.round(ladderHeight / 16)));

    const ladder = {
      id: `ladder-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
      baseType,
      baseObstacle,
      baseX: bottomX,
      bottomX,
      bottomY,
      basePageY: bottomY + (window.__app?.gallery?.scroll?.current || 0),
      targetObstacle: finalObstacle,
      topX: finalTopX,
      topY: finalTopY,
      initialDx: dx,
      initialDy: dy,
      fixedHeight: ladderHeight,
      fixedAngle: Math.atan2(dy, dx),
      height: ladderHeight,
      width: 24,
      rungsCount,
      progress: 0.0,
      state: 'deploying',
      deployTimer: 0,
      alpha: 1.0,
      vanishingTimer: 0,
      vanishingDuration: 0.16
    };

    // Instant replace: only 1 ladder exists at a time!
    this.ladders = [ladder];
    this.currentLadder = ladder;

    // Character state: pocket extraction
    this.aiState = 'pocket_ladder_deploy';
    this.state = 'pocket_ladder_deploy';
    this.deployTimer = 0;
    this.climbProgress = 0.0;
    this.climbTimer = 0;
    this.lastDeployRung = 0;
    this.lastClimbRung = 0;
    this.vx = 0;
    this.vy = 0;

    sounds.playHop?.(0.08);
    this.updateCanvasZIndex();
    return ladder;
  }

  updateLadderAI(dt) {
    if (!this.currentLadder) {
      if (this.attachedObstacle) {
        this.aiState = 'on_card';
        this.state = 'standing';
      } else {
        this.aiState = 'floor_idle';
        this.state = 'standing';
        this.baseY = this.floorY;
        this.y = 0;
      }
      return;
    }

    const ladder = this.currentLadder;

    // A. Pocket extraction and upward extension / unfolding
    if (this.aiState === 'pocket_ladder_deploy' || this.aiState === 'building_ladder') {
      this.deployTimer += dt;
      this.state = 'pocket_ladder_deploy';

      const totalDeployTime = 0.70; // 0.22s reach & pull + 0.48s upward telescope
      if (this.deployTimer < 0.22) {
        ladder.progress = 0.0;
        this.targetTilt = this.facing * 0.08;
      } else {
        const extProgress = Math.min(1.0, (this.deployTimer - 0.22) / 0.48);
        ladder.progress = extProgress;
        this.targetTilt = -this.facing * 0.06;

        const builtRungs = Math.floor(extProgress * ladder.rungsCount);
        if (builtRungs > (this.lastDeployRung || 0)) {
          this.lastDeployRung = builtRungs;
          sounds.playWoodClack?.(0.06);
          const curRungX = ladder.bottomX + (ladder.topX - ladder.bottomX) * extProgress;
          const curRungY = ladder.bottomY + (ladder.topY - ladder.bottomY) * extProgress;
          if (Math.random() < 0.4) {
            this.spawnWoodChips(curRungX, curRungY, 1);
          }
        }
      }

      if (this.deployTimer >= totalDeployTime) {
        ladder.progress = 1.0;
        ladder.state = 'standing';
        sounds.playWoodClack?.(0.14);
        this.spawnLandingDust(ladder.bottomX, ladder.bottomY);

        // Immediately start climbing up!
        this.aiState = 'climbing_ladder';
        this.state = 'climbing_ladder';
        this.climbProgress = 0.0;
        this.climbTimer = 0;
        this.lastClimbRung = 0;
        this.targetScaleY = 1.0;
        this.targetScaleX = 1.0;
        this.targetTilt = 0;

        // Detach from base obstacle so physics does not clamp character Y
        this.attachedObstacle = null;
      }
      return;
    }

    // B. Climbing up the ladder
    if (this.aiState === 'climbing_ladder') {
      this.climbTimer += dt;
      this.state = 'climbing_ladder';

      const speed = 165 / Math.max(60, ladder.height);
      this.climbProgress += speed * dt;

      const p = Math.min(1.0, this.climbProgress);
      this.x = ladder.bottomX + (ladder.topX - ladder.bottomX) * p;
      this.baseY = ladder.bottomY + (ladder.topY - ladder.bottomY) * p;
      this.y = 0;
      this.pageBaseY = this.baseY + (window.__app?.gallery?.scroll?.current || 0);

      // Rung step sounds
      const rungStep = Math.floor(p * ladder.rungsCount);
      if (rungStep > this.lastClimbRung) {
        this.lastClimbRung = rungStep;
        sounds.playWoodClack?.(0.04);
        if (Math.random() < 0.25) {
          this.spawnWoodChips(this.x, this.baseY, 1);
        }
      }

      // Reached top of ladder!
      if (this.climbProgress >= 1.0) {
        this.x = ladder.topX;
        this.baseY = ladder.topY;

        const cardRects = window.__app?.gallery?.getCardScreenRects() || [];
        let landingCard = null;
        let landingRelX = 0;

        // 1. Check if original target card is still within landing reach
        if (ladder.targetObstacle && ladder.targetObstacle.type === 'card') {
          const targetCard = cardRects.find(c => c.id === ladder.targetObstacle.cardId);
          if (targetCard && targetCard.cardRef?.isVisible) {
            const relX = targetCard.screenXToLocalX(this.x);
            const ledgePt = targetCard.getLedgePoint(relX);
            if (Math.abs(ledgePt.y - this.baseY) < 48 && this.x >= targetCard.left - 20 && this.x <= targetCard.right + 20) {
              landingCard = targetCard;
              landingRelX = relX;
            }
          }
        }

        // 2. If target card moved on scroll, check if ANY other card is right here under character feet
        if (!landingCard) {
          for (const c of cardRects) {
            if (!c.cardRef?.isVisible) continue;
            if (this.x >= c.left - 20 && this.x <= c.right + 20) {
              const relX = c.screenXToLocalX(this.x);
              const ledgePt = c.getLedgePoint(relX);
              if (Math.abs(ledgePt.y - this.baseY) < 48) {
                landingCard = c;
                landingRelX = relX;
                break;
              }
            }
          }
        }

        if (landingCard) {
          this.attachedObstacle = {
            id: `card-${landingCard.id}-top`,
            cardId: landingCard.id,
            type: 'card',
            relX: landingRelX,
            cardRef: landingCard.cardRef
          };
          this.aiState = 'on_card';
          this.state = 'standing';
          this.cardExploreSubstate = 'survey';
          this.cardExploreTimer = 0;
          this.cardsVisitedInSequence = 0;
          this.spawnLandingDust(this.x, this.baseY);
          sounds.playHop?.();
          this.triggerLadderDisappear(ladder);
        } else if (ladder.targetObstacle && ladder.targetObstacle.type === 'pill') {
          const pillColl = this.getFilterPillCollision();
          if (pillColl && Math.abs(pillColl.top - this.baseY) < 45) {
            this.attachedObstacle = ladder.targetObstacle;
            this.aiState = 'on_pill';
            this.state = 'standing';
            this.pillExploreSubstate = 'survey';
            this.pillExploreTimer = 0;
            this.spawnLandingDust(this.x, this.baseY);
            sounds.playHop?.();
            this.triggerLadderDisappear(ladder);
          } else {
            this.dismountToFloor(ladder);
          }
        } else if (ladder.targetObstacle && ladder.targetObstacle.type === 'letters') {
          const titleColl = this.getTitleLettersCollision();
          if (titleColl && Math.abs(titleColl.top - this.baseY) < 45) {
            this.attachedObstacle = ladder.targetObstacle;
            this.aiState = 'on_letters';
            this.state = 'standing';
            this.lettersExploreSubstate = 'survey';
            this.lettersExploreTimer = 0;
            this.spawnLandingDust(this.x, this.baseY);
            sounds.playHop?.();
            this.triggerLadderDisappear(ladder);
          } else {
            this.dismountToFloor(ladder);
          }
        } else if (ladder.targetObstacle) {
          // Target moved away due to page scrolling: safely dismount to floor
          this.dismountToFloor(ladder);
        } else {
          // Freestanding observation ladder: perch on top
          this.aiState = 'sitting_ladder_top';
          this.state = 'sitting_ladder_top';
          this.ladderPerchTimer = 0;
          this.targetTilt = 0;
        }
      }
      return;
    }

    // C. Sitting perched on top of freestanding ladder
    if (this.aiState === 'sitting_ladder_top') {
      this.ladderPerchTimer += dt;
      this.state = 'sitting_ladder_top';
      this.x = ladder.topX;
      this.baseY = ladder.topY;
      this.y = 0;
      this.pageBaseY = this.baseY + (window.__app?.gallery?.scroll?.current || 0);

      if (this.ladderPerchTimer > 0.6 && this.ladderPerchTimer < 1.9) {
        this.isWaving = true;
      } else {
        this.isWaving = false;
      }

      if (this.ladderPerchTimer >= 2.4) {
        // Dramatic flip jump off top of ladder!
        const diveFacing = this.x > this.width / 2 ? -1 : 1;
        this.facing = diveFacing;
        this.setFloorCoordinateSpace();
        this.state = 'in_jump';
        this.aiState = 'in_smart_jump';
        this.smartJumpData = {
          targetType: 'floor',
          targetX: Math.max(80, Math.min(this.width - 80, this.x + diveFacing * 110)),
          targetY: this.floorY
        };
        this.vx = diveFacing * 2.8;
        this.vy = -4.2;
        this.targetRotation = this.rotation + diveFacing * Math.PI * 2;
        sounds.playHop?.();
        this.spawnLandingDust(this.x, this.baseY);

        // Ladder disappears immediately when leaping off!
        this.triggerLadderDisappear(ladder);
      }
      return;
    }
  }

  dismountToFloor(ladder) {
    const diveFacing = this.facing || 1;
    this.setFloorCoordinateSpace();
    this.state = 'in_jump';
    this.aiState = 'in_smart_jump';
    this.smartJumpData = {
      targetType: 'floor',
      targetX: Math.max(80, Math.min(this.width - 80, this.x + diveFacing * 60)),
      targetY: this.floorY
    };
    this.vx = diveFacing * 2.2;
    this.vy = -3.5;
    this.targetRotation = this.rotation + diveFacing * Math.PI * 2;
    sounds.playHop?.();
    this.spawnLandingDust(this.x, this.baseY);
    this.triggerLadderDisappear(ladder);
  }

  triggerLadderDisappear(ladder) {
    if (!ladder) return;
    ladder.state = 'vanishing';
    ladder.vanishingTimer = 0;
    this.spawnWoodChips(ladder.bottomX, ladder.bottomY, 4);
    this.spawnWoodChips(ladder.topX, ladder.topY, 4);
    this.spawnLandingDust(ladder.bottomX, ladder.bottomY);
    sounds.playHop?.(0.08);
    if (this.currentLadder === ladder) {
      this.currentLadder = null;
    }
  }

  updateLadders(dt) {
    const cardRects = window.__app?.gallery?.getCardScreenRects() || [];

    for (let i = this.ladders.length - 1; i >= 0; i--) {
      const ladder = this.ladders[i];

      // Physical rigidity: anchor the base, then keep top strictly locked to initial vector!
      if (ladder.baseType === 'card' && ladder.baseObstacle?.cardId) {
        const baseCard = cardRects.find(c => c.id === ladder.baseObstacle.cardId);
        if (baseCard && baseCard.cardRef?.isVisible) {
          const pt = baseCard.getLedgePoint(ladder.baseObstacle.relX);
          ladder.bottomX = pt.x;
          ladder.bottomY = pt.y;
        }
      } else {
        const scrollCurr = window.__app?.gallery?.scroll?.current || 0;
        ladder.bottomY = (ladder.basePageY !== undefined ? ladder.basePageY : (this.pageBaseY || this.floorY)) - scrollCurr;
      }

      // Rigid body: ladder NEVER stretches or bends regardless of scroll!
      ladder.topX = ladder.bottomX + ladder.initialDx;
      ladder.topY = ladder.bottomY + ladder.initialDy;
      ladder.height = ladder.fixedHeight;

      // Vanishing state: collapse and fade away
      if (ladder.state === 'vanishing') {
        ladder.vanishingTimer += dt;
        ladder.alpha = Math.max(0, 1 - ladder.vanishingTimer / ladder.vanishingDuration);
        if (ladder.alpha <= 0.02 || ladder.vanishingTimer >= ladder.vanishingDuration) {
          this.ladders.splice(i, 1);
          if (this.currentLadder === ladder) this.currentLadder = null;
        }
      }
    }
  }

  drawLadders() {
    for (const ladder of this.ladders) {
      if (ladder.alpha <= 0) continue;

      this.ctx.save();
      // Strictly clip ladder rendering below the top panel (y >= 95)
      this.ctx.beginPath();
      this.ctx.rect(0, 95, this.width, this.height - 95);
      this.ctx.clip();

      this.ctx.globalAlpha = Math.max(0, Math.min(1, ladder.alpha));

      const p = Math.max(0, Math.min(1, ladder.progress));
      if (p <= 0.02) {
        this.ctx.restore();
        continue;
      }

      const curTopX = ladder.bottomX + (ladder.topX - ladder.bottomX) * p;
      const curTopY = ladder.bottomY + (ladder.topY - ladder.bottomY) * p;
      const dx = curTopX - ladder.bottomX;
      const dy = curTopY - ladder.bottomY;
      const len = Math.hypot(dx, dy);
      if (len < 4) {
        this.ctx.restore();
        continue;
      }

      const angle = Math.atan2(dy, dx);
      const perp = angle + Math.PI / 2;
      const hw = ((ladder.width || 24) / 2) * (ladder.state === 'vanishing' ? ladder.alpha : 1.0);
      const px = Math.cos(perp) * hw;
      const py = Math.sin(perp) * hw;

      // Ground shadow under ladder base
      this.ctx.fillStyle = 'rgba(38, 29, 23, 0.22)';
      this.ctx.beginPath();
      this.ctx.ellipse(ladder.bottomX, ladder.bottomY, hw + 5, 3.0, 0, 0, Math.PI * 2);
      this.ctx.fill();

      this.ctx.strokeStyle = '#2b211a';
      this.ctx.fillStyle = '#2b211a';
      this.ctx.lineCap = 'round';
      this.ctx.lineJoin = 'round';
      this.ctx.lineWidth = 3.4;

      // Left rail
      this.ctx.beginPath();
      this.ctx.moveTo(ladder.bottomX - px, ladder.bottomY - py);
      this.ctx.lineTo(curTopX - px, curTopY - py);
      this.ctx.stroke();

      // Right rail
      this.ctx.beginPath();
      this.ctx.moveTo(ladder.bottomX + px, ladder.bottomY + py);
      this.ctx.lineTo(curTopX + px, curTopY + py);
      this.ctx.stroke();

      // Rounded rail caps on top
      this.ctx.beginPath();
      this.ctx.arc(curTopX - px, curTopY - py, 2.2, 0, Math.PI * 2);
      this.ctx.arc(curTopX + px, curTopY + py, 2.2, 0, Math.PI * 2);
      this.ctx.fill();

      // Rungs
      const rungsTotal = ladder.rungsCount || 8;
      const builtRungs = Math.floor(rungsTotal * p);
      this.ctx.lineWidth = 2.6;

      for (let i = 1; i <= builtRungs; i++) {
        const t = i / (rungsTotal + 1);
        const rx = ladder.bottomX + (ladder.topX - ladder.bottomX) * t;
        const ry = ladder.bottomY + (ladder.topY - ladder.bottomY) * t;

        this.ctx.beginPath();
        this.ctx.moveTo(rx - px - 1.2, ry - py);
        this.ctx.lineTo(rx + px + 1.2, ry + py);
        this.ctx.stroke();

        // Wooden pegs on ends
        this.ctx.beginPath();
        this.ctx.arc(rx - px, ry - py, 1.6, 0, Math.PI * 2);
        this.ctx.arc(rx + px, ry + py, 1.6, 0, Math.PI * 2);
        this.ctx.fill();
      }

      this.ctx.restore();
    }
  }

  updatePillAI(dt, minBounds, maxBounds) {
    const pillColl = this.getFilterPillCollision();
    if (!pillColl) {
      this.detachFromObstacle(2);
      return;
    }

    // Inactivity Sleep on filter pill: ONLY sleep if user inactive for > 5 min (300s)
    if (this.userIdleTime >= this.userIdleThreshold) {
      if (this.pillExploreSubstate !== 'rest' && this.state !== 'crouch' && this.state !== 'in_jump') {
        this.pillExploreSubstate = 'rest';
        this.pillExploreTimer = 0;
        this.currentAnim = 'lying';
        this.state = 'lying';
        this.spawnLandingDust();
      }
    } else if (this.pillExploreSubstate === 'rest' || this.state === 'lying') {
      // User is active, wake up immediately!
      this.wakeUp();
      return;
    }

    this.pillExploreTimer += dt;

    if (this.pillExploreSubstate === 'sitting_edge' ||
        this.pillExploreSubstate === 'inspecting' ||
        this.pillExploreSubstate === 'waving' ||
        this.pillExploreSubstate === 'stretching' ||
        this.pillExploreSubstate === 'balancing') {

      this.state = this.pillExploreSubstate;
      this.vx = 0;

      if (this.pillExploreSubstate === 'inspecting') {
        this.targetTilt = this.facing * 0.18;
      } else if (this.pillExploreSubstate === 'stretching') {
        this.targetScaleY = 1.15;
        this.targetScaleX = 0.90;
        this.targetTilt = -this.facing * 0.08;
      } else if (this.pillExploreSubstate === 'balancing') {
        this.targetTilt = Math.sin(performance.now() * 0.003) * 0.09;
        this.targetScaleX = 1.0;
        this.targetScaleY = 1.0;
      } else {
        this.targetTilt = 0;
        this.targetScaleX = 1.0;
        this.targetScaleY = 1.0;
      }

      this.idleBlinkTimer += dt;
      if (this.idleBlinkTimer > 2.2) {
        this.isBlinking = true;
        if (this.idleBlinkTimer > 2.38) {
          this.isBlinking = false;
          this.idleBlinkTimer = 0;
        }
      }

      if (this.pillExploreTimer >= (this.microActionDuration || 4.0)) {
        this.pillExploreTimer = 0;
        this.pillExploreSubstate = 'survey';
        this.state = 'standing';
        this.targetTilt = 0;
        this.targetScaleX = 1.0;
        this.targetScaleY = 1.0;
      }
      return;
    }

    if (this.pillExploreSubstate === 'survey') {
      this.state = 'standing';
      this.targetTilt = 0;
      this.targetScaleX = 1.0;
      this.targetScaleY = 1.0;

      this.idleBlinkTimer += dt;
      if (this.idleBlinkTimer > 2.2) {
        this.isBlinking = true;
        if (this.idleBlinkTimer > 2.38) {
          this.isBlinking = false;
          this.idleBlinkTimer = 0;
          if (Math.random() < 0.35) this.facing *= -1;
        }
      }

      // Calm decision: 2.4s - 4.2s
      if (this.pillExploreTimer >= 2.4 + Math.random() * 1.8) {
        this.pillExploreTimer = 0;
        this.chooseNextPillAction(pillColl);
      }
    } else if (this.pillExploreSubstate === 'patrol') {
      if (this.pillPatrolTargetX === undefined || this.pillPatrolTargetX === null) {
        this.chooseNextPillAction(pillColl);
        return;
      }

      const dist = this.pillPatrolTargetX - this.x;
      if (Math.abs(dist) < 5) {
        this.x = this.pillPatrolTargetX;
        const surface = pillColl.getSurfaceAtScreenX(this.x);
        this.baseY = surface.y;
        this.pillExploreSubstate = 'survey';
        this.pillExploreTimer = 0;
        this.state = 'standing';
        this.targetTilt = 0;
      } else {
        this.facing = dist > 0 ? 1 : -1;
        this.state = 'running';
        this.currentSpeed = 1.4;
        this.x += this.facing * this.currentSpeed;
        const surface = pillColl.getSurfaceAtScreenX(this.x);
        this.baseY = surface.y;
        this.targetTilt = this.facing * 0.10;

        const stepFreq = this.currentSpeed * 0.052;
        this.runCycle += stepFreq;
        const currentStep = Math.sin(this.runCycle);
        if (currentStep * this.lastStepPhase < 0) {
          this.spawnFootstepDust();
        }
        this.lastStepPhase = currentStep;
      }
    } else if (this.pillExploreSubstate === 'rest') {
      this.state = 'lying';
      this.targetTilt = 0;

      if (Math.random() < 0.02 && this.sleepBubbles.length < 3) {
        this.sleepBubbles.push({
          x: this.x + this.facing * 12,
          y: this.baseY - 14,
          vx: this.facing * 0.3 + (Math.random() - 0.5) * 0.4,
          vy: -0.6 - Math.random() * 0.4,
          alpha: 0.45,
          scale: 0.6
        });
      }
    }
  }

  chooseNextPillAction(pillColl) {
    if (this.isScrolling) return;

    const cards = window.__app?.gallery?.getCardScreenRects() || [];
    const visibleCards = cards.filter(c => c.cardRef?.isVisible && c.top > pillColl.bottom + 20 && c.top < this.height - 40);

    // 40% chance: Leap down to a card below
    if (visibleCards.length > 0 && Math.random() < 0.40) {
      const targetCard = visibleCards.reduce((closest, c) => {
        return Math.abs(c.x - this.x) < Math.abs(closest.x - this.x) ? c : closest;
      }, visibleCards[0]);
      this.executeJumpFromPillToCard(targetCard.id);
      return;
    }

    // 30% chance: Leap down to the background floor and run freely!
    if (Math.random() < 0.35) {
      this.executeJumpFromPillToFloor();
      return;
    }

    // 10% chance: Jump up to title letters above
    const titleColl = this.getTitleLettersCollision();
    if (titleColl && Math.random() < 0.15) {
      const nearestLetter = titleColl.letters.reduce((closest, l) => {
        const lx = (l.left + l.right) / 2;
        return Math.abs(lx - this.x) < Math.abs((closest.left + closest.right) / 2 - this.x) ? l : closest;
      }, titleColl.letters[0]);
      this.executeJumpToLetters(nearestLetter.index);
      return;
    }

    // 15% chance: Patrol towards another spot on filter pill
    if (Math.random() < 0.60) {
      const exploreCurvedEdge = Math.random() < 0.20;
      let targetX;
      if (exploreCurvedEdge) {
        targetX = Math.random() < 0.5
          ? (pillColl.left + pillColl.radius * 0.3)
          : (pillColl.right - pillColl.radius * 0.3);
      } else {
        const flatMinX = pillColl.left + pillColl.radius + 10;
        const flatMaxX = pillColl.right - pillColl.radius - 10;
        targetX = flatMinX + Math.random() * (flatMaxX - flatMinX);
      }
      this.pillPatrolTargetX = targetX;
      this.pillExploreSubstate = 'patrol';
      this.pillExploreTimer = 0;
      return;
    }

    // 5% chance: Quick micro action
    const roll = Math.random();
    if (roll < 0.35) {
      this.pillExploreSubstate = 'sitting_edge';
      this.state = 'sitting_edge';
      this.microActionDuration = 1.3 + Math.random() * 0.6;
      this.pillExploreTimer = 0;
    } else if (roll < 0.70) {
      this.pillExploreSubstate = 'waving';
      this.state = 'waving';
      this.microActionDuration = 1.2 + Math.random() * 0.5;
      this.pillExploreTimer = 0;
    } else {
      this.pillExploreSubstate = 'stretching';
      this.state = 'stretching';
      this.microActionDuration = 1.2 + Math.random() * 0.5;
      this.pillExploreTimer = 0;
    }
  }

  draw() {
    this.ctx.clearRect(0, 0, this.width, this.height);

    const charColor = '#2b211a';

    // Draw sleep Zzz bubbles
    this.sleepBubbles.forEach(b => {
      this.ctx.save();
      this.ctx.translate(b.x, b.y);
      this.ctx.scale(b.scale, b.scale);
      this.ctx.fillStyle = `rgba(50, 40, 32, ${b.alpha})`;
      this.ctx.font = 'bold 11px sans-serif';
      this.ctx.fillText('z', 0, 0);
      this.ctx.restore();
    });

    // 1. GROUND SHADOW
    const heightFactor = Math.max(0, 1 - Math.abs(this.y) / 160);
    let shadowRx = Math.max(5, (17 - Math.abs(this.y) * 0.06));
    let shadowRy = Math.max(1.8, 4.6 * heightFactor);

    if (this.state === 'lying') {
      shadowRx = 23;
      shadowRy = 3.6;
    }

    const shadowAlpha = 0.24 * heightFactor;
    this.ctx.save();
    this.ctx.translate(this.x, this.baseY);
    if (this.attachedObstacle?.type === 'card' && this.surfaceAngle) {
      this.ctx.rotate(this.surfaceAngle);
    }
    this.ctx.fillStyle = `rgba(38, 29, 23, ${shadowAlpha})`;
    this.ctx.beginPath();
    this.ctx.ellipse(0, 0, shadowRx, shadowRy, 0, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.restore();

    // 2. Dust & wood chip particles
    this.particles.forEach((p) => {
      this.ctx.fillStyle = p.color || `rgba(45, 35, 27, ${p.alpha})`;
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      this.ctx.fill();
    });

    // 2.5 Ladders (rendered behind character)
    this.drawLadders();

    // 3. DRAW CHARACTER BY STATE
    if (this.state === 'lying') {
      this.drawLying();
      return;
    }

    let runBob = 0;
    let sitDrop = 0;
    if (this.state === 'running') {
      runBob = -Math.abs(Math.sin(this.runCycle)) * 3.5;
    } else if (this.state === 'standing' || this.state === 'pause_running' || this.state === 'waving') {
      runBob = Math.sin(performance.now() * 0.004) * 1.4;
    } else if (this.state === 'sitting_edge' || this.state === 'sitting_ladder_top') {
      sitDrop = 11;
      runBob = Math.sin(performance.now() * 0.003) * 0.8;
    } else if (this.state === 'inspecting') {
      sitDrop = 4;
      runBob = 0;
    } else if (this.state === 'balancing') {
      runBob = Math.sin(performance.now() * 0.003) * 0.9;
    } else if (this.state === 'grabbed') {
      runBob = 0;
    } else if (this.state === 'building_ladder' || this.state === 'pocket_ladder_deploy') {
      sitDrop = 1.0;
      runBob = 0;
    } else if (this.state === 'climbing_ladder') {
      sitDrop = 0;
      runBob = Math.sin(this.climbTimer * 4.8) * 1.2;
    } else if (this.state === 'swinging_stick_sit') {
      sitDrop = 11;
      runBob = 0;
    } else if (this.state === 'swinging_stick_hang') {
      sitDrop = 0;
      runBob = 0;
    }

    const charY = this.baseY + this.y + runBob;

    this.ctx.save();
    const pivotY = (this.state === 'swinging_stick_hang') ? (-47) : (-22 + sitDrop * 0.5);
    this.ctx.translate(this.x, charY);
    if (this.attachedObstacle?.type === 'card' && this.surfaceAngle) {
      this.ctx.rotate(this.surfaceAngle);
    }
    this.ctx.translate(0, pivotY);
    this.ctx.scale(this.scaleX * this.facing, this.scaleY);
    this.ctx.rotate(this.rotation + this.tilt * this.facing);
    this.ctx.translate(0, -pivotY);

    this.ctx.fillStyle = charColor;
    this.ctx.strokeStyle = charColor;
    this.ctx.lineCap = 'round';
    this.ctx.lineJoin = 'round';

    const hipY = -18 + sitDrop;
    this.ctx.lineWidth = 3.2;

    // --- A. LEGS ---
    if (this.state === 'running' || this.state === 'falling') {
      const thighAngleA = Math.sin(this.runCycle) * 0.75;
      const kneeAx = -2.5 + Math.sin(thighAngleA) * 9.5;
      const kneeAy = hipY + Math.cos(thighAngleA) * 9.5;
      const calfAngleA = thighAngleA + Math.max(-0.2, Math.cos(this.runCycle)) * 1.15;
      const footAx = kneeAx + Math.sin(calfAngleA) * 9.5;
      const footAy = Math.min(0, kneeAy + Math.cos(calfAngleA) * 9.5);

      this.ctx.beginPath();
      this.ctx.moveTo(-2.5, hipY);
      this.ctx.lineTo(kneeAx, kneeAy);
      this.ctx.lineTo(footAx, footAy);
      this.ctx.stroke();

      this.ctx.beginPath();
      this.ctx.ellipse(footAx + 1.5, footAy - 1, 3.2, 1.8, 0.2, 0, Math.PI * 2);
      this.ctx.fill();

      const thighAngleB = Math.sin(this.runCycle + Math.PI) * 0.75;
      const kneeBx = 2.5 + Math.sin(thighAngleB) * 9.5;
      const kneeBy = hipY + Math.cos(thighAngleB) * 9.5;
      const calfAngleB = thighAngleB + Math.max(-0.2, Math.cos(this.runCycle + Math.PI)) * 1.15;
      const footBx = kneeBx + Math.sin(calfAngleB) * 9.5;
      const footBy = Math.min(0, kneeBy + Math.cos(calfAngleB) * 9.5);

      this.ctx.beginPath();
      this.ctx.moveTo(2.5, hipY);
      this.ctx.lineTo(kneeBx, kneeBy);
      this.ctx.lineTo(footBx, footBy);
      this.ctx.stroke();

      this.ctx.beginPath();
      this.ctx.ellipse(footBx + 1.5, footBy - 1, 3.2, 1.8, 0.2, 0, Math.PI * 2);
      this.ctx.fill();
    } else if (this.state === 'grabbed') {
      // Dangling relaxed legs while being held/moved by cursor (no running!)
      const dangleSway = Math.sin(performance.now() * 0.005) * 1.2 + Math.max(-3.5, Math.min(3.5, -this.vx * 0.6));

      // Back leg - relaxed, slightly bent knee
      this.ctx.beginPath();
      this.ctx.moveTo(-2.5, hipY);
      this.ctx.lineTo(-3.5 + dangleSway * 0.5, hipY + 9);
      this.ctx.lineTo(-2.0 + dangleSway * 0.85, hipY + 17.5);
      this.ctx.stroke();

      this.ctx.beginPath();
      this.ctx.ellipse(-1.5 + dangleSway * 0.85, hipY + 17.5, 3.2, 1.8, 0.2, 0, Math.PI * 2);
      this.ctx.fill();

      // Front leg - relaxed dangling
      this.ctx.beginPath();
      this.ctx.moveTo(2.5, hipY);
      this.ctx.lineTo(3.5 + dangleSway * 0.4, hipY + 8.5);
      this.ctx.lineTo(4.5 + dangleSway * 0.75, hipY + 17);
      this.ctx.stroke();

      this.ctx.beginPath();
      this.ctx.ellipse(5.0 + dangleSway * 0.75, hipY + 17, 3.2, 1.8, 0.1, 0, Math.PI * 2);
      this.ctx.fill();
    } else if (this.state === 'sitting_edge') {
      const t = performance.now() * 0.003;
      if (this.attachedObstacle) {
        // Sitting on ledge (card, filter pill, or letters) with legs dangling & swinging!
        const swing1 = Math.sin(t * 3.0) * 2.8;
        const swing2 = Math.sin(t * 3.0 + 1.2) * 2.6;

        // Back leg
        this.ctx.beginPath();
        this.ctx.moveTo(-2.5, hipY);
        this.ctx.lineTo(-3.0, 1);
        this.ctx.lineTo(-2.0 + swing1, 10);
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.ellipse(-1.0 + swing1, 10.5, 3.0, 1.7, 0.25, 0, Math.PI * 2);
        this.ctx.fill();

        // Front leg
        this.ctx.beginPath();
        this.ctx.moveTo(2.5, hipY);
        this.ctx.lineTo(3.2, 1.5);
        this.ctx.lineTo(3.8 + swing2, 11);
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.ellipse(4.8 + swing2, 11.5, 3.0, 1.7, 0.15, 0, Math.PI * 2);
        this.ctx.fill();
      } else {
        // Sitting on ground floor with legs stretched forward relaxed
        const breathe = Math.sin(t * 2.0) * 0.8;
        // Back leg
        this.ctx.beginPath();
        this.ctx.moveTo(-2.5, hipY);
        this.ctx.lineTo(3.0, -3);
        this.ctx.lineTo(12.0, -0.5);
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.ellipse(13.2, -1.5, 3.0, 1.8, -0.4, 0, Math.PI * 2);
        this.ctx.fill();

        // Front leg
        this.ctx.beginPath();
        this.ctx.moveTo(2.5, hipY);
        this.ctx.lineTo(5.5, -2.5);
        this.ctx.lineTo(14.5 + breathe, -0.5);
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.ellipse(15.8 + breathe, -1.5, 3.0, 1.8, -0.35, 0, Math.PI * 2);
        this.ctx.fill();
      }
    } else if (this.state === 'inspecting') {
      // Crouched inquisitive stance
      this.ctx.beginPath();
      this.ctx.moveTo(-2.5, hipY);
      this.ctx.lineTo(-6, -6);
      this.ctx.lineTo(-3.5, 0);
      this.ctx.stroke();

      this.ctx.beginPath();
      this.ctx.moveTo(2.5, hipY);
      this.ctx.lineTo(6.5, -6);
      this.ctx.lineTo(4, 0);
      this.ctx.stroke();

      this.ctx.beginPath();
      this.ctx.ellipse(-3.5, -1, 3.2, 1.8, 0, 0, Math.PI * 2);
      this.ctx.ellipse(4, -1, 3.2, 1.8, 0, 0, Math.PI * 2);
      this.ctx.fill();
    } else if (this.state === 'balancing') {
      // One foot standing, one foot lifted behind
      const wobbleLeg = Math.sin(performance.now() * 0.0035) * 1.5;
      // Standing central leg
      this.ctx.beginPath();
      this.ctx.moveTo(0, hipY);
      this.ctx.lineTo(0, 0);
      this.ctx.stroke();

      this.ctx.beginPath();
      this.ctx.ellipse(0.5, -1, 3.4, 1.8, 0, 0, Math.PI * 2);
      this.ctx.fill();

      // Lifted back leg tucked behind
      this.ctx.beginPath();
      this.ctx.moveTo(-2.5, hipY);
      this.ctx.lineTo(-7.5, hipY + 5 + wobbleLeg * 0.5);
      this.ctx.lineTo(-6.0, hipY - 2 + wobbleLeg);
      this.ctx.stroke();

      this.ctx.beginPath();
      this.ctx.ellipse(-6.0, hipY - 2 + wobbleLeg, 2.8, 1.6, -0.35, 0, Math.PI * 2);
      this.ctx.fill();
    } else if (this.state === 'stretching') {
      // Standing tall on tiptoes
      this.ctx.beginPath();
      this.ctx.moveTo(-2.5, hipY);
      this.ctx.lineTo(-2.5, 1);
      this.ctx.stroke();

      this.ctx.beginPath();
      this.ctx.moveTo(2.5, hipY);
      this.ctx.lineTo(2.5, 1);
      this.ctx.stroke();

      this.ctx.beginPath();
      this.ctx.ellipse(-2.5, 1.2, 2.6, 2.0, 0.25, 0, Math.PI * 2);
      this.ctx.ellipse(2.5, 1.2, 2.6, 2.0, 0.25, 0, Math.PI * 2);
      this.ctx.fill();
    } else if (this.state === 'skid' || this.state === 'crouch' || this.state === 'landing_jump') {
      this.ctx.beginPath();
      this.ctx.moveTo(-2.5, hipY);
      this.ctx.lineTo(-7, -8);
      this.ctx.lineTo(-4, 0);
      this.ctx.stroke();

      this.ctx.beginPath();
      this.ctx.moveTo(2.5, hipY);
      this.ctx.lineTo(7, -8);
      this.ctx.lineTo(4, 0);
      this.ctx.stroke();

      this.ctx.beginPath();
      this.ctx.ellipse(-4, -1, 3.2, 1.8, 0, 0, Math.PI * 2);
      this.ctx.ellipse(4, -1, 3.2, 1.8, 0, 0, Math.PI * 2);
      this.ctx.fill();
    } else if (this.state === 'in_jump') {
      const kick = Math.sin(performance.now() * 0.012) * 3;
      this.ctx.beginPath();
      this.ctx.moveTo(-2.5, hipY);
      this.ctx.lineTo(-4, -8 + kick);
      this.ctx.lineTo(-3, 2 + kick);
      this.ctx.stroke();

      this.ctx.beginPath();
      this.ctx.moveTo(2.5, hipY);
      this.ctx.lineTo(5, -7 - kick);
      this.ctx.lineTo(6, 1 - kick);
      this.ctx.stroke();

      this.ctx.beginPath();
      this.ctx.ellipse(-3, 1 + kick, 3.2, 1.8, 0, 0, Math.PI * 2);
    } else if (this.state === 'climbing_ladder') {
      // Climbing ladder legs: alternating stepping on rungs
      const climbPhase = this.climbTimer * 4.8;
      const legA = Math.sin(climbPhase);
      const legB = Math.sin(climbPhase + Math.PI);

      // Back leg (knee lifts when legA > 0, steps down when legA <= 0)
      const kneeAy = hipY + 7 - Math.max(0, legA) * 5;
      const kneeAx = -3.5 - Math.max(0, legA) * 1.5;
      const footAy = hipY + 16 - Math.max(0, legA) * 6;
      const footAx = -3.5;

      this.ctx.beginPath();
      this.ctx.moveTo(-2.5, hipY);
      this.ctx.lineTo(kneeAx, kneeAy);
      this.ctx.lineTo(footAx, footAy);
      this.ctx.stroke();

      this.ctx.beginPath();
      this.ctx.ellipse(footAx, footAy, 3.0, 1.8, 0, 0, Math.PI * 2);
      this.ctx.fill();

      // Front leg
      const kneeBy = hipY + 7 - Math.max(0, legB) * 5;
      const kneeBx = 3.5 + Math.max(0, legB) * 1.5;
      const footBy = hipY + 16 - Math.max(0, legB) * 6;
      const footBx = 3.5;

      this.ctx.beginPath();
      this.ctx.moveTo(2.5, hipY);
      this.ctx.lineTo(kneeBx, kneeBy);
      this.ctx.lineTo(footBx, footBy);
      this.ctx.stroke();

      this.ctx.beginPath();
      this.ctx.ellipse(footBx, footBy, 3.0, 1.8, 0, 0, Math.PI * 2);
      this.ctx.fill();
    } else if (this.state === 'building_ladder' || this.state === 'pocket_ladder_deploy') {
      // Braced builder stance: stable wide stance with slightly bent knees
      this.ctx.beginPath();
      this.ctx.moveTo(-2.5, hipY);
      this.ctx.lineTo(-5.5, hipY + 8);
      this.ctx.lineTo(-4.5, 0);
      this.ctx.stroke();

      this.ctx.beginPath();
      this.ctx.moveTo(2.5, hipY);
      this.ctx.lineTo(5.5, hipY + 8);
      this.ctx.lineTo(5.0, 0);
      this.ctx.stroke();

      this.ctx.beginPath();
      this.ctx.ellipse(-4.5, -0.8, 3.2, 1.8, 0, 0, Math.PI * 2);
      this.ctx.ellipse(5.0, -0.8, 3.2, 1.8, 0, 0, Math.PI * 2);
      this.ctx.fill();
    } else if (this.state === 'sitting_ladder_top') {
      // Sitting on top rung of ladder with legs dangling & swinging freely
      const t = performance.now() * 0.003;
      const swing1 = Math.sin(t * 3.2) * 3.0;
      const swing2 = Math.sin(t * 3.2 + 1.2) * 2.8;

      // Back leg
      this.ctx.beginPath();
      this.ctx.moveTo(-2.5, hipY);
      this.ctx.lineTo(-3.0, 1);
      this.ctx.lineTo(-2.0 + swing1, 10.5);
      this.ctx.stroke();

      this.ctx.beginPath();
      this.ctx.ellipse(-1.0 + swing1, 11, 3.0, 1.7, 0.25, 0, Math.PI * 2);
      this.ctx.fill();

      // Front leg
      this.ctx.beginPath();
      this.ctx.moveTo(2.5, hipY);
      this.ctx.lineTo(3.2, 1.5);
      this.ctx.lineTo(3.8 + swing2, 11.5);
      this.ctx.stroke();

      this.ctx.beginPath();
      this.ctx.ellipse(4.8 + swing2, 12, 3.0, 1.7, 0.15, 0, Math.PI * 2);
      this.ctx.fill();
    } else if (this.state === 'swinging_stick_hang') {
      // Dynamic swinging legs kicking forward and back with pendulum momentum
      const swingPhase = this.swingTimer * 4.2;
      const legKick = Math.sin(swingPhase) * 5.5;
      const kneeKick = Math.sin(swingPhase + 0.4) * 4.5;

      // Back leg
      this.ctx.beginPath();
      this.ctx.moveTo(-2.5, hipY);
      this.ctx.lineTo(-4.0 + legKick * 0.4, hipY + 8);
      this.ctx.lineTo(-2.5 + legKick + kneeKick, hipY + 17);
      this.ctx.stroke();

      this.ctx.beginPath();
      this.ctx.ellipse(-2.5 + legKick + kneeKick, hipY + 17.5, 3.2, 1.8, legKick * 0.08, 0, Math.PI * 2);
      this.ctx.fill();

      // Front leg
      this.ctx.beginPath();
      this.ctx.moveTo(2.5, hipY);
      this.ctx.lineTo(4.0 + legKick * 0.5, hipY + 8);
      this.ctx.lineTo(5.5 + legKick * 1.2 + kneeKick, hipY + 17);
      this.ctx.stroke();

      this.ctx.beginPath();
      this.ctx.ellipse(5.5 + legKick * 1.2 + kneeKick, hipY + 17.5, 3.2, 1.8, legKick * 0.08, 0, Math.PI * 2);
      this.ctx.fill();
    } else if (this.state === 'swinging_stick_sit') {
      // Seated on stick with dangling swinging legs
      const t = performance.now() * 0.003;
      const swing1 = Math.sin(t * 3.5) * 3.5;
      const swing2 = Math.sin(t * 3.5 + 1.2) * 3.2;

      // Back leg
      this.ctx.beginPath();
      this.ctx.moveTo(-2.5, hipY);
      this.ctx.lineTo(-3.0, 1);
      this.ctx.lineTo(-2.0 + swing1, 10.5);
      this.ctx.stroke();

      this.ctx.beginPath();
      this.ctx.ellipse(-1.0 + swing1, 11, 3.0, 1.7, 0.25, 0, Math.PI * 2);
      this.ctx.fill();

      // Front leg
      this.ctx.beginPath();
      this.ctx.moveTo(2.5, hipY);
      this.ctx.lineTo(3.2, 1.5);
      this.ctx.lineTo(3.8 + swing2, 11.5);
      this.ctx.stroke();

      this.ctx.beginPath();
      this.ctx.ellipse(4.8 + swing2, 12, 3.0, 1.7, 0.15, 0, Math.PI * 2);
      this.ctx.fill();
    } else {
      // Standing legs
      this.ctx.beginPath();
      this.ctx.moveTo(-2.5, hipY);
      this.ctx.lineTo(-2.5, 0);
      this.ctx.stroke();

      this.ctx.beginPath();
      this.ctx.moveTo(2.5, hipY);
      this.ctx.lineTo(2.5, 0);
      this.ctx.stroke();

      this.ctx.beginPath();
      this.ctx.ellipse(-3, -1, 3.2, 1.8, 0, 0, Math.PI * 2);
      this.ctx.ellipse(3, -1, 3.2, 1.8, 0, 0, Math.PI * 2);
      this.ctx.fill();
    }

    // --- B. TORSO ---
    const torsoTop = -35 + sitDrop;
    const torsoH = 17;
    const torsoW = 11;
    this.ctx.beginPath();
    if (this.ctx.roundRect) {
      this.ctx.roundRect(-torsoW / 2, torsoTop, torsoW, torsoH, 4.5);
    } else {
      this.ctx.rect(-torsoW / 2, torsoTop, torsoW, torsoH);
    }
    this.ctx.fill();

    // --- C. SCARF ---
    this.ctx.fillStyle = '#423328';
    this.ctx.beginPath();
    this.ctx.rect(-torsoW / 2 - 1, torsoTop - 1.5, torsoW + 2, 4);
    this.ctx.fill();

    const scarfSpeed = (this.state === 'running')
      ? this.currentSpeed * 1.5
      : (this.state === 'swinging_stick_hang' ? Math.abs(Math.sin(this.swingTimer * 4.2)) * 3.2 + 1.2 : 1.0);
    const scarfWave = Math.sin(performance.now() * 0.016 * scarfSpeed) * 3.5;
    this.ctx.strokeStyle = '#423328';
    this.ctx.lineWidth = 2.6;
    this.ctx.beginPath();
    this.ctx.moveTo(-torsoW / 2, torsoTop + 1);
    this.ctx.quadraticCurveTo(-torsoW / 2 - 6, torsoTop + 1 + scarfWave, -torsoW / 2 - 12 - scarfSpeed * 1.2, torsoTop + 1 - scarfWave * 0.8);
    this.ctx.stroke();

    // --- D. HEAD & BERET ---
    const headY = -43 + sitDrop;
    const headR = 6.5;

    this.ctx.fillStyle = charColor;
    this.ctx.beginPath();
    this.ctx.arc(0, headY, headR, 0, Math.PI * 2);
    this.ctx.fill();

    this.ctx.fillStyle = '#1c1511';
    this.ctx.beginPath();
    this.ctx.ellipse(-0.5, headY - 5.5, 7.5, 3.2, -0.22, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.beginPath();
    this.ctx.arc(-1.5, headY - 9, 1.2, 0, Math.PI * 2);
    this.ctx.fill();

    // --- D2. EXPRESSIVE EYE WITH SMOOTH CURSOR TRACKING ---
    if (!this.isBlinking) {
      let lookOffsetX = 0;
      let lookOffsetY = 0;

      if (this.mouse && this.mouse.x > 0 && !this.isDragging) {
        const headScreenX = this.x;
        const headScreenY = charY + headY * this.scaleY;
        const dx = (this.mouse.x - headScreenX) * this.facing;
        const dy = this.mouse.y - headScreenY;
        const dist = Math.hypot(dx, dy);

        if (dist > 8 && dist < 650) {
          lookOffsetX = Math.max(-0.75, Math.min(0.75, (dx / dist) * 0.75));
          lookOffsetY = Math.max(-0.65, Math.min(0.65, (dy / dist) * 0.65));
        }
      }

      if (this.state === 'looking_up' || this.state === 'climbing_ladder' || this.state === 'pocket_ladder_deploy') {
        lookOffsetY = -0.65;
        lookOffsetX = 0.2;
      }

      const isScared = this.isFleeing;
      const eyeRx = isScared ? 2.2 : 1.6;
      const eyeRy = isScared ? 2.1 : 1.5;

      this.ctx.fillStyle = '#fff4ed';
      this.ctx.beginPath();
      this.ctx.ellipse(2.7, headY - 0.5, eyeRx, eyeRy, 0, 0, Math.PI * 2);
      this.ctx.fill();

      this.ctx.fillStyle = '#1c1511';
      this.ctx.beginPath();
      this.ctx.arc(2.7 + lookOffsetX, headY - 0.5 + lookOffsetY, isScared ? 0.95 : 0.75, 0, Math.PI * 2);
      this.ctx.fill();
    }

    // --- E. ARMS (DYNAMIC BY ANIMATION) ---
    this.ctx.strokeStyle = charColor;
    this.ctx.lineWidth = 2.8;

    if (this.state === 'running' || this.state === 'falling') {
      const armSwing = Math.sin(this.runCycle) * 7.5;
      this.ctx.beginPath();
      this.ctx.moveTo(4, torsoTop + 3);
      this.ctx.lineTo(8 - armSwing * 0.4, torsoTop + 10);
      this.ctx.lineTo(5 - armSwing, torsoTop + 15);
      this.ctx.stroke();

      this.ctx.beginPath();
      this.ctx.moveTo(-4, torsoTop + 3);
      this.ctx.lineTo(-8 + armSwing * 0.4, torsoTop + 10);
      this.ctx.lineTo(-5 + armSwing, torsoTop + 15);
      this.ctx.stroke();
    } else if (this.state === 'grabbed') {
      // Relaxed held arms slightly angled outward (no furious arm swing!)
      const armSway = Math.max(-2.5, Math.min(2.5, -this.vx * 0.4));
      this.ctx.beginPath();
      this.ctx.moveTo(4, torsoTop + 3);
      this.ctx.lineTo(7 + armSway * 0.5, torsoTop + 10);
      this.ctx.lineTo(7.5 + armSway, torsoTop + 16);
      this.ctx.stroke();

      this.ctx.beginPath();
      this.ctx.moveTo(-4, torsoTop + 3);
      this.ctx.lineTo(-7 + armSway * 0.5, torsoTop + 10);
      this.ctx.lineTo(-6.5 + armSway, torsoTop + 16);
      this.ctx.stroke();
    } else if (this.state === 'sitting_edge') {
      // Sitting relaxed arms: back arm propped on surface, front arm resting on lap
      this.ctx.beginPath();
      this.ctx.moveTo(-4, torsoTop + 3);
      this.ctx.lineTo(-8.5, torsoTop + 10);
      this.ctx.lineTo(-9.5, -1);
      this.ctx.stroke();

      this.ctx.beginPath();
      this.ctx.moveTo(4, torsoTop + 3);
      this.ctx.lineTo(7.5, torsoTop + 9);
      this.ctx.lineTo(4.5, -4);
      this.ctx.stroke();
    } else if (this.state === 'inspecting') {
      // Inspecting pose: back arm on knee, front arm scratching chin / beret in contemplation
      const scratch = Math.sin(performance.now() * 0.012) * 1.5;
      this.ctx.beginPath();
      this.ctx.moveTo(-4, torsoTop + 3);
      this.ctx.lineTo(-7.5, torsoTop + 10);
      this.ctx.lineTo(-5.5, -4);
      this.ctx.stroke();

      this.ctx.beginPath();
      this.ctx.moveTo(4, torsoTop + 3);
      this.ctx.lineTo(9.5, torsoTop - 3);
      this.ctx.lineTo(5.5 + scratch * 0.4, headY + 3.5 + scratch);
      this.ctx.stroke();

      this.ctx.fillStyle = charColor;
      this.ctx.beginPath();
      this.ctx.ellipse(5.5 + scratch * 0.4, headY + 3.5 + scratch, 2.0, 1.6, 0.3, 0, Math.PI * 2);
      this.ctx.fill();
    } else if (this.state === 'waving') {
      // Waving: back arm relaxed, front arm raised waving cheerily at user!
      this.ctx.beginPath();
      this.ctx.moveTo(-4.5, torsoTop + 3);
      this.ctx.lineTo(-6.5, torsoTop + 11);
      this.ctx.lineTo(-5.0, torsoTop + 16);
      this.ctx.stroke();

      const waveAngle = Math.sin(performance.now() * 0.012) * 5.5;
      this.ctx.beginPath();
      this.ctx.moveTo(4, torsoTop + 3);
      this.ctx.lineTo(9.5, torsoTop - 6);
      this.ctx.lineTo(11.5 + waveAngle, torsoTop - 18);
      this.ctx.stroke();

      this.ctx.fillStyle = charColor;
      this.ctx.beginPath();
      this.ctx.ellipse(12.5 + waveAngle, torsoTop - 19, 2.6, 2.1, waveAngle * 0.05, 0, Math.PI * 2);
      this.ctx.fill();
    } else if (this.state === 'stretching') {
      // Stretching: both arms reaching straight up into the sky!
      const stretchTremor = Math.sin(performance.now() * 0.02) * 0.6;
      this.ctx.beginPath();
      this.ctx.moveTo(-4, torsoTop + 3);
      this.ctx.lineTo(-7, torsoTop - 8);
      this.ctx.lineTo(-5 + stretchTremor, torsoTop - 21);
      this.ctx.stroke();

      this.ctx.beginPath();
      this.ctx.moveTo(4, torsoTop + 3);
      this.ctx.lineTo(7, torsoTop - 8);
      this.ctx.lineTo(5 - stretchTremor, torsoTop - 21);
      this.ctx.stroke();

      this.ctx.fillStyle = charColor;
      this.ctx.beginPath();
      this.ctx.arc(-5 + stretchTremor, torsoTop - 22, 1.8, 0, Math.PI * 2);
      this.ctx.arc(5 - stretchTremor, torsoTop - 22, 1.8, 0, Math.PI * 2);
      this.ctx.fill();
    } else if (this.state === 'balancing') {
      // Balancing: arms spread wide horizontally like a tightrope walker
      const armWobble = Math.sin(performance.now() * 0.0035) * 3.5;
      this.ctx.beginPath();
      this.ctx.moveTo(-4, torsoTop + 3);
      this.ctx.lineTo(-12, torsoTop + 4 - armWobble);
      this.ctx.lineTo(-19, torsoTop + 5 - armWobble * 1.4);
      this.ctx.stroke();

      this.ctx.beginPath();
      this.ctx.moveTo(4, torsoTop + 3);
      this.ctx.lineTo(12, torsoTop + 4 + armWobble);
      this.ctx.lineTo(19, torsoTop + 5 + armWobble * 1.4);
      this.ctx.stroke();
    } else if (this.state === 'in_jump') {
      // Reaching up joyfully in jump
      this.ctx.beginPath();
      this.ctx.moveTo(-4, torsoTop + 3);
      this.ctx.lineTo(-8, torsoTop - 6);
      this.ctx.lineTo(-6, torsoTop - 15);
      this.ctx.stroke();

      this.ctx.beginPath();
      this.ctx.moveTo(4, torsoTop + 3);
      this.ctx.lineTo(8, torsoTop - 6);
      this.ctx.lineTo(6, torsoTop - 15);
      this.ctx.stroke();
    } else if (this.state === 'crouch' || this.state === 'skid') {
      this.ctx.beginPath();
      this.ctx.moveTo(-4, torsoTop + 3);
      this.ctx.lineTo(-9, torsoTop + 9);
      this.ctx.lineTo(-12, torsoTop + 14);
      this.ctx.stroke();

      this.ctx.beginPath();
      this.ctx.moveTo(4, torsoTop + 3);
      this.ctx.lineTo(-1, torsoTop + 9);
    } else if (this.state === 'building_ladder' || this.state === 'pocket_ladder_deploy') {
      const deployTime = this.deployTimer || this.buildTimer || 0;
      if (deployTime < 0.22) {
        // Phase 1: Reaching into pocket behind coat and pulling out folded ladder!
        // Left hand resting on front/hip
        this.ctx.beginPath();
        this.ctx.moveTo(-4, torsoTop + 3);
        this.ctx.lineTo(-7, torsoTop + 7);
        this.ctx.lineTo(-5, torsoTop + 10);
        this.ctx.stroke();
        this.ctx.fillStyle = charColor;
        this.ctx.beginPath();
        this.ctx.arc(-5, torsoTop + 10, 2.0, 0, Math.PI * 2);
        this.ctx.fill();

        // Right hand reaching down into back coat pocket
        this.ctx.beginPath();
        this.ctx.moveTo(4, torsoTop + 3);
        this.ctx.lineTo(8, torsoTop + 8);
        this.ctx.lineTo(6, torsoTop + 13);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.arc(6, torsoTop + 13, 2.0, 0, Math.PI * 2);
        this.ctx.fill();

        // Compact folded wooden ladder bundle emerging from pocket
        this.ctx.save();
        this.ctx.translate(6, torsoTop + 13);
        this.ctx.rotate(0.35);
        this.ctx.strokeStyle = '#5c4033';
        this.ctx.lineWidth = 2.0;
        this.ctx.beginPath();
        this.ctx.moveTo(-3, -5);
        this.ctx.lineTo(-3, 5);
        this.ctx.moveTo(3, -5);
        this.ctx.lineTo(3, 5);
        this.ctx.moveTo(-3, -2);
        this.ctx.lineTo(3, -2);
        this.ctx.moveTo(-3, 2);
        this.ctx.lineTo(3, 2);
        this.ctx.stroke();
        this.ctx.restore();
      } else {
        // Phase 2: Planting base and guiding ladder extending upward!
        // Both arms holding and guiding the expanding ladder
        this.ctx.beginPath();
        this.ctx.moveTo(-4, torsoTop + 3);
        this.ctx.lineTo(2, torsoTop + 4);
        this.ctx.lineTo(7, torsoTop + 3);
        this.ctx.stroke();
        this.ctx.fillStyle = charColor;
        this.ctx.beginPath();
        this.ctx.arc(7, torsoTop + 3, 2.0, 0, Math.PI * 2);
        this.ctx.fill();

        this.ctx.beginPath();
        this.ctx.moveTo(4, torsoTop + 3);
        this.ctx.lineTo(8, torsoTop + 3);
        this.ctx.lineTo(12, torsoTop + 2);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.arc(12, torsoTop + 2, 2.0, 0, Math.PI * 2);
        this.ctx.fill();
      }
    } else if (this.state === 'climbing_ladder') {
      const climbPhase = this.climbTimer * 4.8;
      const armA = Math.sin(climbPhase + Math.PI);
      const armB = Math.sin(climbPhase);

      // Left arm reaches up to left rail
      const handAy = torsoTop - 6 + Math.max(-8, armA * 8);
      this.ctx.beginPath();
      this.ctx.moveTo(-4, torsoTop + 3);
      this.ctx.lineTo(-9, torsoTop - 1 + armA * 4);
      this.ctx.lineTo(-10.5, handAy);
      this.ctx.stroke();

      this.ctx.fillStyle = charColor;
      this.ctx.beginPath();
      this.ctx.arc(-10.5, handAy, 2.2, 0, Math.PI * 2);
      this.ctx.fill();

      // Right arm reaches up to right rail
      const handBy = torsoTop - 6 + Math.max(-8, armB * 8);
      this.ctx.beginPath();
      this.ctx.moveTo(4, torsoTop + 3);
      this.ctx.lineTo(9, torsoTop - 1 + armB * 4);
      this.ctx.lineTo(10.5, handBy);
      this.ctx.stroke();

      this.ctx.fillStyle = charColor;
      this.ctx.beginPath();
      this.ctx.arc(10.5, handBy, 2.2, 0, Math.PI * 2);
      this.ctx.fill();
    } else if (this.state === 'sitting_ladder_top') {
      if (this.isWaving) {
        // Holding rail with back hand
        this.ctx.beginPath();
        this.ctx.moveTo(-4, torsoTop + 3);
        this.ctx.lineTo(-8.5, torsoTop + 9);
        this.ctx.lineTo(-10, 0);
        this.ctx.stroke();

        this.ctx.fillStyle = charColor;
        this.ctx.beginPath();
        this.ctx.arc(-10, 0, 2.0, 0, Math.PI * 2);
        this.ctx.fill();

        // Front arm waving cheerily high in air!
        const waveAngle = Math.sin(performance.now() * 0.012) * 5.5;
        this.ctx.beginPath();
        this.ctx.moveTo(4, torsoTop + 3);
        this.ctx.lineTo(9.5, torsoTop - 6);
        this.ctx.lineTo(11.5 + waveAngle, torsoTop - 18);
        this.ctx.stroke();

        this.ctx.fillStyle = charColor;
        this.ctx.beginPath();
        this.ctx.ellipse(12.5 + waveAngle, torsoTop - 19, 2.6, 2.1, waveAngle * 0.05, 0, Math.PI * 2);
        this.ctx.fill();
      } else {
        // Resting hands on knees or top rung
        this.ctx.beginPath();
        this.ctx.moveTo(-4, torsoTop + 3);
        this.ctx.lineTo(-8, torsoTop + 9);
        this.ctx.lineTo(-9.5, 0);
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.moveTo(4, torsoTop + 3);
        this.ctx.lineTo(8, torsoTop + 9);
        this.ctx.lineTo(9.5, 0);
        this.ctx.stroke();

        this.ctx.fillStyle = charColor;
        this.ctx.beginPath();
        this.ctx.arc(-9.5, 0, 2.0, 0, Math.PI * 2);
        this.ctx.arc(9.5, 0, 2.0, 0, Math.PI * 2);
        this.ctx.fill();
      }
    } else if (this.state === 'swinging_stick_hang') {
      // Both arms reaching straight up and tightly gripping the stick overhead
      const hangY = torsoTop - 12;

      // Left arm
      this.ctx.beginPath();
      this.ctx.moveTo(-4, torsoTop + 3);
      this.ctx.lineTo(-5.5, torsoTop - 4);
      this.ctx.lineTo(-5.0, hangY);
      this.ctx.stroke();

      this.ctx.fillStyle = charColor;
      this.ctx.beginPath();
      this.ctx.arc(-5.0, hangY, 2.3, 0, Math.PI * 2);
      this.ctx.fill();

      // Right arm
      this.ctx.beginPath();
      this.ctx.moveTo(4, torsoTop + 3);
      this.ctx.lineTo(5.5, torsoTop - 4);
      this.ctx.lineTo(5.0, hangY);
      this.ctx.stroke();

      this.ctx.fillStyle = charColor;
      this.ctx.beginPath();
      this.ctx.arc(5.0, hangY, 2.3, 0, Math.PI * 2);
      this.ctx.fill();
    } else if (this.state === 'swinging_stick_sit') {
      // Arms holding onto the stick beside hips while sitting
      this.ctx.beginPath();
      this.ctx.moveTo(-4, torsoTop + 3);
      this.ctx.lineTo(-7, torsoTop + 10);
      this.ctx.lineTo(-8, 0);
      this.ctx.stroke();

      this.ctx.fillStyle = charColor;
      this.ctx.beginPath();
      this.ctx.arc(-8, 0, 2.2, 0, Math.PI * 2);
      this.ctx.fill();

      this.ctx.beginPath();
      this.ctx.moveTo(4, torsoTop + 3);
      this.ctx.lineTo(7, torsoTop + 10);
      this.ctx.lineTo(8, 0);
      this.ctx.stroke();

      this.ctx.fillStyle = charColor;
      this.ctx.beginPath();
      this.ctx.arc(8, 0, 2.2, 0, Math.PI * 2);
      this.ctx.fill();
    } else {
      // Relaxed standing idle arms
      const idleArm = Math.sin(performance.now() * 0.003) * 1.2;
      this.ctx.beginPath();
      this.ctx.moveTo(-4.5, torsoTop + 3);
      this.ctx.lineTo(-6, torsoTop + 11 + idleArm);
      this.ctx.lineTo(-5, torsoTop + 17 + idleArm);
      this.ctx.stroke();

      this.ctx.beginPath();
      this.ctx.moveTo(4.5, torsoTop + 3);
      this.ctx.lineTo(6, torsoTop + 11 - idleArm);
      this.ctx.lineTo(5, torsoTop + 17 - idleArm);
      this.ctx.stroke();
    }

    this.ctx.restore();
  }

  // --- 4. LYING DOWN DRAWING ROUTINE (ЛЕЖИТ) ---
  drawLying() {
    const charColor = '#2b211a';
    const breathBob = Math.sin(performance.now() * 0.0025) * 1.2;
    const charY = this.baseY - 1;

    this.ctx.save();
    this.ctx.translate(this.x, charY);
    if (this.attachedObstacle?.type === 'card' && this.surfaceAngle) {
      this.ctx.rotate(this.surfaceAngle);
    }
    this.ctx.scale(this.facing, 1);

    this.ctx.fillStyle = charColor;
    this.ctx.strokeStyle = charColor;
    this.ctx.lineCap = 'round';
    this.ctx.lineJoin = 'round';

    // Horizontal Torso resting on floor
    this.ctx.beginPath();
    if (this.ctx.roundRect) {
      this.ctx.roundRect(-8, -10 + breathBob * 0.5, 17, 9, 3.5);
    } else {
      this.ctx.rect(-8, -10 + breathBob * 0.5, 17, 9);
    }
    this.ctx.fill();

    // Head resting on ground with beret
    const headX = -13;
    const headY = -6;
    this.ctx.beginPath();
    this.ctx.arc(headX, headY, 6.2, 0, Math.PI * 2);
    this.ctx.fill();

    // Beret tilted against floor
    this.ctx.fillStyle = '#1c1511';
    this.ctx.beginPath();
    this.ctx.ellipse(headX - 1, headY - 4.5, 6.8, 3.0, -0.4, 0, Math.PI * 2);
    this.ctx.fill();

    // Peaceful sleeping closed eye (curved line)
    this.ctx.strokeStyle = '#fff4ed';
    this.ctx.lineWidth = 1.2;
    this.ctx.beginPath();
    this.ctx.arc(headX + 2, headY - 0.5, 1.4, 0.2, Math.PI * 0.85);
    this.ctx.stroke();

    // Scarf draped on ground
    this.ctx.strokeStyle = '#423328';
    this.ctx.lineWidth = 2.4;
    this.ctx.beginPath();
    this.ctx.moveTo(-8, -6);
    this.ctx.lineTo(-7, -1);
    this.ctx.lineTo(-3, 0);
    this.ctx.stroke();

    // Relaxed legs: one stretched out, one comfortably bent upward
    this.ctx.strokeStyle = charColor;
    this.ctx.lineWidth = 3.2;

    // Bottom straight leg
    this.ctx.beginPath();
    this.ctx.moveTo(9, -6);
    this.ctx.lineTo(21, -3);
    this.ctx.stroke();
    this.ctx.beginPath();
    this.ctx.ellipse(22, -3, 3.0, 1.8, 0, 0, Math.PI * 2);
    this.ctx.fill();

    // Top relaxed bent leg (chill pose)
    this.ctx.beginPath();
    this.ctx.moveTo(9, -6);
    this.ctx.lineTo(15, -12);
    this.ctx.lineTo(20, -3);
    this.ctx.stroke();
    this.ctx.beginPath();
    this.ctx.ellipse(21, -3, 3.0, 1.8, 0, 0, Math.PI * 2);
    this.ctx.fill();

    // Arm tucked under head like pillow
    this.ctx.lineWidth = 2.6;
    this.ctx.beginPath();
    this.ctx.moveTo(-6, -7);
    this.ctx.lineTo(-11, -3);
    this.ctx.lineTo(-14, -5);
    this.ctx.stroke();

    // Arm resting over belly
    this.ctx.beginPath();
    this.ctx.moveTo(-4, -9);
    this.ctx.lineTo(2, -8 + breathBob);
    this.ctx.lineTo(0, -5 + breathBob);
    this.ctx.stroke();

    this.ctx.restore();
  }

  tick(dt = 0.016) {
    this.updatePhysics(dt);
    this.draw();
  }

  loop() {
    if (this.drivenByApp) return;
    this.tick(0.016);
    requestAnimationFrame(() => this.loop());
  }

  destroy() {
    this.drivenByApp = true;
    if (this.canvas && this.canvas.parentNode) {
      this.canvas.parentNode.removeChild(this.canvas);
    }
    if (window.__character === this) window.__character = null;
    if (window.__jumpingCharacter === this) window.__jumpingCharacter = null;
    if (window.__character_ai?.character === this) window.__character_ai = null;
  }
}
