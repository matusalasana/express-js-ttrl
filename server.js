const express = require('express');

const PORT = 3000;      // Define the port number
const path = require('path'); // Require path module
const app = express();  // Create an Express application


// setup static file serving
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Define routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname , 'public', '/index.html'));
});
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname , 'public', '/about.html'));
});

// Start the server and listen on the defined port
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`)); 