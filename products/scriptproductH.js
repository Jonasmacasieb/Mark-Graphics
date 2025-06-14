
  const products = [
    { image: "../images/hoodies/h1.jpg", name: "Graphic Tee 1" },
    { image: "../images/hoodies/h2.jpg", name: "Graphic Tee 2" },
   
  ];

  const productList = document.querySelector('.product-list');

  products.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      
    `;
    productList.appendChild(card);
  });

