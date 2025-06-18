
function initMobileMenu() {
  const menuBtn = document.getElementById('menuBtn');
  const nav = document.getElementById('nav');
  menuBtn.addEventListener('click', () => nav.classList.toggle('active'));
  nav.querySelectorAll('a').forEach(link =>
    link.addEventListener('click', () => nav.classList.remove('active'))
  );
}

function populateIntegrationGrid() {
  const grid = document.getElementById('integrationGrid');
  integrations.forEach(i => {
    const card = document.createElement('div');
    card.className = 'integration-card';
    card.innerHTML = `
      <div class="integration-icon-card" style="background: ${i.color}">
        <span>${i.icon}</span>
      </div>
      <h3 class="integration-name">${i.name}</h3>
      <p class="integration-description">${i.description}</p>
    `;
    grid.appendChild(card);
  });
}

function initSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - document.querySelector('.header').offsetHeight,
          behavior: 'smooth'
        });
      }
    });
  });
}

function headerScrollEffect() {
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      header.style.backgroundColor = 'rgba(74, 74, 74, 0.95)';
      header.style.backdropFilter = 'blur(10px)';
    } else {
      header.style.backgroundColor = '#382479';
      header.style.backdropFilter = 'none';
    }
  });
}

const slides = document.querySelectorAll('input[name="carousel"]');
  let current = 0;

  setInterval(() => {
    slides[current].checked = false;
    current = (current + 1) % slides.length;
    slides[current].checked = true;
  }, 5000)

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  populateIntegrationGrid();
  initSmoothScrolling();
  headerScrollEffect();
});
