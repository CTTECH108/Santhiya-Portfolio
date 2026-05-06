// ── CERTIFICATES DATA ──
// Add your real certificate images here as base64 or URLs
const CERTS = [
  {
    name: "XPM 4.0 Fundamentals",
    issuer: "NxT Wave — CCBP 4.0",
    date: "Nov 25, 2024",
    link: "https://certificates.ccbp.in/academy/xpm-4-0-fundamentals?id=UVCZAYOLUO",
    img: "https://via.placeholder.com/400x300/111827/3dffc4?text=XPM+4.0+Fundamentals"
  },
  {
    name: "Full Stack Development",
    issuer: "NxT Wave — CCBP 4.0",
    date: "Jan 2024",
    link: "#",
    img: "https://via.placeholder.com/400x300/111827/7b5ea7?text=Full+Stack+Development"
  },
  {
    name: "MERN Stack Internship",
    issuer: "Web Stack Academy",
    date: "Jul 2024",
    link: "#",
    img: "https://via.placeholder.com/400x300/111827/3dffc4?text=MERN+Stack+Internship"
  }
];

let lbIdx = 0;

// ── BUILD CERTIFICATE TRACK ──
function buildTrack() {
  const track = document.getElementById('certTrack');
  const dots = document.getElementById('certDots');
  track.innerHTML = '';
  dots.innerHTML = '';

  // Duplicate slides for seamless loop
  const all = [...CERTS, ...CERTS];
  all.forEach((c, i) => {
    const slide = document.createElement('div');
    slide.className = 'cert-slide';
    slide.innerHTML = `
      <img src="${c.img}" alt="${c.name}" loading="lazy">
      <div class="cert-slide-info">
        <div class="cert-slide-name">${c.name}</div>
        <div class="cert-slide-meta">${c.issuer} · ${c.date}</div>
      </div>
    `;
    slide.addEventListener('click', () => openLB(i % CERTS.length));
    track.appendChild(slide);
  });

  // Add "+" button at end
  const addSlide = document.createElement('div');
  addSlide.className = 'cert-add-slide';
  addSlide.innerHTML = `
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <circle cx="12" cy="12" r="10"/>
      <line x1="12" y1="8" x2="12" y2="16"/>
      <line x1="8" y1="12" x2="16" y2="12"/>
    </svg>
    <span>Add Certificate</span>
  `;
  addSlide.addEventListener('click', () => document.getElementById('cert-upload-input').click());
  track.appendChild(addSlide);

  // Dot indicators
  CERTS.forEach((_, i) => {
    const d = document.createElement('div');
    d.className = 'cert-dot' + (i === 0 ? ' active' : '');
    d.addEventListener('click', () => scrollToSlide(i));
    dots.appendChild(d);
  });
}

// ── SCROLL TO SLIDE ──
function scrollToSlide(idx) {
  const track = document.getElementById('certTrack');
  const slides = track.querySelectorAll('.cert-slide');
  if (!slides[idx]) return;
  const slideW = slides[0].offsetWidth + 20;
  const trackWrap = document.querySelector('.cert-track-wrap');
  trackWrap.scrollTo({ left: idx * slideW, behavior: 'smooth' });
  document.querySelectorAll('.cert-dot').forEach((d, i) => {
    d.classList.toggle('active', i === idx);
  });
}

// ── PREV / NEXT BUTTONS ──
document.getElementById('certPrev').addEventListener('click', () => {
  const active = document.querySelector('.cert-dot.active');
  const dots = document.querySelectorAll('.cert-dot');
  const idx = [...dots].indexOf(active);
  scrollToSlide(Math.max(0, idx - 1));
});

document.getElementById('certNext').addEventListener('click', () => {
  const active = document.querySelector('.cert-dot.active');
  const dots = document.querySelectorAll('.cert-dot');
  const idx = [...dots].indexOf(active);
  scrollToSlide(Math.min(CERTS.length - 1, idx + 1));
});

// ── HANDLE FILE UPLOAD ──
document.getElementById('cert-upload-input').addEventListener('change', (e) => {
  const files = Array.from(e.target.files);
  files.forEach(file => {
    const reader = new FileReader();
    reader.onload = (ev) => {
      CERTS.push({
        name: file.name.replace(/\.[^.]+$/, ''),
        issuer: 'My Certificate',
        date: new Date().toLocaleDateString('en-GB', { month: 'short', year: 'numeric' }),
        link: '#',
        img: ev.target.result
      });
      buildTrack();
    };
    reader.readAsDataURL(file);
  });
  e.target.value = '';
});

// ── LIGHTBOX ──
function openLB(idx) {
  lbIdx = idx;
  const c = CERTS[lbIdx];
  document.getElementById('lb-img').src = c.img;
  document.getElementById('lb-name').textContent = c.name;
  document.getElementById('lb-meta').textContent = c.issuer + '  ·  ' + c.date;
  document.getElementById('lb-link').href = c.link;
  document.getElementById('lightbox').classList.add('open');
}

function closeLB() {
  document.getElementById('lightbox').classList.remove('open');
}

function lbNav(dir) {
  lbIdx = (lbIdx + dir + CERTS.length) % CERTS.length;
  openLB(lbIdx);
}

document.addEventListener('keydown', e => {
  if (!document.getElementById('lightbox').classList.contains('open')) return;
  if (e.key === 'Escape') closeLB();
  if (e.key === 'ArrowRight') lbNav(1);
  if (e.key === 'ArrowLeft') lbNav(-1);
});

// ── SKILL BARS (Intersection Observer) ──
const bars = document.querySelectorAll('.skill-bar-fill');
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.width = e.target.dataset.w;
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.3 });

bars.forEach(b => io.observe(b));

// ── INIT ──
buildTrack();
