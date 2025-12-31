const express = require('express');
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables from .env file

const PORT = process.env.PORT || 5000; // Define the port
const path = require('path'); // Require path module
const app = express();  // Create an Express application


let posts = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post two'},
    {title: 'Post Three', body: 'This is post three'},
];


// Middleware to serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Get all posts
app.get('/api/posts', (req, res) => {
    res.status(200).json(posts);
});

// Get a single post by ID
app.get('/api/posts/:id', (req, res) => {
    const id = req.params.id;
    const post = posts.find(post => post.id === parseInt(id));
    if (!post) {
        return res
            .status(404)
            .json({ message: "Post not found" });
    }
    res.status(200).json(post);
});

// Create a new post
app.post('/api/posts', express.json(), (req, res) => {
    const newPost = {
        id: posts.length + 1,
        title: req.body.title,
        body: req.body.body
    };
    posts.push(newPost);
    res.status(201).json(newPost);
});

// Start the server and listen on the defined port
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`)); 