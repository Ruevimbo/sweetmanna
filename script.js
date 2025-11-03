/* ==============================
   SWEET MANNA BAKERY - JS
   ============================== */

/* 1️⃣ Daily Verse Rotator */
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

  showVerse(); // Initial display
  setInterval(showVerse, 5000); // Rotate every 5 seconds
}

/* 2️⃣ Page & Section Fade In */
document.addEventListener("DOMContentLoaded", () => {
  document.body.style.opacity = 0;
  document.body.style.transition = "opacity 0.7s ease-in-out";
  setTimeout(() => document.body.style.opacity = 1, 20);

  const sections = document.querySelectorAll("section, header, footer, article, form");
  sections.forEach((el, index) => {
    el.style.opacity = 0;
    el.style.transform = "translateY(20px) scale(0.98)";
    el.style.transition = `opacity 0.6s ease-out ${0.2*index}s, transform 0.6s ease-out ${0.2*index}s`;
    setTimeout(() => {
      el.style.opacity = 1;
      el.style.transform = "translateY(0) scale(1)";
    }, 50);
  });
});

/* 3️⃣ Smooth Scroll Navigation */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if(target) target.scrollIntoView({ behavior: "smooth" });
  });
});

/* 4️⃣ Contact Form Submission */
const form = document.getElementById("form");
const msg = document.getElementById("form-message");
if(form && msg){
  form.addEventListener("submit", e => {
    e.preventDefault();
    msg.textContent = `Thank you, ${form.name.value}! Your message has been sent.`;
    form.reset();
  });
}

// ==============================
// CHECKOUT TABLE
// ==============================
const products = [
  { category: 'Sweet Cakes', name: 'Chocolate Cake', price: 200 },
  { category: 'Sweet Cakes', name: 'Red Velvet Cake', price: 200 },
  { category: 'Sweet Cakes', name: 'Carrot Cake', price: 200 },
  { category: 'Sweet Cakes', name: 'Vanilla Layered Cake', price: 200 },
  { category: 'Cupcakes', name: 'Classic Vanilla Cupcake', price: 75 },
  { category: 'Cupcakes', name: 'Chocolate Fudge Cupcake', price: 75 },
  { category: 'Cupcakes', name: 'Red Velvet Cupcake', price: 75 },
  { category: 'Cupcakes', name: 'Lemon Zest Cupcake', price: 75 },
  { category: 'Biscuits/Cookies', name: 'Butter Shortbread', price: 42 },
  { category: 'Biscuits/Cookies', name: 'Chocolate Chip Cookies', price: 42 },
  { category: 'Biscuits/Cookies', name: 'Oatmeal Raisin Cookies', price: 42 },
  { category: 'Biscuits/Cookies', name: 'Ginger Biscuits', price: 42 },
  { category: 'Brownies/Bars', name: 'Fudge Brownies', price: 58 },
  { category: 'Brownies/Bars', name: 'Walnuts Brownies', price: 58 },
  { category: 'Brownies/Bars', name: 'Blondies', price: 58 },
  { category: 'Brownies/Bars', name: 'Peanut Butter Swirl Brownies', price: 58 },
  { category: 'Pastries', name: 'Croissants', price: 60 },
  { category: 'Pastries', name: 'Danish Pastries', price: 60 },
  { category: 'Pastries', name: 'Cinnamon Rolls', price: 60 },
  { category: 'Pastries', name: 'Apple Turnovers', price: 60 },
  { category: 'Pastries', name: 'Churrios', price: 60 },
  { category: 'Sweet Snacks', name: 'Cake Pops', price: 25 },
  { category: 'Sweet Snacks', name: 'Rainbow Donuts', price: 25 },
  { category: 'Sweet Snacks', name: 'Creamy Whipped Pie', price: 25 },
  { category: 'Sweet Snacks', name: 'Crunchy Macarons', price: 25 }
];

const tbody = document.querySelector('#order-table tbody');
const subtotalEl = document.getElementById('subtotal');
const vatEl = document.getElementById('vat');
const totalEl = document.getElementById('total');
const deliveryFee = 50;

// Populate table
products.forEach(product => {
  const tr = document.createElement('tr');
  tr.innerHTML = `
    <td>${product.category}</td>
    <td>${product.name}</td>
    <td>R${product.price.toFixed(2)}</td>
    <td><input type="checkbox" class="item-checkbox" data-price="${product.price}"></td>
  `;
  tbody.appendChild(tr);
});

const checkoutBtn = document.getElementById('checkout-btn');

if (checkoutBtn) {
  checkoutBtn.addEventListener('click', () => {
    alert('Your order was successful!');
  });
}

// Update totals dynamically
function updateTotals() {
  let subtotal = 0;
  document.querySelectorAll('.item-checkbox').forEach(cb => {
    if(cb.checked) subtotal += parseFloat(cb.dataset.price);
  });

  const vat = subtotal * 0.15; // 15% VAT
  const total = subtotal + vat + deliveryFee;

  subtotalEl.textContent = `R${subtotal.toFixed(2)}`;
  vatEl.textContent = `R${vat.toFixed(2)}`;
  totalEl.textContent = `R${total.toFixed(2)}`;
}

// Listen for checkbox changes
document.addEventListener('change', e => {
  if(e.target.classList.contains('item-checkbox')) updateTotals();
});

// Initialize totals
updateTotals();

/* 5️⃣ Accordion Functionality (Updated to Work) */
document.addEventListener("DOMContentLoaded", () => {
  const accordionBtns = document.querySelectorAll(".accordion-btn");

  accordionBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const content = btn.nextElementSibling;
      if (!content) return;

      // Close all others first
      document.querySelectorAll(".accordion-content").forEach(other => {
        if (other !== content) {
          other.style.maxHeight = null;
          other.classList.remove("active");
        }
      });

      // Toggle this one
      if (content.classList.contains("active")) {
        content.style.maxHeight = null;
        content.classList.remove("active");
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
        content.classList.add("active");
      }
    });
  });
});


/* 6️⃣ Modal Functionality */
const modal = document.getElementById("contactModal");
const openModalBtn = document.querySelector(".open-modal-btn");
const closeModalBtn = document.querySelector(".close-btn");

if(modal && openModalBtn && closeModalBtn){
  openModalBtn.addEventListener("click", () => modal.style.display = "flex");
  closeModalBtn.addEventListener("click", () => modal.style.display = "none");
  window.addEventListener("click", e => {
    if(e.target === modal) modal.style.display = "none";
  });
}

/* 7️⃣ Button Glow Hover */
const buttons = document.querySelectorAll("button, nav a");
buttons.forEach(btn => {
  btn.addEventListener("mouseenter", () => {
    btn.style.boxShadow = "0 0 12px var(--lavender), 0 0 20px var(--golden)";
    btn.style.transition = "all 0.2s ease-in-out";
  });
  btn.addEventListener("mouseleave", () => btn.style.boxShadow = "none");
});

/* ==============================
   7️⃣ Confetti Particles - Everywhere
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

window.addEventListener('load', () => {
  setInterval(createConfetti, 300);
});

document.addEventListener("DOMContentLoaded", () => {
  const zoomableImages = document.querySelectorAll(".zoomable");

  // Create overlay
  const overlay = document.createElement("div");
  overlay.classList.add("zoom-overlay");
  const overlayImg = document.createElement("img");
  overlay.appendChild(overlayImg);
  document.body.appendChild(overlay);

  // Click to zoom
  zoomableImages.forEach(img => {
    img.style.cursor = "zoom-in";
    img.addEventListener("click", () => {
      overlayImg.src = img.src;
      overlay.classList.add("show");
    });
  });

  // Click overlay to close
  overlay.addEventListener("click", () => {
    overlay.classList.remove("show");
  });
});

