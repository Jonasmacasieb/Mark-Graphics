document.addEventListener('DOMContentLoaded', () => {
  const productList = document.querySelector('.product-list');
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImg');
  const closeBtn = document.querySelector('.close');

  const pathParts = window.location.pathname.split('/');
  const pageName = pathParts[pathParts.length - 1];
  const category = pageName.replace('.html', '');

  fetch(`/api/${category}`)
    .then(res => res.json())
    .then(products => {
      if (!products.length) {
        productList.innerHTML = "<p>No products found.</p>";
        return;
      }

      products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
          <picture>
            <source srcset="${product.image.replace('.jpg', '.webp')}" type="image/webp">
            <img src="${product.image}" alt="${product.name}" class="product-img">
          </picture>
          <h3>${product.name}</h3>
        `;
        productList.appendChild(card);
      });

      // Attach click event to all product images AFTER they've been added to the DOM
      document.querySelectorAll('.product-img').forEach(img => {
        img.addEventListener('click', () => {
          modal.style.display = "block";
          modalImg.src = img.src;
        });
      });
    })
    .catch(err => {
      productList.innerHTML = "<p>Failed to load products.</p>";
      console.error(err);
    });

  // Close modal when close button is clicked
  closeBtn.addEventListener('click', () => {
    modal.style.display = "none";
  });

  // Close modal when clicking outside the image
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
