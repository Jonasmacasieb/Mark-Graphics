// const express = require('express');
// const path = require('path');
// const app = express();

// // Serve static files from the 'public' directory
// app.use(express.static(path.join(__dirname, 'public')));

// // Serve your HTML file
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

const express = require('express');
const { exec } = require('child_process');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, 'public')));

app.get('/products', (req, res) => {
  exec('python3 list_images.py', (err, stdout, stderr) => {
    if (err) return res.status(500).send("Image load error");

    let images;
    try {
      images = JSON.parse(stdout);
    } catch {
      return res.status(500).send("Invalid data");
    }

    // Build HTML
    const cards = images.map(i => `
      <div class="product-card">
        <img src="${i}" loading="lazy" alt="">
      </div>
    `).join('');

    res.send(`
      <!DOCTYPE html><html><head><title>Products</title></head><body>
      <h2>Hoodies</h2>
      <div class="product-grid">${cards}</div>
      </body></html>
    `);
  });
});

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server on ${PORT}`));
