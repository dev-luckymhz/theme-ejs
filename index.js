const express = require('express');
const app = express();
const port = 3000;

// Set view engine to EJS
app.set('view engine', 'ejs');

// Serve static files (optional)
app.use(express.static('public'));

// Route
app.get('/', (req, res) => {
    res.render('index', { title: 'EJS Test', message: 'Hello from EJS!' });
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
