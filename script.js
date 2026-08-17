/* ==========================================================
   SCRIPT.JS — behaviour only. All content comes from CONFIG
   (see config.js). You shouldn't need to edit this file just
   to update your info — edit config.js instead.
   ========================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- INJECT CONTENT FROM CONFIG ---------- */
  const $ = (id) => document.getElementById(id);

  document.title = `${CONFIG.name} — ${CONFIG.role}`;
  $('navLogo').innerHTML = `${CONFIG.logoText}<span>.</span>`;
  $('heroLocation').textContent = CONFIG.location.toUpperCase();
  $('heroName').textContent = CONFIG.name;
  $('heroRole').textContent = CONFIG.role;
  $('heroTagline').textContent = CONFIG.tagline;
  $('scrubberEnd').textContent = CONFIG.reelDuration;
  $('aboutPhoto').src = CONFIG.profilePic;
  $('aboutPhoto').alt = CONFIG.name;
  $('aboutYears').textContent = CONFIG.yearsExperience;
  $('aboutBio').textContent = CONFIG.bio;
  $('contactEmail').textContent = CONFIG.email;
  $('contactEmail').href = `mailto:${CONFIG.email}`;
  $('contactPhone').textContent = CONFIG.phone;
  $('contactLocation').textContent = CONFIG.location;
  $('footerName').textContent = CONFIG.name;
  $('footerYear').textContent = new Date().getFullYear();

  // skills
  $('skillsList').innerHTML = CONFIG.skills
    .map(s => `<span class="skill-tag">${s}</span>`).join('');

  // software strip (about section)
  $('softwareStrip').innerHTML = CONFIG.software.map(s => `
    <div class="sw-chip">
      <span class="sw-mono" style="background:${s.color}">${s.short}</span>
      ${s.name}
    </div>`).join('');

  // socials
  $('socials').innerHTML = CONFIG.socials
    .map(s => `<a href="${s.url}" target="_blank" rel="noopener">${s.label} ↗</a>`).join('');

  // reel video
  $('reelVideo').innerHTML = `<iframe
      src="https://www.youtube.com/embed/${CONFIG.reelYoutubeId}?rel=0"
      title="Showreel" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen loading="lazy"></iframe>`;

  // floating badges in hero (software logos)
  const floatLayer = $('floatLayer');
  const positions = [
    {top:'12%', left:'8%'}, {top:'62%', left:'4%'}, {top:'8%', left:'42%'},
    {top:'70%', left:'40%'}, {top:'20%', left:'82%'}, {top:'58%', left:'86%'}
  ];
  floatLayer.innerHTML = CONFIG.software.map((s, i) => {
    const pos = positions[i % positions.length];
    const dur = (7 + (i % 4) * 1.6).toFixed(1);
    const delay = (i * 0.4).toFixed(1);
    const depth = 0.4 + (i % 3) * 0.3; // parallax strength
    return `<div class="badge" data-depth="${depth}" data-name="${s.name}"
        style="top:${pos.top}; left:${pos.left}; background:${s.color}; --glow:${s.glow}; --dur:${dur}s; --delay:${delay}s;">
        <span>${s.short}</span>
        <div class="badge-tip">${s.name}</div>
      </div>`;
  }).join('');

  // work grid + filters
  const grid = $('workGrid');
  const filters = $('filters');
  const cats = ['All', ...new Set(CONFIG.projects.map(p => p.category))];

  filters.innerHTML = cats.map((c, i) =>
    `<button class="filter-btn ${i === 0 ? 'active' : ''}" data-cat="${c}">${c}</button>`
  ).join('');

  function renderGrid(cat){
    const items = cat === 'All' ? CONFIG.projects : CONFIG.projects.filter(p => p.category === cat);
    grid.innerHTML = items.map(p => `
      <div class="card" data-yt="${p.youtubeId}">
        <img src="https://img.youtube.com/vi/${p.youtubeId}/hqdefault.jpg" alt="${p.title}" loading="lazy">
        <div class="card-play">▶</div>
        <div class="card-overlay">
          <span class="card-cat">${p.category}</span>
          <div class="card-title">${p.title}</div>
          <div class="card-note">${p.note || ''}</div>
        </div>
      </div>`).join('');
    grid.querySelectorAll('.card').forEach(card => {
      card.addEventListener('click', () => openModal(card.dataset.yt));
    });
  }
  renderGrid('All');

  filters.addEventListener('click', (e) => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;
    filters.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderGrid(btn.dataset.cat);
  });

  /* ---------- MODAL ---------- */
  const modal = $('videoModal');
  const modalVideo = $('modalVideo');
  function openModal(id){
    modalVideo.innerHTML = `<iframe src="https://www.youtube.com/embed/${id}?autoplay=1&rel=0"
      title="Project video" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`;
    modal.classList.add('open');
  }
  function closeModal(){
    modal.classList.remove('open');
    modalVideo.innerHTML = '';
  }
  $('modalClose').addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

  /* ---------- NAV SCROLL STATE ---------- */
  const nav = $('nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });

  /* ---------- LIVE TIMECODE CLOCK (decorative) ---------- */
  let frame = 0;
  function tickClock(){
    const now = new Date();
    frame = (frame + 1) % 30;
    const hh = String(now.getHours()).padStart(2,'0');
    const mm = String(now.getMinutes()).padStart(2,'0');
    const ss = String(now.getSeconds()).padStart(2,'0');
    const ff = String(frame).padStart(2,'0');
    $('navClock').textContent = `${hh}:${mm}:${ss}:${ff}`;
    requestAnimationFrame(tickClock);
  }
  requestAnimationFrame(tickClock);

  /* ---------- SCRUBBER FILLS WITH PAGE SCROLL ---------- */
  const fill = $('scrubberFill');
  const playhead = $('scrubberPlayhead');
  function updateScrubber(){
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const pct = max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0;
    fill.style.width = pct + '%';
    playhead.style.left = pct + '%';
  }
  window.addEventListener('scroll', updateScrubber, { passive: true });
  updateScrubber();

  /* ---------- PROXIMITY / PARALLAX (mouse-reactive 3D float) ---------- */
  const isTouch = window.matchMedia('(hover: none)').matches;
  const stage = $('heroStage');
  const cursorDot = $('cursorDot');
  const cursorRing = $('cursorRing');

  if (!isTouch){
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let rafId = null;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursorDot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      cursorRing.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      if (!rafId) rafId = requestAnimationFrame(updateParallax);
    });

    document.querySelectorAll('a, button, .card, .badge').forEach(el => {
      el.addEventListener('mouseenter', () => cursorRing.classList.add('active'));
      el.addEventListener('mouseleave', () => cursorRing.classList.remove('active'));
    });

    function updateParallax(){
      rafId = null;
      const rect = stage.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const nx = (mouseX - cx) / rect.width;   // -0.5 .. 0.5 roughly
      const ny = (mouseY - cy) / rect.height;

      document.querySelectorAll('.badge').forEach(badge => {
        const depth = parseFloat(badge.dataset.depth) || 0.5;
        const bx = -nx * 60 * depth;
        const by = -ny * 60 * depth;

        // proximity glow: distance from cursor to badge center
        const bRect = badge.getBoundingClientRect();
        const dx = mouseX - (bRect.left + bRect.width / 2);
        const dy = mouseY - (bRect.top + bRect.height / 2);
        const dist = Math.hypot(dx, dy);
        const near = dist < 180;
        badge.classList.toggle('proximity', near);
        const scale = near ? 1 + (180 - dist) / 900 : 1;

        badge.style.transform = `translate3d(${bx}px, ${by}px, ${depth * 40}px) scale(${scale})`;
      });
    }
  } else {
    cursorDot.style.display = 'none';
    cursorRing.style.display = 'none';
  }

  /* ---------- MOBILE NAV TOGGLE ---------- */
  $('navToggle').addEventListener('click', () => {
    const links = document.querySelector('.nav-links');
    const open = links.style.display === 'flex';
    links.style.display = open ? 'none' : 'flex';
    links.style.cssText += `
      position:fixed; top:64px; left:0; right:0; flex-direction:column;
      background:#0c0c13; padding:24px; border-bottom:1px solid rgba(255,255,255,.08);
    `;
  });

  /* ---------- SCROLL REVEAL ---------- */
  const revealTargets = document.querySelectorAll('.card, .about-grid, .contact-inner, .reel-frame');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealTargets.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity .6s var(--ease), transform .6s var(--ease)';
    io.observe(el);
  });
});
