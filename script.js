const integrations = [ 
  { name: 'Facebook', description: 'Auto-sync leads and conversions with social insights', color: '#fffff', icon: '<b>F</b>' },
  { name: 'Google Sheets', description: 'Export data automatically to any spreadsheet', color: '#34A853', icon: '📄' },
  { name: 'Razorpay', description: 'Generate leads from payment gateway users', color: '#fffff', icon: '💳' },
  { name: 'CallHippo', description: 'Get comprehensive call management including waiting', color: '#ffff', icon: '📞' },
  { name: 'Magento', description: 'Sync your lead and transaction targets with cart data', color: '#FF6600', icon: '🛍️' },
  { name: 'KnowLarity', description: 'Get agent-level data and automate in the same call', color: '#8B5CF6', icon: '📱' },
  { name: 'Moodle', description: 'Sync Moodle contact from your educational platform', color: '#F59E0B', icon: '🏫' },
  { name: 'WhatsApp', description: 'Connect WhatsApp Business messaging directly with platform', color: '#25D366', icon: '💬' },
  { name: 'WhatsApp Cloud API', description: 'Advanced WhatsApp integration for direct API with messaging filters', color: '#25D366', icon: '☁️' },
  { name: 'WhatsApp Chat Widget', description: 'Add WhatsApp chat widget for seamless customer with messaging filter', color: '#25D366', icon: '🔗' },
  { name: 'MagicBricks', description: 'Sync MagicBricks leads from leading property selling portal directly to your dashboard', color: '#E53E3E', icon: '🏡' },
  { name: 'Wisersa', description: 'Integrate leads with the leading lead management suite with complete', color: '#3182CE', icon: '📈' },
  { name: 'Housing.com', description: 'Automatically push leads from the leading real estate', color: '#ECC94B', icon: '🏘️' },
  { name: 'Just Dial', description: 'JustDial leads sync, connect customer data downloaded from lead with your lead segment', color: '#3182CE', icon: ' 📲 ' },
  { name: 'IndiaMART', description: 'IndiaMART leads export from the leading B2B marketplace in INDIA with complete supplier', color: '#C53030', icon: '🛒' },
  { name: 'Sulekha', description: 'Auto-sync leads from Sulekha with advanced lead scoring and lead management', color: '#D69E2E', icon: '🔄' },
  { name: 'Shiksha', description: 'Track student leads across enquiry to enrolment', color: '#319795', icon: '📖' },
  { name: 'Trade India', description: 'Sync with one of the best B2B marketplace for getting business', color: '#E53E3E', icon: '🏭' },
  { name: 'Google Meet', description: 'Auto-sync meeting data and recordings from Google Meet with your CRM', color: '#34A853', icon: '📹' },
  { name: 'Wordpress', description: 'Connect your website contact forms and lead generation', color: '#21759B', icon: '🌐' },
  { name: 'WooCommerce', description: 'Sync customer and transaction data from your WooCommerce store', color: '#7F54B3', icon: '🛍️' },
  { name: 'Shopify', description: 'Integrate your Shopify store customer and order management', color: '#96BF48', icon: '📦' },
  { name: 'WooCommerce', description: 'Connect leads from your eCommerce platform via lead', color: '#7F54B3', icon: '💼' },
  { name: 'Embedded Apps', description: 'Custom integration and white-label solutions for your specific', color: '#4A5568', icon: '⚙️' }
];
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

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  populateIntegrationGrid();
  initSmoothScrolling();
  headerScrollEffect();
});
