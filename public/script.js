  function openModal(title, description, imageSrc, price) {
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalDescription').textContent = description;
    document.getElementById('modalImage').src = imageSrc;
    document.getElementById('modalPrice').textContent = price;
    document.getElementById('productModal').style.display = 'block';
  }

  function closeModal() {
    document.getElementById('productModal').style.display = 'none';
  }

  // Optional: close modal when clicking outside of it
  window.onclick = function(event) {
    const modal = document.getElementById('productModal');
    if (event.target === modal) {
      closeModal();
    }
  }
  function scrollToCategory(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}
const categories = [
  { id: 'tshirts', label: 'T-Shirts', folder: 'images/tshirts/', images: ['t1.webp', 't2.webp'] },
  { id: 'polos', label: 'Polos', folder: 'images/polos/', images: ['p1.webp', 'p2.webp', 'p3.webp', 'p4.webp'] },
  { id: 'jerseys', label: 'Jerseys', folder: 'images/jerseys/', images: ['j1.webp', 'j2.webp',] },
  { id: 'hoodies', label: 'Hoodies', folder: 'images/hoodies/', images: ['h1.jpg', 'h2.jpg',] }
];

function getRandomPreviewItem(images) {
  const index = Math.floor(Math.random() * images.length);
  return images[index];
}

function loadCategoryPreviews() {
  const container = document.getElementById('categoryPreview');
  container.innerHTML = '';

  categories.forEach(cat => {
    const randomImage = getRandomPreviewItem(cat.images);
    const fullPath = `${cat.folder}${randomImage}`;

    const card = document.createElement('div');
    card.className = 'category-card';
    card.onclick = () => scrollToCategory(cat.id);
    card.innerHTML = `
      <img src="${fullPath}" alt="${cat.label}">
      <h4>${cat.label}</h4>
    `;
    container.appendChild(card);
  });
}

// Call it on page load
window.onload = function () {
  loadCategoryPreviews();
};


  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });


