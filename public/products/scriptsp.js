
  // Toggle mobile menu
  document.getElementById('menu-toggle').addEventListener('click', function () {
    const nav = document.getElementById('nav-links');
    nav.classList.toggle('show');
  });

  // Toggle Products dropdown on mobile
  const dropdown = document.querySelector('.dropdown-toggle');
  dropdown.addEventListener('click', function (e) {
    e.preventDefault();
    const parent = this.parentElement;
    parent.classList.toggle('open');
  });


  // Get elements
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImg');
  const closeBtn = document.querySelector('.close');

  // Attach click event to all product images
  document.querySelectorAll('.product-card img').forEach(img => {
    img.addEventListener('click', () => {
      modal.style.display = 'block';
      modalImg.src = img.src;
      modalImg.alt = img.alt;
    });
  });

  // Close modal when clicking on the close button
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  // Optional: close modal on outside click
  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });

  