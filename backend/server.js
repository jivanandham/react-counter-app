const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

let counter = 0; // Counter variable

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

// API to get the current counter value
app.get('/counter', (req, res) => {
  res.json({ counter });
});

// API to increment the counter
app.post('/increment', (req, res) => {
  counter += 1;
  res.json({ counter });
});

// API to decrement the counter
app.post('/decrement', (req, res) => {
  counter -= 1;
  res.json({ counter });
});

// Serve the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
