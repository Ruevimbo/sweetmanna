/* ==============================
   SWEET MANNA BAKERY - GLOBAL JS
   ============================== */

/* ==============================
   1️⃣ Daily Verse Rotator with Fade
   ============================== */
const verses = [
  `"Man shall not live by bread alone, but by every word of God." - Luke 4:4`,
  `"Give us this day our daily bread." - Matthew 6:11`,
  `"Taste and see that the Lord is good." - Psalm 34:8`,
  `"I am the bread of life." - John 6:35`,
  `"Your word is a lamp to my feet and a light to my path." - Psalm 119:105`
];

let verseIndex = 0;
const verseElement = document.querySelector('.daily-verse');

if (verseElement) {
  verseElement.style.opacity = 0;

  function showVerse() {
    verseElement.style.transition = 'opacity 0.5s ease-in-out';
    verseElement.style.opacity = 0;

    setTimeout(() => {
      verseElement.textContent = verses[verseIndex];
      verseElement.style.opacity = 1;
      verseIndex = (verseIndex + 1) % verses.length;
    }, 500);
  }

  showVerse(); // initial display
  setInterval(showVerse, 5000); // rotate every 5 seconds
}

/* ==============================
   2️⃣ Page & Section Fade In (Cinematic)
   ============================== */
document.addEventListener('DOMContentLoaded', () => {
  // Fade in the entire body
  document.body.style.opacity = 0;
  document.body.style.transition = 'opacity 0.7s ease-in-out';
  setTimeout(() => {
    document.body.style.opacity = 1;
  }, 20);

  // Fade in all sections
  const sections = document.querySelectorAll('section, header, footer, article, form');
  sections.forEach((el, index) => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(20px) scale(0.98)';
    el.style.transition = `opacity 0.6s ease-out ${0.2 * index}s, transform 0.6s ease-out ${0.2 * index}s`;

    setTimeout(() => {
      el.style.opacity = 1;
      el.style.transform = 'translateY(0) scale(1)';
    }, 50);
  });
});

/* ==============================
   3️⃣ Smooth Scroll Navigation
   ============================== */
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

/* ==============================
   4️⃣ Contact Form Submission
   ============================== */
const contactForm = document.querySelector('form');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    alert(`Thank you, ${contactForm.name.value}! Your message has been sent.`);
    contactForm.reset();
  });
}

/* ==============================
   5️⃣ Product Image Hover Zoom
   ============================== */
document.querySelectorAll('article img').forEach(img => {
  img.addEventListener('mouseover', () => {
    img.style.transform = 'scale(1.08)';
    img.style.transition = 'transform 0.3s ease';
  });
  img.addEventListener('mouseout', () => {
    img.style.transform = 'scale(1)';
  });
});

/* ==============================
   6️⃣ Button Glow Hover
   ============================== */
const buttons = document.querySelectorAll('button, nav a');
buttons.forEach(btn => {
  btn.addEventListener('mouseenter', () => {
    btn.style.boxShadow = '0 0 12px var(--lavender), 0 0 20px var(--golden)';
    btn.style.transition = 'all 0.2s ease-in-out';
  });
  btn.addEventListener('mouseleave', () => {
    btn.style.boxShadow = 'none';
  });
});

/* ==============================
   7️⃣ Confetti Particles
   ============================== */
function createConfetti() {
  const confetti = document.createElement('div');
  confetti.classList.add('confetti');
  confetti.style.position = 'fixed';
  confetti.style.top = 0;
  confetti.style.left = Math.random() * window.innerWidth + 'px';
  const size = 8 + Math.random() * 12;
  confetti.style.width = size + 'px';
  confetti.style.height = size + 'px';
  confetti.style.background = '#ffd54f';
  confetti.style.borderRadius = '50%';
  confetti.style.pointerEvents = 'none';
  confetti.style.opacity = 0.9;
  confetti.style.animation = `fall ${1.5 + Math.random() * 2}s linear forwards`;
  document.body.appendChild(confetti);
  setTimeout(() => confetti.remove(), 4000);
}

// Confetti keyframes
const styleSheet = document.createElement("style");
styleSheet.innerText = `
@keyframes fall {
  0% { transform: translateY(-20px) rotate(0deg); opacity: 1; }
  100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
}`;
document.head.appendChild(styleSheet);
setInterval(createConfetti, 300);

/* ==============================
   8️⃣ Checkout Dynamic Items
   ============================== */
const items = [
  // Sweet Cakes
  { category: 'Sweet Cakes', name: 'Chocolate Cake', price: 200 },
  { category: 'Sweet Cakes', name: 'Red Velvet Cake', price: 200 },
  { category: 'Sweet Cakes', name: 'Carrot Cake', price: 200 },
  { category: 'Sweet Cakes', name: 'Vanilla Layered Cake', price: 200 },
  // Cupcakes
  { category: 'Cupcakes', name: 'Classic Vanilla Cupcake', price: 75 },
  { category: 'Cupcakes', name: 'Chocolate Fudge Cupcake', price: 75 },
  { category: 'Cupcakes', name: 'Red Velvet Cupcake', price: 75 },
  { category: 'Cupcakes', name: 'Lemon Zest Cupcake', price: 75 },
  // Biscuits / Cookies
  { category: 'Biscuits / Cookies', name: 'Butter Shortbread', price: 42 },
  { category: 'Biscuits / Cookies', name: 'Chocolate Chip Cookies', price: 42 },
  { category: 'Biscuits / Cookies', name: 'Oatmeal Raisin Cookies', price: 42 },
  { category: 'Biscuits / Cookies', name: 'Ginger Biscuits', price: 42 },
  // Brownies / Bars
  { category: 'Brownies / Bars', name: 'Fudge Brownies', price: 58 },
  { category: 'Brownies / Bars', name: 'Walnuts Brownies', price: 58 },
  { category: 'Brownies / Bars', name: 'Blondies', price: 58 },
  { category: 'Brownies / Bars', name: 'Peanut Butter Swirl Brownies', price: 58 },
  // Pastries
  { category: 'Pastries', name: 'Croissants', price: 60 },
  { category: 'Pastries', name: 'Danish Pastries', price: 60 },
  { category: 'Pastries', name: 'Cinnamon Rolls', price: 60 },
  { category: 'Pastries', name: 'Apple Turnovers', price: 60 },
  { category: 'Pastries', name: 'Churrios', price: 60 },
  // Sweet Snacks
  { category: 'Sweet Snacks', name: 'Cake Pops', price: 25 },
  { category: 'Sweet Snacks', name: 'Rainbow Donuts', price: 25 },
  { category: 'Sweet Snacks', name: 'Creamy Whipped Pie', price: 25 },
  { category: 'Sweet Snacks', name: 'Crunchy Macarons', price: 25 }
];

const tbody = document.querySelector('#order-table tbody');
const subtotalEl = document.getElementById('subtotal');
const vatEl = document.getElementById('vat');
const deliveryEl = document.getElementById('delivery');
const totalEl = document.getElementById('total');
const deliveryFee = 50;

// Populate table
items.forEach(item => {
  const tr = document.createElement('tr');
  tr.innerHTML = `
    <td>${item.category}</td>
    <td>${item.name}</td>
    <td>${item.price.toFixed(2)}</td>
    <td><input type="checkbox" class="item-checkbox" data-price="${item.price}"></td>
  `;
  tbody.appendChild(tr);
});

// Update totals dynamically
function updateTotals() {
  const checkboxes = document.querySelectorAll('.item-checkbox');
  let subtotal = 0;
  checkboxes.forEach(cb => {
    if (cb.checked) subtotal += parseFloat(cb.dataset.price);
  });
  const vat = subtotal * 0.15;
  const total = subtotal + vat + deliveryFee;

  subtotalEl.textContent = subtotal.toFixed(2);
  vatEl.textContent = vat.toFixed(2);
  if(deliveryEl) deliveryEl.textContent = deliveryFee.toFixed(2);
  totalEl.textContent = total.toFixed(2);
}

document.addEventListener('change', e => {
  if (e.target.classList.contains('item-checkbox')) updateTotals();
});

// Initialize totals
updateTotals();
