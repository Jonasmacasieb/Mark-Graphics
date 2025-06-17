// const express = require('express');
// const { exec } = require('child_process');
// const path = require('path');
// const app = express();


// app.use(express.static(path.join(__dirname, 'public')));

// // Dynamic API route: /api/:category
// app.get('/api/:category', (req, res) => {
//   const category = req.params.category;

//   exec(`python3 list_images.py ${category}`, (err, stdout) => {
//     if (err) return res.status(500).json({ error: 'Python error' });
//     try {
//       const data = JSON.parse(stdout);
//       res.json(data);
//     } catch {
//       res.status(500).json({ error: 'Invalid Python output' });
//     }
//   });
// });

// app.get('/', (req, res) =>
//   res.sendFile(path.join(__dirname, 'public', 'index.html'))
// );

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


const express = require('express');
const { exec } = require('child_process');
const path = require('path');
const compression = require('compression');

const app = express();
const PORT = process.env.PORT || 3000;

// Enable gzip compression
app.use(compression());

// Serve static files (e.g., CSS, JS, fonts) with 7-day cache
app.use(express.static(path.join(__dirname, 'public'), {
  maxAge: '7d',
  setHeaders: (res) => {
    res.set('Cache-Control', 'public, max-age=604800'); // 7 days
  }
}));

// Serve images with 30-day cache
app.use('/images', express.static(path.join(__dirname, 'public/images'), {
  maxAge: '30d',
  setHeaders: (res) => {
    res.set('Cache-Control', 'public, max-age=2592000'); // 30 days
  }
}));

// API endpoint to list images from a category
app.get('/api/:category', (req, res) => {
  const category = req.params.category;

  exec(`python3 list_images.py ${category}`, (err, stdout) => {
    if (err) {
      console.error('Error running Python script:', err);
      return res.status(500).json({ error: 'Failed to load images' });
    }

    res.set('Cache-Control', 'public, max-age=300'); // 5 minutes
    res.type('application/json').send(stdout);
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
