const express = require('express');
const { exec } = require('child_process');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

// Dynamic API route: /api/:category
app.get('/api/:category', (req, res) => {
  const category = req.params.category;

  exec(`python3 list_images.py ${category}`, (err, stdout) => {
    if (err) return res.status(500).json({ error: 'Python error' });
    try {
      const data = JSON.parse(stdout);
      res.json(data);
    } catch {
      res.status(500).json({ error: 'Invalid Python output' });
    }
  });
});

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
