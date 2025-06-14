
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
  
// fetch('/api/products/hoodies')
//       .then(res => res.json())
//       .then(images => {
//         const productList = document.querySelector('.product-list');
//         if (images.length === 0) {
//           productList.innerHTML = "<p>No hoodies available.</p>";
//         }
//         images.forEach((img, index) => {
//           const card = document.createElement('div');
//           card.className = 'product-card';
//           card.innerHTML = `
//             <img src="${img}" alt="Hoodie ${index + 1}" />
//             <h3>Hoodie ${index + 1}</h3>
//           `;
//           productList.appendChild(card);
//         });
//       })
//       .catch(err => {
//         console.error('Error loading images:', err);
//         document.querySelector('.product-list').innerHTML = "<p>Error loading hoodies.</p>";
//       });
