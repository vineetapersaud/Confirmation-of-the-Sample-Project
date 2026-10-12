const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Tell Express to serve your existing front-end folders
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/js', express.static(path.join(__dirname, 'js')));
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// Serve your main index.html homepage at the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`🚀 Server successfully activated on port ${PORT}!`);
});
