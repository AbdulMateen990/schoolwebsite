const express = require('express');
const path = require('path');

const app = express();

// Set EJS as the template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views')); // Adjust if necessary

// Serve static files
app.use(express.static(path.join(__dirname, '../public')));

// Define routes
app.get('/', (req, res) => {
  res.render('index', { title: 'School Website' });
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About Us' });
});

app.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact Us' });
});

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
