// server.js
const express = require('express');
const { exec } = require('child_process');
const path = require('path');
const app = express();

// Static files with cache headers
app.use('/images', express.static(path.join(__dirname, 'public', 'images'), {
  setHeaders: (res) => {
    res.set('Cache-Control', 'public, max-age=2592000'); // 30 days
  }
}));

// Dynamic API route: /api/:category
app.get('/api/:category', (req, res) => {
  const category = req.params.category;

  exec(`python3 list_images.py ${category}`, (err, stdout) => {
    if (err) {
      console.error('Python error:', err);
      return res.status(500).json({ error: 'Python error' });
    }
    try {
      const data = JSON.parse(stdout);
      res.json(data);
    } catch (parseErr) {
      console.error('JSON parse error:', parseErr);
      res.status(500).json({ error: 'Invalid Python output' });
    }
  });
});

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
