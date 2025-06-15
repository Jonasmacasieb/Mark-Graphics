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

// API endpoint to load hoodie images
app.get('/api/hoodies', (req, res) => {
  exec('python3 list_images.py', (err, stdout) => {
    if (err) return res.status(500).json({ error: 'Python failed' });
    try {
      const images = JSON.parse(stdout);
      res.json(images);
    } catch {
      res.status(500).json({ error: 'Invalid Python output' });
    }
  });
});

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server on port ${PORT}`));

