/* ==========================================================================
   KUN AMRA PORTFOLIO — INTERACTIVE ANIMATIONS & IT DIAGNOSTICS ENGINE
   ========================================================================== */

(() => {
  'use strict';

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ------------------------------------------------------------------------
     1. Preloader Handshake
     ------------------------------------------------------------------------ */
  const preloader = document.getElementById('preloader');
  if (preloader) {
    const dismissPreloader = () => preloader.classList.add('is-done');
    if (prefersReducedMotion) {
      dismissPreloader();
    } else {
      window.addEventListener('load', () => setTimeout(dismissPreloader, 720));
      setTimeout(dismissPreloader, 1600);
    }
  }

  /* ------------------------------------------------------------------------
     2. Theme Switcher (Dark NOC / Clean Light)
     ------------------------------------------------------------------------ */
  const rootEl = document.documentElement;
  const themeToggle = document.getElementById('themeToggle');
  const savedTheme = localStorage.getItem('kun-amra-theme');
  if (savedTheme === 'light' || savedTheme === 'dark') {
    rootEl.setAttribute('data-theme', savedTheme);
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const next = rootEl.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      rootEl.setAttribute('data-theme', next);
      localStorage.setItem('kun-amra-theme', next);
      showToast(`Theme switched to ${next.toUpperCase()} mode`);
    });
  }

  /* ------------------------------------------------------------------------
     3. Toast Notification & One-Click Clipboard Copy
     ------------------------------------------------------------------------ */
  const toastEl = document.getElementById('toast');
  let toastTimer;

  function showToast(message) {
    if (!toastEl) return;
    toastEl.textContent = message;
    toastEl.classList.add('is-shown');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.classList.remove('is-shown'), 2600);
  }

  document.querySelectorAll('[data-copy]').forEach((btn) => {
    btn.addEventListener('click', async () => {
      const value = btn.getAttribute('data-copy');
      if (!value) return;
      try {
        await navigator.clipboard.writeText(value);
        showToast(`Copied to clipboard: ${value}`);
      } catch {
        const temp = document.createElement('textarea');
        temp.value = value;
        document.body.appendChild(temp);
        temp.select();
        document.execCommand('copy');
        temp.remove();
        showToast(`Copied: ${value}`);
      }
    });
  });

  /* ------------------------------------------------------------------------
     4. Sticky Header, Scroll Progress Bar, Mobile Drawer & Active Nav Spy
     ------------------------------------------------------------------------ */
  const siteHeader = document.getElementById('siteHeader');
  const scrollProgress = document.getElementById('scrollProgress');
  const menuToggle = document.getElementById('menuToggle');
  const mobileNav = document.getElementById('mobileNav');
  const navLinks = Array.from(document.querySelectorAll('.main-nav .nav-link'));
  const observedSections = navLinks
    .map((link) => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  function onScroll() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? Math.min(100, (scrollTop / docHeight) * 100) : 0;

    if (scrollProgress) scrollProgress.style.width = `${pct.toFixed(2)}%`;
    if (siteHeader) siteHeader.classList.toggle('is-scrolled', scrollTop > 28);

    // Highlight current section link
    let currentId = '';
    for (const sec of observedSections) {
      const top = sec.offsetTop - 140;
      if (scrollTop >= top) currentId = sec.id;
    }
    navLinks.forEach((link) => {
      link.classList.toggle('active', link.getAttribute('href') === `#${currentId}`);
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  if (menuToggle && mobileNav) {
    const closeMenu = () => {
      menuToggle.classList.remove('is-open');
      mobileNav.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
    };
    menuToggle.addEventListener('click', () => {
      const open = !mobileNav.classList.contains('is-open');
      menuToggle.classList.toggle('is-open', open);
      mobileNav.classList.toggle('is-open', open);
      menuToggle.setAttribute('aria-expanded', String(open));
    });
    mobileNav.querySelectorAll('a, button').forEach((item) => item.addEventListener('click', closeMenu));
  }

  /* ------------------------------------------------------------------------
     5. Hero Cipher Scramble Role Rotator
     ------------------------------------------------------------------------ */
  const roleEl = document.getElementById('roleScramble');
  if (roleEl) {
    let roles = ['IT Support Officer', 'Network Technician', 'CCTV & Infrastructure Specialist'];
    try {
      roles = JSON.parse(roleEl.getAttribute('data-roles') || '[]') || roles;
    } catch {
      /* fallback defaults */
    }

    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/_#';
    let roleIdx = 0;

    function scrambleTo(target) {
      if (prefersReducedMotion) {
        roleEl.textContent = target;
        return;
      }
      let frame = 0;
      const totalFrames = 22;
      const timer = setInterval(() => {
        const progress = frame / totalFrames;
        const settled = Math.floor(progress * target.length);
        let out = '';
        for (let i = 0; i < target.length; i++) {
          if (target[i] === ' ') {
            out += ' ';
          } else if (i < settled) {
            out += target[i];
          } else {
            out += chars[Math.floor(Math.random() * chars.length)];
          }
        }
        roleEl.textContent = out;
        frame++;
        if (frame > totalFrames) {
          clearInterval(timer);
          roleEl.textContent = target;
        }
      }, 34);
    }

    setInterval(() => {
      roleIdx = (roleIdx + 1) % roles.length;
      scrambleTo(roles[roleIdx]);
    }, 3800);
  }

  /* ------------------------------------------------------------------------
     6. Staggered Scroll Reveals, Timeline Rail & KPI Count-Up
     ------------------------------------------------------------------------ */
  const revealItems = document.querySelectorAll('.reveal');
  const skillsPanel = document.querySelector('.skills-panel');
  const experienceTimeline = document.getElementById('experienceTimeline');

  function animateCounter(el) {
    if (el.dataset.counted) return;
    el.dataset.counted = 'true';
    const target = Number(el.getAttribute('data-target') || 0);
    if (prefersReducedMotion || target <= 0) {
      el.textContent = String(target);
      return;
    }
    const startVal = target > 1000 ? target - 35 : 0;
    const duration = 950;
    const startTime = performance.now();

    function step(now) {
      const t = Math.min(1, (now - startTime) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      el.textContent = String(Math.round(startVal + (target - startVal) * eased));
      if (t < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          const delay = Number(el.getAttribute('data-delay') || 0);
          setTimeout(() => {
            el.classList.add('is-visible');
            el.querySelectorAll('.count-up').forEach(animateCounter);
          }, delay);
          observer.unobserve(el);
        });
      },
      { threshold: 0.14 }
    );

    revealItems.forEach((item) => observer.observe(item));
    if (skillsPanel) observer.observe(skillsPanel);
    if (experienceTimeline) observer.observe(experienceTimeline);
  } else {
    revealItems.forEach((item) => item.classList.add('is-visible'));
    if (skillsPanel) skillsPanel.classList.add('is-visible');
    if (experienceTimeline) experienceTimeline.classList.add('is-visible');
  }

  /* ------------------------------------------------------------------------
     7. Pointer Spotlight, 3D Card Tilt & Magnetic Buttons
     ------------------------------------------------------------------------ */
  if (!prefersReducedMotion && window.matchMedia('(pointer: fine)').matches) {
    document.querySelectorAll('.spotlight-card').forEach((card) => {
      card.addEventListener('pointermove', (e) => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--mx', `${e.clientX - rect.left}px`);
        card.style.setProperty('--my', `${e.clientY - rect.top}px`);
      });
    });

    document.querySelectorAll('.tilt-card').forEach((card) => {
      card.addEventListener('pointermove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = `perspective(950px) rotateX(${(-y * 7).toFixed(2)}deg) rotateY(${(x * 7).toFixed(2)}deg) translateY(-2px)`;
      });
      card.addEventListener('pointerleave', () => {
        card.style.transform = '';
      });
    });

    document.querySelectorAll('.magnetic').forEach((btn) => {
      btn.addEventListener('pointermove', (e) => {
        const rect = btn.getBoundingClientRect();
        const dx = (e.clientX - (rect.left + rect.width / 2)) * 0.18;
        const dy = (e.clientY - (rect.top + rect.height / 2)) * 0.22;
        btn.style.transform = `translate3d(${dx.toFixed(1)}px, ${dy.toFixed(1)}px, 0)`;
      });
      btn.addEventListener('pointerleave', () => {
        btn.style.transform = '';
      });
    });
  }

  /* ------------------------------------------------------------------------
     8. Interactive Network Topology Background Canvas
     ------------------------------------------------------------------------ */
  const canvas = document.getElementById('networkCanvas');
  if (canvas && !prefersReducedMotion) {
    const ctx = canvas.getContext('2d');
    let width = 0;
    let height = 0;
    let nodes = [];
    let pulses = [];
    const pointer = { x: -9999, y: -9999 };

    function resizeCanvas() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.min(58, Math.max(24, Math.floor((width * height) / 26000)));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.42,
        vy: (Math.random() - 0.5) * 0.42,
        r: Math.random() * 1.8 + 1.3,
      }));
    }

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('pointermove', (e) => {
      pointer.x = e.clientX;
      pointer.y = e.clientY;
    }, { passive: true });
    resizeCanvas();

    function spawnPulse(a, b) {
      if (pulses.length < 18 && Math.random() < 0.015) {
        pulses.push({ a, b, t: 0, speed: 0.018 + Math.random() * 0.018 });
      }
    }

    function renderFrame() {
      ctx.clearRect(0, 0, width, height);
      const isLight = rootEl.getAttribute('data-theme') === 'light';
      const nodeColor = isLight ? 'rgba(37, 99, 235, 0.45)' : 'rgba(34, 211, 238, 0.55)';
      const lineBase = isLight ? '37, 99, 235' : '56, 189, 248';
      const maxDist = 155;

      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.x += n.vx;
        n.y += n.vy;

        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;

        // Gentle pointer attraction/repulsion
        const pdx = pointer.x - n.x;
        const pdy = pointer.y - n.y;
        const pDist = Math.hypot(pdx, pdy);
        if (pDist < 170 && pDist > 1) {
          n.x -= (pdx / pDist) * 0.25;
          n.y -= (pdy / pDist) * 0.25;
        }

        // Draw links
        for (let j = i + 1; j < nodes.length; j++) {
          const m = nodes[j];
          const dist = Math.hypot(n.x - m.x, n.y - m.y);
          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * (isLight ? 0.16 : 0.24);
            ctx.strokeStyle = `rgba(${lineBase}, ${alpha.toFixed(3)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(m.x, m.y);
            ctx.stroke();
            spawnPulse(n, m);
          }
        }

        // Pointer link highlight
        if (pDist < 190) {
          const alpha = (1 - pDist / 190) * 0.38;
          ctx.strokeStyle = `rgba(34, 211, 238, ${alpha.toFixed(3)})`;
          ctx.lineWidth = 1.2;
          ctx.beginPath();
          ctx.moveTo(n.x, n.y);
          ctx.lineTo(pointer.x, pointer.y);
          ctx.stroke();
        }

        ctx.fillStyle = nodeColor;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw animated packet pulses along connected nodes
      pulses = pulses.filter((p) => p.t <= 1);
      for (const p of pulses) {
        const px = p.a.x + (p.b.x - p.a.x) * p.t;
        const py = p.a.y + (p.b.y - p.a.y) * p.t;
        ctx.fillStyle = isLight ? '#0891b2' : '#22d3ee';
        ctx.beginPath();
        ctx.arc(px, py, 2.2, 0, Math.PI * 2);
        ctx.fill();
        p.t += p.speed;
      }

      requestAnimationFrame(renderFrame);
    }

    requestAnimationFrame(renderFrame);
  }

  /* ------------------------------------------------------------------------
     9. Interactive Network & CCTV Topology Lab
     ------------------------------------------------------------------------ */
  const labTabs = document.querySelectorAll('.lab-tab');
  const topologyStage = document.getElementById('topologyStage');
  const labScenarioCode = document.getElementById('labScenarioCode');
  const labHealthBadge = document.getElementById('labHealthBadge');
  const labTitle = document.getElementById('labTitle');
  const labDesc = document.getElementById('labDesc');
  const labLatency = document.getElementById('labLatency');
  const labLoss = document.getElementById('labLoss');
  const labSpeed = document.getElementById('labSpeed');
  const labLog = document.getElementById('labLog');

  const scenarios = {
    normal: {
      code: 'MODE // STEADY_STATE',
      badge: 'UPTIME 99.98%',
      badgeClass: 'badge badge-emerald',
      title: 'Balanced Enterprise & Surveillance Fabric',
      desc: 'Clean separation between office workstations (VLAN 10), IP/Analog CCTV cameras feeding NVR storage (VLAN 20), and wireless access points (VLAN 30) over certified Cat6 cabling.',
      latency: '1.2 ms',
      loss: '0.00%',
      speed: '1000 Mbps',
      logs: [
        ['ok', '[PASS]', 'Router DHCP pool healthy (192.168.1.50 - .200)'],
        ['ok', '[PASS]', 'NVR recording active across all IP/Analog channels'],
        ['ok', '[PASS]', 'Cat5e/Cat6 terminations verified • 0 CRC errors'],
      ],
    },
    vlan: {
      code: 'MODE // VLAN_QOS_POLICY',
      badge: 'SEGMENTED',
      badgeClass: 'badge badge-cyan',
      title: 'VLAN Segmentation & Bandwidth Allocation',
      desc: 'Broadcast domains isolated via 802.1Q VLAN tagging on Layer 2/3 switches. Bandwidth limits keep wireless traffic from saturating critical NVR surveillance streams and domain workstations.',
      latency: '0.9 ms',
      loss: '0.00%',
      speed: '1000 Mbps',
      logs: [
        ['info', '[VLAN 10]', 'Workstations mapped to local domain & shared drives'],
        ['info', '[VLAN 20]', 'Guaranteed bandwidth reserved for CCTV NVR uplink'],
        ['ok', '[QoS]', 'AP guest/staff traffic throttled cleanly within policy'],
      ],
    },
    conflict: {
      code: 'MODE // INCIDENT_REMEDIATION',
      badge: 'RESOLVED',
      badgeClass: 'badge badge-amber',
      title: 'IP Conflict & Connectivity Drop Diagnostics',
      desc: 'Detected duplicate static IP on VLAN 10 workstation and loose RJ45 patch termination. Isolated port, reassigned DHCP reservation, re-terminated Cat6 connector, and restored zero-loss link.',
      latency: '1.4 ms',
      loss: '0.00%',
      speed: '1000 Mbps',
      logs: [
        ['warn', '[ALERT]', 'Duplicate ARP conflict detected on 10.10.10.42 -> isolated'],
        ['info', '[TRACE]', 'Tested Cat6 run; re-crimped RJ45 T568B termination'],
        ['ok', '[FIXED]', 'DHCP lease bound to MAC; workstation ping stable'],
      ],
    },
    cctv: {
      code: 'MODE // SURVEILLANCE_BACKUP',
      badge: 'REC ACTIVE',
      badgeClass: 'badge badge-blue',
      title: 'CCTV Site Alignment & NVR/DVR Redundancy',
      desc: 'Site camera angles aligned for zero blind spots across analog and IP cameras. Dual-stream feeds routed into NVR/DVR storage arrays with verified retention and continuous backup health.',
      latency: '1.6 ms',
      loss: '0.00%',
      speed: '1000 Mbps',
      logs: [
        ['info', '[SITE]', 'IP & Analog camera FOV verified with clean night clarity'],
        ['ok', '[NVR]', 'Storage array healthy • continuous video backup verified'],
        ['ok', '[NET]', 'Dedicated surveillance VLAN preventing packet congestion'],
      ],
    },
  };

  labTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const key = tab.getAttribute('data-scenario');
      const data = scenarios[key];
      if (!data || !topologyStage) return;

      labTabs.forEach((t) => {
        t.classList.toggle('active', t === tab);
        t.setAttribute('aria-selected', String(t === tab));
      });

      topologyStage.setAttribute('data-scenario', key);
      labScenarioCode.textContent = data.code;
      labHealthBadge.textContent = data.badge;
      labHealthBadge.className = data.badgeClass;
      labTitle.textContent = data.title;
      labDesc.textContent = data.desc;
      labLatency.textContent = data.latency;
      labLoss.textContent = data.loss;
      labSpeed.textContent = data.speed;

      labLog.innerHTML = '';
      data.logs.forEach(([cls, tag, msg]) => {
        const row = document.createElement('div');
        const span = document.createElement('span');
        span.className = cls;
        span.textContent = tag;
        row.appendChild(span);
        row.appendChild(document.createTextNode(` ${msg}`));
        labLog.appendChild(row);
      });
    });
  });

  /* ------------------------------------------------------------------------
     10. Filterable Technical Skills Matrix
     ------------------------------------------------------------------------ */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const skillCards = document.querySelectorAll('.skill-card');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const cat = btn.getAttribute('data-filter');
      filterBtns.forEach((b) => b.classList.toggle('active', b === btn));

      skillCards.forEach((card, idx) => {
        const match = cat === 'all' || card.getAttribute('data-category') === cat;
        card.classList.toggle('is-hidden', !match);
        if (match) {
          card.classList.remove('is-entering');
          void card.offsetWidth; // trigger reflow for smooth stagger
          card.style.animationDelay = `${idx * 45}ms`;
          card.classList.add('is-entering', 'is-visible');
        }
      });
    });
  });

  /* ------------------------------------------------------------------------
     11. Interactive kun@noc:~$ Terminal Emulator
     ------------------------------------------------------------------------ */
  const terminalOutput = document.getElementById('terminalOutput');
  const terminalForm = document.getElementById('terminalForm');
  const terminalInput = document.getElementById('terminalInput');
  const terminalClearBtn = document.getElementById('terminalClearBtn');
  const cmdHistory = [];
  let historyIdx = -1;

  const commands = {
    help: () => [
      { cls: 't-accent', text: 'Available commands:' },
      { cls: 't-muted', text: '  whoami          - Candidate identity & target role' },
      { cls: 't-muted', text: '  skills          - Core IT, networking & CCTV stack' },
      { cls: 't-muted', text: '  experience      - KTC Engineering & ITI field log' },
      { cls: 't-muted', text: '  education       - ITI Degrees & MLVT approvals' },
      { cls: 't-muted', text: '  vlan show       - Sample enterprise/CCTV VLAN map' },
      { cls: 't-muted', text: '  ping ktc-switch - Run live diagnostic ping simulation' },
      { cls: 't-muted', text: '  contact         - Phone, email, location & reference' },
      { cls: 't-muted', text: '  clear           - Clear console output' },
    ],
    whoami: () => [
      { cls: 't-ok', text: 'NAME     : Kun Amra' },
      { cls: 't-muted', text: 'ROLE     : IT Support Officer / Network Technician' },
      { cls: 't-muted', text: 'LOCATION : Sangkat Mean Chey, Khan Mean Chey, Phnom Penh' },
      { cls: 't-muted', text: 'DEGREE   : Bachelor of Technology in IT (ITI, 2023-2025)' },
    ],
    skills: () => [
      { cls: 't-accent', text: '[NETWORK]  Routers, L2/L3 Switches, APs, TCP/IP, DHCP, Subnetting' },
      { cls: 't-accent', text: '[SECURITY] VLAN Segmentation, Bandwidth Allocation' },
      { cls: 't-accent', text: '[SYSTEMS]  Windows OS Setup, Partitioning, Workstation Mapping, Domain' },
      { cls: 't-accent', text: '[CCTV]     Analog & IP Cameras, Site Layout, NVR/DVR Backup Storage' },
      { cls: 't-accent', text: '[CABLING]  Cat5e/Cat6 Termination, Patching, Drop & IP Conflict Fix' },
    ],
    experience: () => [
      { cls: 't-ok', text: '[12-2025 - 06-2026] CCTV & Network Technician @ KTC Engineering' },
      { cls: 't-muted', text: '  -> Routers, switches, APs, TCP/IP & DHCP workstation setup' },
      { cls: 't-muted', text: '  -> Analog/IP camera alignment, NVR/DVR backup & Cat5e/Cat6 cabling' },
      { cls: 't-ok', text: '[LAB PROJECTS] CCTV & Network Technician @ ITI' },
      { cls: 't-muted', text: '  -> Multi-node lab topology config & IP/cabling troubleshooting' },
    ],
    education: () => [
      { cls: 't-ok', text: '2023-2025 : Bachelor of Technology in IT (ITI, Exam: Oct 06, 2025)' },
      { cls: 't-ok', text: '2021-2023 : Technical Higher Diploma in IT (ITI, MLVT Approved)' },
      { cls: 't-muted', text: '2019-2021 : High School Diploma (Hun Sen Cheung Chnok High School)' },
      { cls: 't-muted', text: '2015-2019 : Secondary School (Chealea Secondary School)' },
    ],
    'vlan show': () => [
      { cls: 't-accent', text: 'VLAN  NAME              SUBNET          STATUS' },
      { cls: 't-ok', text: '10    WORKSTATIONS      10.10.10.0/24   ACTIVE (Domain + DHCP)' },
      { cls: 't-ok', text: '20    CCTV_NVR_BACKUP   10.10.20.0/24   ACTIVE (IP/Analog Stream)' },
      { cls: 't-ok', text: '30    WIRELESS_AP       10.10.30.0/24   ACTIVE (QoS Enforced)' },
    ],
    contact: () => [
      { cls: 't-ok', text: 'PHONE     : 069-524-314' },
      { cls: 't-ok', text: 'EMAIL     : kunamracambodia@gmail.com' },
      { cls: 't-muted', text: 'REFERENCE : Mr. Thiv Rathana (VP of IT Dept) - 012 211 015' },
    ],
  };

  function appendTerminalLine(text, cls = 't-muted') {
    if (!terminalOutput) return;
    const div = document.createElement('div');
    div.className = `t-line ${cls}`;
    div.textContent = text;
    terminalOutput.appendChild(div);
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
  }

  function runTerminalCommand(raw) {
    const cmd = raw.trim().toLowerCase();
    if (!cmd) return;

    cmdHistory.unshift(raw.trim());
    historyIdx = -1;
    appendTerminalLine(`kun@noc:~$ ${raw.trim()}`, 't-cmd');

    if (cmd === 'clear') {
      terminalOutput.innerHTML = '';
      appendTerminalLine('Console cleared. Type "help" for commands.', 't-muted');
      return;
    }

    if (cmd === 'ping ktc-switch') {
      appendTerminalLine('PING ktc-switch (10.10.10.2) 56(84) bytes of data.', 't-accent');
      const times = ['0.94', '1.08', '0.89'];
      times.forEach((ms, i) => {
        setTimeout(() => {
          appendTerminalLine(`64 bytes from 10.10.10.2: icmp_seq=${i + 1} ttl=64 time=${ms} ms`, 't-ok');
          if (i === times.length - 1) {
            appendTerminalLine('--- 10.10.10.2 ping statistics: 3 transmitted, 3 received, 0% loss ---', 't-muted');
          }
        }, (i + 1) * 260);
      });
      return;
    }

    const handler = commands[cmd];
    if (handler) {
      handler().forEach((line) => appendTerminalLine(line.text, line.cls));
    } else {
      appendTerminalLine(`Command not found: "${cmd}". Type "help" for valid commands.`, 't-muted');
    }
  }

  if (terminalForm && terminalInput) {
    terminalForm.addEventListener('submit', (e) => {
      e.preventDefault();
      runTerminalCommand(terminalInput.value);
      terminalInput.value = '';
    });

    terminalInput.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowUp' && cmdHistory.length > 0) {
        e.preventDefault();
        historyIdx = Math.min(cmdHistory.length - 1, historyIdx + 1);
        terminalInput.value = cmdHistory[historyIdx];
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        historyIdx = Math.max(-1, historyIdx - 1);
        terminalInput.value = historyIdx === -1 ? '' : cmdHistory[historyIdx];
      }
    });
  }

  document.querySelectorAll('.cmd-chip').forEach((chip) => {
    chip.addEventListener('click', () => {
      const cmd = chip.getAttribute('data-cmd');
      if (cmd) runTerminalCommand(cmd);
    });
  });

  if (terminalClearBtn) {
    terminalClearBtn.addEventListener('click', () => runTerminalCommand('clear'));
  }

  /* ------------------------------------------------------------------------
     12. Certificate Lightbox & Cover Letter Modals
     ------------------------------------------------------------------------ */
  const certModal = document.getElementById('certModal');
  const certModalImg = document.getElementById('certModalImg');
  const certModalTitle = document.getElementById('certModalTitle');
  const certModalSub = document.getElementById('certModalSub');
  const certViewport = document.getElementById('certViewport');
  const certZoomBtn = document.getElementById('certZoomBtn');
  const certCloseBtn = document.getElementById('certCloseBtn');

  const coverModal = document.getElementById('coverModal');
  const coverCloseBtn = document.getElementById('coverCloseBtn');
  const coverCloseFooterBtn = document.getElementById('coverCloseFooterBtn');

  const phoneModal = document.getElementById('phoneModal');
  const phoneModalTitle = document.getElementById('phoneModalTitle');
  const phoneModalSub = document.getElementById('phoneModalSub');
  const phoneCallLink = document.getElementById('phoneCallLink');
  const phoneCallSub = document.getElementById('phoneCallSub');
  const phoneTelegramLink = document.getElementById('phoneTelegramLink');
  const phoneTelegramSub = document.getElementById('phoneTelegramSub');
  const phoneModalCopyBtn = document.getElementById('phoneModalCopyBtn');
  const phoneCloseBtn = document.getElementById('phoneCloseBtn');
  const phoneCancelBtn = document.getElementById('phoneCancelBtn');

  function openModal(modal) {
    if (!modal) return;
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
  }

  function closeModal(modal) {
    if (!modal) return;
    modal.hidden = true;
    document.body.style.overflow = '';
    if (certViewport) {
      certViewport.classList.remove('is-zoomed');
      if (certZoomBtn) certZoomBtn.textContent = 'Zoom In';
    }
  }

  document.querySelectorAll('.cert-trigger').forEach((btn) => {
    btn.addEventListener('click', () => {
      if (!certModal || !certModalImg) return;
      certModalImg.src = btn.getAttribute('data-cert-src') || '';
      certModalTitle.textContent = btn.getAttribute('data-cert-title') || 'Official Certificate';
      certModalSub.textContent = btn.getAttribute('data-cert-sub') || '';
      openModal(certModal);
    });
  });

  if (certZoomBtn && certViewport) {
    certZoomBtn.addEventListener('click', () => {
      const zoomed = certViewport.classList.toggle('is-zoomed');
      certZoomBtn.textContent = zoomed ? 'Zoom Out' : 'Zoom In';
    });
  }

  if (certCloseBtn) certCloseBtn.addEventListener('click', () => closeModal(certModal));
  if (certModal) {
    certModal.addEventListener('click', (e) => {
      if (e.target === certModal) closeModal(certModal);
    });
  }

  ['openCoverLetterHeader', 'openCoverLetterHero', 'openCoverLetterMobile', 'openCoverLetterContact'].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('click', () => openModal(coverModal));
  });

  if (coverCloseBtn) coverCloseBtn.addEventListener('click', () => closeModal(coverModal));
  if (coverCloseFooterBtn) coverCloseFooterBtn.addEventListener('click', () => closeModal(coverModal));
  if (coverModal) {
    coverModal.addEventListener('click', (e) => {
      if (e.target === coverModal) closeModal(coverModal);
    });
  }

  document.querySelectorAll('.phone-trigger').forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const display = trigger.getAttribute('data-phone-display') || '069-524-314';
      const e164 = trigger.getAttribute('data-phone-e164') || '+85569524314';
      const label = trigger.getAttribute('data-phone-label') || 'Kun Amra';

      if (phoneModalTitle) phoneModalTitle.textContent = label;
      if (phoneModalSub) phoneModalSub.textContent = `${display} • ${e164}`;
      if (phoneCallLink) phoneCallLink.href = `tel:${e164}`;
      if (phoneCallSub) phoneCallSub.textContent = `Dial ${e164}`;
      if (phoneTelegramLink) phoneTelegramLink.href = `https://t.me/${e164}`;
      if (phoneTelegramSub) phoneTelegramSub.textContent = `t.me/${e164}`;
      if (phoneModalCopyBtn) phoneModalCopyBtn.setAttribute('data-copy', display);

      openModal(phoneModal);
    });
  });

  if (phoneCloseBtn) phoneCloseBtn.addEventListener('click', () => closeModal(phoneModal));
  if (phoneCancelBtn) phoneCancelBtn.addEventListener('click', () => closeModal(phoneModal));
  if (phoneModal) {
    phoneModal.addEventListener('click', (e) => {
      if (e.target === phoneModal) closeModal(phoneModal);
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (certModal && !certModal.hidden) closeModal(certModal);
      if (coverModal && !coverModal.hidden) closeModal(coverModal);
      if (phoneModal && !phoneModal.hidden) closeModal(phoneModal);
    }
  });

  /* ------------------------------------------------------------------------
     13. Smart Contact Form Email Dispatch
     ------------------------------------------------------------------------ */
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('senderName').value.trim();
      const subject = document.getElementById('senderSubject').value.trim();
      const message = document.getElementById('senderMessage').value.trim();

      const fullSubject = encodeURIComponent(`[Portfolio Inquiry] ${subject} — ${name}`);
      const fullBody = encodeURIComponent(`From: ${name}\n\n${message}`);
      window.location.href = `mailto:kunamracambodia@gmail.com?subject=${fullSubject}&body=${fullBody}`;
      showToast('Opening email client with pre-filled dispatch...');
    });
  }
})();
