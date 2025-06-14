  const products = [
    { image: "../images/tshirts/t1.jpg", name: "Graphic Tee 1" },
    { image: "../images/tshirts/t2.jpg", name: "Graphic Tee 2" },
    { image: "../images/tshirts/t3.jpg", name: "Graphic Tee 3" },
    { image: "../images/tshirts/t4.jpg", name: "Graphic Tee 4" },
    { image: "../images/tshirts/t5.jpg", name: "Graphic Tee 5" },
    { image: "../images/tshirts/t6.jpg", name: "Graphic Tee 6" },
    { image: "../images/tshirts/t7.jpg", name: "Graphic Tee 7" },
    { image: "../images/tshirts/t8.jpg", name: "Graphic Tee 8" },
    { image: "../images/tshirts/t9.jpg", name: "Graphic Tee 9" },
    { image: "../images/tshirts/t10.jpg", name: "Graphic Tee 10" },
    { image: "../images/tshirts/t11.jpg", name: "Graphic Tee 11" },
    { image: "../images/tshirts/t12.jpg", name: "Graphic Tee 12" },
    { image: "../images/tshirts/t13.jpg", name: "Graphic Tee 13" },
    { image: "../images/tshirts/t14.jpg", name: "Graphic Tee 14" },
    { image: "../images/tshirts/t15.jpg", name: "Graphic Tee 15" },
    { image: "../images/tshirts/t16.jpg", name: "Graphic Tee 16" },
   
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