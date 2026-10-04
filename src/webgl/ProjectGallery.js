import * as THREE from 'three';
import gsap from 'gsap';
import { ProjectCard } from './ProjectCard.js';
import { AmbientParticles } from './AmbientParticles.js';
import { Sticks } from './Sticks.js';
import { sounds } from '../components/SoundEffects.js';

export class ProjectGallery {
  constructor(sceneManager, projects, cursor, modal) {
    this.sm = sceneManager;
    this.projects = projects;
    this.cursor = cursor;
    this.modal = modal;

    this.cards = [];
    this.activeFilter = 'all';

    // Physics & inertia
    this.scroll = {
      current: 0,
      target: 0,
      ease: 0.085,
      velocity: 0,
      min: 0,
      max: 1000
    };

    // Drag interaction
    this.isDragging = false;
    this.dragStart = { y: 0, scrollStart: 0, time: 0 };
    this.dragVelocity = 0;
    this.lastDragY = 0;
    this.dragDistance = 0;

    // Raycaster for hover/click
    this.raycaster = new THREE.Raycaster();
    this.mouseNorm = new THREE.Vector2(-999, -999);
    this.mouseClient = { x: -9999, y: -9999 };
    this.isPointerOverUI = false;
    this.hoveredCard = null;

    // Main 3D container
    this.container = new THREE.Group();
    this.sm.scene.add(this.container);

    // Subtle organic ambient particles
    this.particles = new AmbientParticles(this.sm.scene);

    // Kinetic ambient beige sticks with flight aerodynamics inside gallery container
    this.sticks = new Sticks(this.container);

    // Floating Bottom CTA (Kwork order block)
    this.ctaElement = document.querySelector('.project-grid-cta');

    // Floating Project Filters pill
    this.filtersElement = document.querySelector('.project-filters');

    this.initCards();
    this.updateLayout(false);
    this.initEvents();
  }

  initCards() {
    this.projects.forEach((proj, idx) => {
      const card = new ProjectCard(proj, idx);
      this.cards.push(card);
      this.container.add(card.group);
    });
  }

  updateLayout(animate = true) {
    this.sticks?.onResize();
    const isMobile = window.innerWidth <= 800;
    const isLarge = window.innerWidth > 1400;

    const cols = isMobile ? 1 : 2;
    const gapX = isMobile ? 0 : (isLarge ? 80 : 56);
    const gapY = isMobile ? 95 : 140;

    const cardW = isMobile
      ? Math.min(window.innerWidth * 0.88, 420)
      : Math.min((window.innerWidth * 0.82 - gapX) / 2, isLarge ? 560 : 490);
    const cardH = cardW / (1024 / 538);

    const activeCards = this.cards.filter(c => {
      if (this.activeFilter === 'all') return true;
      return c.project.categories.includes(this.activeFilter);
    });

    const colHeights = new Array(cols).fill(0);

    // Signature Unseen Studio column stagger
    if (!isMobile) {
      colHeights[1] = 135;
    }

    activeCards.forEach((card, idx) => {
      card.updateDimensions(cardW, cardH);

      const col = idx % cols;
      let x = 0;
      if (!isMobile) {
        x = col === 0 ? -cardW / 2 - gapX / 2 : cardW / 2 + gapX / 2;
      }

      const y = -colHeights[col];
      colHeights[col] += cardH + gapY;

      card.targetPos.set(x, y, 0);

      if (animate) {
        gsap.to(card.group.position, {
          x,
          y,
          duration: 0.8,
          ease: 'power3.out'
        });
      } else {
        card.group.position.set(x, y, 0);
      }
    });

    const maxHeight = Math.max(...colHeights);
    this.scroll.max = Math.max(0, maxHeight - window.innerHeight * 0.55);
    this.sticks?.onResize(maxHeight);
  }

  initEvents() {
    // Wheel scroll
    window.addEventListener(
      'wheel',
      (e) => {
        const loader = document.querySelector('.loader');
        if (loader && !loader.classList.contains('is-loaded')) return;
        if (document.documentElement.classList.contains('is-project-open')) return;
        this.scroll.target += e.deltaY * 0.85;
        this.clampScroll();
      },
      { passive: true }
    );

    // Pointer events for Drag
    const onPointerDown = (clientX, clientY, e) => {
      const loader = document.querySelector('.loader');
      if (loader && !loader.classList.contains('is-loaded')) return;
      if (document.documentElement.classList.contains('is-project-open')) return;

      if (window.__app?.character?.isPointerOverCharacter(clientX, clientY) || window.__app?.character?.isDragging) {
        return;
      }
      const target = e?.target || (clientX >= 0 && clientY >= 0 ? document.elementFromPoint(clientX, clientY) : null);
      if (target && target.closest('.header, .project-filters__inner, .project-filters__title, .project-grid-cta, .menu, .project-modal, .project-screen, .project-viewer, .loader, button, a, [data-cursor="pointer"], .interactive')) {
        return;
      }
      this.isDragging = true;
      this.dragStart.y = clientY;
      this.dragStart.scrollStart = this.scroll.target;
      this.dragStart.time = performance.now();
      this.lastDragY = clientY;
      this.dragDistance = 0;
      this.dragVelocity = 0;
    };

    const onPointerMove = (clientX, clientY, e) => {
      this.mouseClient.x = clientX;
      this.mouseClient.y = clientY;
      this.mouseNorm.x = (clientX / window.innerWidth) * 2 - 1;
      this.mouseNorm.y = -(clientY / window.innerHeight) * 2 + 1;

      if (window.__app?.character?.isDragging) {
        this.isDragging = false;
        return;
      }

      this.checkPointerOverUI(e?.target);

      // Update ambient particle drift
      this.particles.setMouse(this.mouseNorm.x, this.mouseNorm.y);
      this.sticks.setMouse(this.mouseNorm.x, this.mouseNorm.y);

      if (this.isDragging) {
        const delta = this.dragStart.y - clientY;
        this.dragDistance += Math.abs(delta);
        
        const now = performance.now();
        const dt = Math.max(1, now - this.dragStart.time);
        this.dragVelocity = (this.lastDragY - clientY) / dt;
        this.lastDragY = clientY;
        this.dragStart.time = now;

        this.scroll.target = this.dragStart.scrollStart + delta * 1.4;
        this.clampScroll();
      }
    };

    const onPointerUp = () => {
      if (this.isDragging) {
        this.isDragging = false;
        if (Math.abs(this.dragVelocity) > 0.1) {
          this.scroll.target += this.dragVelocity * 280;
          this.clampScroll();
        }
      }
    };

    window.addEventListener('mousedown', (e) => onPointerDown(e.clientX, e.clientY, e));
    window.addEventListener('mousemove', (e) => onPointerMove(e.clientX, e.clientY, e));
    window.addEventListener('mouseup', onPointerUp);

    window.addEventListener('touchstart', (e) => onPointerDown(e.touches[0].clientX, e.touches[0].clientY, e), { passive: true });
    window.addEventListener('touchmove', (e) => onPointerMove(e.touches[0].clientX, e.touches[0].clientY, e), { passive: true });
    window.addEventListener('touchend', onPointerUp);

    // Keyboard Navigation
    window.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        this.scroll.target += 220;
        this.clampScroll();
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        this.scroll.target -= 220;
        this.clampScroll();
      }
    });

    window.addEventListener('resize', () => {
      this.updateLayout(false);
    });

    // Click on canvas
    this.sm.canvas.addEventListener('click', (e) => {
      const loader = document.querySelector('.loader');
      if (loader && !loader.classList.contains('is-loaded')) return;
      if (document.documentElement.classList.contains('is-project-open')) return;

      if (this.dragDistance > 12) return;
      if (window.__app?.character?.isPointerOverCharacter(e.clientX, e.clientY) || window.__app?.character?.isDragging) return;
      if (this.checkPointerOverUI(e?.target)) return;
      if (this.hoveredCard) {
        this.modal.open(this.hoveredCard.project);
      }
    });
  }

  checkPointerOverUI(hintTarget) {
    const loader = document.querySelector('.loader');
    if (loader && !loader.classList.contains('is-loaded')) {
      this.isPointerOverUI = true;
      return true;
    }

    if (document.documentElement.classList.contains('is-project-open') || document.querySelector('.project-screen.is-active, .project-viewer.is-active')) {
      this.isPointerOverUI = true;
      return true;
    }

    if (window.__app?.character?.isPointerOverCharacter(this.mouseClient.x, this.mouseClient.y) || window.__app?.character?.isDragging) {
      this.isPointerOverUI = true;
      return true;
    }
    let el = hintTarget;
    if (!el && this.mouseClient.x >= 0 && this.mouseClient.y >= 0) {
      el = document.elementFromPoint(this.mouseClient.x, this.mouseClient.y);
    }
    if (!el) {
      this.isPointerOverUI = false;
      return false;
    }

    const isUI = Boolean(
      el.closest(
        '.header, .project-filters__inner, .project-filters__title, .project-grid-cta, .menu, .project-modal, .project-screen, .project-viewer, .loader, button, a, [data-cursor="pointer"], .interactive'
      )
    );
    this.isPointerOverUI = isUI;
    return isUI;
  }

  clampScroll() {
    this.scroll.target = Math.max(-60, Math.min(this.scroll.target, this.scroll.max + 60));
  }

  getCardScreenRects() {
    if (!this.cards || !this.sm?.camera) return [];

    const camera = this.sm.camera;
    const width = window.innerWidth;
    const height = window.innerHeight;

    return this.cards
      .filter(c => c.isVisible && c.group?.visible && c.mesh)
      .map(card => {
        // Ensure mesh world matrix reflects real-time 3D tilt, rotation, and scroll
        card.mesh.updateWorldMatrix(true, false);

        const hw = card.width / 2;
        const hh = card.height / 2;

        const project = (lx, ly, lz = 0) => {
          const v = new THREE.Vector3(lx, ly, lz);
          v.applyMatrix4(card.mesh.matrixWorld);
          v.project(camera);
          return {
            x: (v.x * 0.5 + 0.5) * width,
            y: (-v.y * 0.5 + 0.5) * height,
            z: v.z
          };
        };

        const tl = project(-hw, hh);
        const tr = project(hw, hh);
        const br = project(hw, -hh);
        const bl = project(-hw, -hh);
        const center = project(0, 0);

        // Top surface ledge slope and angle (in screen radians)
        const topDx = tr.x - tl.x;
        const topDy = tr.y - tl.y;
        const topAngle = Math.atan2(topDy, topDx);
        const topLength = Math.hypot(topDx, topDy);

        // Screen AABB bounds enclosing the projected 3D quad
        const minX = Math.min(tl.x, tr.x, br.x, bl.x);
        const maxX = Math.max(tl.x, tr.x, br.x, bl.x);
        const minY = Math.min(tl.y, tr.y, br.y, bl.y);
        const maxY = Math.max(tl.y, tr.y, br.y, bl.y);

        const cornerRadius = 18.0;

        // Helper to get screen (x, y) on top ledge for any localX in [-hw, hw], with 3D rounded corners!
        const getLedgePoint = (localX) => {
          const clampedX = Math.max(-hw, Math.min(hw, localX));
          let ly = hh;
          let thetaLocal = 0;
          let isCorner = false;
          let cornerSide = 0;
          let slopeFactor = 0;

          if (clampedX < -hw + cornerRadius) {
            const dx = (-hw + cornerRadius) - clampedX;
            if (dx > 0) {
              const dy = cornerRadius - Math.sqrt(Math.max(0, cornerRadius * cornerRadius - dx * dx));
              ly = hh - dy;
              thetaLocal = -Math.atan2(dx, Math.sqrt(Math.max(0.01, cornerRadius * cornerRadius - dx * dx)));
              isCorner = true;
              cornerSide = -1;
              slopeFactor = Math.min(1.0, dx / cornerRadius);
            }
          } else if (clampedX > hw - cornerRadius) {
            const dx = clampedX - (hw - cornerRadius);
            if (dx > 0) {
              const dy = cornerRadius - Math.sqrt(Math.max(0, cornerRadius * cornerRadius - dx * dx));
              ly = hh - dy;
              thetaLocal = Math.atan2(dx, Math.sqrt(Math.max(0.01, cornerRadius * cornerRadius - dx * dx)));
              isCorner = true;
              cornerSide = 1;
              slopeFactor = Math.min(1.0, dx / cornerRadius);
            }
          }

          const pt = project(clampedX, ly);
          pt.surfaceAngle = topAngle + thetaLocal;
          pt.isCorner = isCorner;
          pt.cornerSide = cornerSide;
          pt.slopeFactor = slopeFactor;
          pt.localX = clampedX;
          return pt;
        };

        // Helper to get screen Y on top ledge for a given screenX with rounded corners
        const getLedgeYAtScreenX = (screenX) => {
          const lx = screenXToLocalX(screenX);
          return getLedgePoint(lx).y;
        };

        // Helper to convert screenX to localX in [-hw, hw]
        const screenXToLocalX = (screenX) => {
          if (Math.abs(topDx) < 0.001) return 0;
          const t = Math.max(0, Math.min(1, (screenX - tl.x) / topDx));
          return -hw + t * (2 * hw);
        };

        return {
          id: card.project.id,
          title: card.project.title,
          x: center.x,
          y: center.y,
          width: topLength,
          height: maxY - minY,
          left: minX,
          right: maxX,
          top: minY,
          bottom: maxY,
          corners: { tl, tr, br, bl },
          topLedge: {
            x1: tl.x,
            y1: tl.y,
            x2: tr.x,
            y2: tr.y,
            angle: topAngle,
            length: topLength
          },
          hw,
          hh,
          getLedgePoint,
          getLedgeYAtScreenX,
          screenXToLocalX,
          cardRef: card
        };
      });
  }

  getSticksScreenSegments() {
    return this.sticks?.getStickScreenSegments() || [];
  }

  filter(category) {
    if (this.activeFilter === category) return;
    this.activeFilter = category;

    let delayCounter = 0;
    this.cards.forEach((card) => {
      const match = category === 'all' || card.project.categories.includes(category);
      if (match) {
        card.setVisible(true, delayCounter * 0.035);
        delayCounter++;
      } else {
        card.setVisible(false);
      }
    });

    setTimeout(() => {
      this.updateLayout(true);
      // Preserve current scroll position, smoothly adjusting only if exceeding new max
      if (this.scroll.target > this.scroll.max) {
        gsap.to(this.scroll, {
          target: this.scroll.max,
          duration: 0.45,
          ease: 'power2.out'
        });
      }
    }, 150);
  }

  update() {
    const prevScroll = this.scroll.current;
    this.scroll.current += (this.scroll.target - this.scroll.current) * this.scroll.ease;
    this.scroll.velocity = this.scroll.current - prevScroll;

    // Container position with top offset (gap reduced by 1.2x as requested)
    const isMobile = window.innerWidth <= 800;
    const topOffset = isMobile ? 75 : 95;
    this.container.position.y = this.scroll.current - topOffset;

    // Auto-hide filter bar as user scrolls down later, restore when returning to top
    if (this.filtersElement && !document.body.classList.contains('menu-open')) {
      const isMobile = window.innerWidth <= 800;
      const hideThreshold = isMobile ? 180 : 240;
      const showThreshold = isMobile ? 140 : 190;
      if (this.scroll.current > hideThreshold) {
        this.filtersElement.classList.add('is-hidden');
      } else if (this.scroll.current < showThreshold) {
        this.filtersElement.classList.remove('is-hidden');
      }
    }

    // Update Bottom Floating CTA visibility on scroll:
    // Appears smoothly roughly on the last card, and disappears smoothly when scrolling back up
    if (this.ctaElement && !document.body.classList.contains('menu-open')) {
      const activeCards = this.cards.filter(c => c.isVisible && c.group.visible);
      const lastCard = activeCards.length > 0 ? activeCards[activeCards.length - 1] : null;

      let isAtLastCard = false;
      if (this.scroll.max <= 80) {
        // When there are few cards that fit on the screen without scrolling
        isAtLastCard = true;
      } else if (lastCard) {
        // World Y of last card center in camera/scene space
        const lastCardWorldY = lastCard.group.position.y + this.container.position.y;
        // Screen Y (0 = top of screen, window.innerHeight = bottom of screen)
        const lastCardScreenY = -lastCardWorldY + window.innerHeight * 0.5;

        // Triggers when the last card enters into the viewport (~lower portion of screen)
        // Calibrated so it appears specifically on the last card, and hides promptly when scrolling back up
        const isCurrentlyHidden = this.ctaElement.classList.contains('is-hidden');
        const showThreshold = window.innerHeight - 30;
        const hideThreshold = window.innerHeight;

        if (isCurrentlyHidden) {
          isAtLastCard = lastCardScreenY <= showThreshold;
        } else {
          isAtLastCard = lastCardScreenY < hideThreshold;
        }
      } else {
        // Fallback based on scroll.max
        const trigger = Math.max(80, this.scroll.max - 260);
        isAtLastCard = this.scroll.current >= trigger;
      }

      if (isAtLastCard) {
        this.ctaElement.classList.remove('is-hidden');
      } else {
        this.ctaElement.classList.add('is-hidden');
      }
    }

    // Pass scroll velocity for fluid wave deformation to cards
    const clampedVelocity = Math.max(-14, Math.min(14, this.scroll.velocity));
    this.cards.forEach((card) => {
      if (card.group.visible) {
        card.setScrollSpeed(clampedVelocity * 0.0035);
        // Execute smooth inertia hover/tilt lerping
        card.update();
      }
    });

    // Update ambient particles & sticks
    this.particles.update(performance.now() * 0.001);
    this.sticks.update(performance.now() * 0.001, this.container.position.y, this.cards);

    // If pointer is over any UI element (top panel, filter pill, buttons, links, or active preloader), UI takes priority!
    this.checkPointerOverUI();

    if (this.isPointerOverUI) {
      if (this.hoveredCard) {
        this.hoveredCard.setHover(false);
        this.hoveredCard = null;
      }
      if (this.cursor && (this.cursor.state === 'is-drag' || this.cursor.state === 'is-video')) {
        this.cursor.setState('default');
      }
      return;
    }

    // Raycast against card meshes
    this.raycaster.setFromCamera(this.mouseNorm, this.sm.camera);
    const activeMeshes = this.cards
      .filter(c => c.isVisible && c.group.visible)
      .map(c => c.mesh);

    const intersects = this.raycaster.intersectObjects(activeMeshes);

    if (intersects.length > 0) {
      const hit = intersects[0];
      const hitCard = hit.object.userData.card;

      if (this.hoveredCard !== hitCard) {
        if (this.hoveredCard) this.hoveredCard.setHover(false);
        this.hoveredCard = hitCard;
        this.hoveredCard.setHover(true);
        sounds.playRatchet();

        if (this.hoveredCard.project.video) {
          this.cursor.setState('is-video');
        } else {
          this.cursor.setState('is-drag');
        }
      }

      // Calculate relative cursor position inside the card (-1 to 1)
      const intersectPoint = hit.point;
      const cardCenter = new THREE.Vector3();
      this.hoveredCard.mesh.getWorldPosition(cardCenter);

      const normX = Math.max(-1, Math.min(1, (intersectPoint.x - cardCenter.x) / (this.hoveredCard.width / 2)));
      const normY = Math.max(-1, Math.min(1, (intersectPoint.y - cardCenter.y) / (this.hoveredCard.height / 2)));

      this.hoveredCard.setCursorPosition(normX, normY, hit.uv);
    } else {
      if (this.hoveredCard) {
        this.hoveredCard.setHover(false);
        this.hoveredCard = null;
        this.cursor.setState('default');
      }
    }
  }
}
