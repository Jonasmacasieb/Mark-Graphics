document.addEventListener('DOMContentLoaded', () => {
  const productList = document.querySelector('.product-list');

  // Get the category from the current page (e.g. "hoodies.html")
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
          <img src="${product.image}" alt="${product.name}">
          <h3>${product.name}</h3>
        `;
        productList.appendChild(card);
      });
    })
    .catch(err => {
      productList.innerHTML = "<p>Failed to load products.</p>";
      console.error(err);
    });
});
