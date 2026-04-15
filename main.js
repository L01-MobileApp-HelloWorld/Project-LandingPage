// ═══════════════════════════════════════
//   BẬN HAY LƯỜI? — Landing Page JS
// ═══════════════════════════════════════

// ─── NAV scroll effect ───
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

// ─── Hamburger menu ───
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => mobileMenu.classList.remove('open'));
});

// ─── Scroll animations ───
const scrollEls = document.querySelectorAll('.animate-scroll');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.12,
  rootMargin: '0px 0px -40px 0px'
});

scrollEls.forEach(el => observer.observe(el));

// ─── Feature phone switcher ───
const featureItems = document.querySelectorAll('.feature-item');
const featureScreens = document.querySelectorAll('[id^="fs"]');

featureItems.forEach((item, idx) => {
  item.addEventListener('click', () => {
    featureItems.forEach(fi => fi.classList.remove('active'));
    featureScreens.forEach(fs => {
      fs.classList.remove('active');
      fs.style.display = 'none';
    });
    item.classList.add('active');
    const target = document.getElementById('fs' + idx);
    if (target) {
      target.style.display = 'flex';
      target.classList.add('active');
    }
  });
});

// Initialize first feature item active
if (featureItems.length > 0) {
  featureItems[0].classList.add('active');
}

// Show first feature screen
const firstScreen = document.getElementById('fs0');
if (firstScreen) {
  featureScreens.forEach(fs => { fs.style.display = 'none'; fs.classList.remove('active'); });
  firstScreen.style.display = 'flex';
  firstScreen.classList.add('active');
}

// ─── Smooth scroll for anchor links ───
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      const navH = nav.offsetHeight;
      const top = target.getBoundingClientRect().top + window.scrollY - navH - 16;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// ─── Screens horizontal scroll with drag ───
const screensScroll = document.querySelector('.screens-scroll');
if (screensScroll) {
  let isDown = false, startX, scrollLeft;

  screensScroll.addEventListener('mousedown', e => {
    isDown = true;
    startX = e.pageX - screensScroll.offsetLeft;
    scrollLeft = screensScroll.scrollLeft;
    screensScroll.style.cursor = 'grabbing';
  });

  screensScroll.addEventListener('mouseleave', () => { isDown = false; screensScroll.style.cursor = ''; });
  screensScroll.addEventListener('mouseup', () => { isDown = false; screensScroll.style.cursor = ''; });
  screensScroll.addEventListener('mousemove', e => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - screensScroll.offsetLeft;
    const walk = (x - startX) * 1.5;
    screensScroll.scrollLeft = scrollLeft - walk;
  });
}

// ─── Hero auto-cycle phone screens ───
// (Already showing home-mini, can keep static or add cycling)
