  const products = [
    { image: "../images/polos/p1.jpg", name: "Graphic Tee 1" },
    { image: "../images/polos/p2.jpg", name: "Graphic Tee 2" },
    { image: "../images/polos/p3.jpg", name: "Graphic Tee 3" },
    { image: "../images/polos/p4.jpg", name: "Graphic Tee 4" },
    { image: "../images/polos/p5.jpg", name: "Graphic Tee 5" },
    { image: "../images/polos/p6.jpg", name: "Graphic Tee 6" },
    { image: "../images/polos/p7.jpg", name: "Graphic Tee 7" },
    { image: "../images/polos/p8.jpg", name: "Graphic Tee 8" },
  
   
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