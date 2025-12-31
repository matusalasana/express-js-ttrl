import express from 'express';

const router = express.Router();

let posts = [
    {id: 1, title: 'Post One', body: 'This is post one'},
    {id: 2, title: 'Post Two', body: 'This is post two'},
    {id: 3, title: 'Post Three', body: 'This is post three'},
];

// Get all posts
router.get('/', (req, res) => {
    res.status(200).json(posts);
});

// Get a single post by ID
router.get('/:id', (req, res) => {
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
router.post('/', express.json(), (req, res) => {
    const newPost = {
        id: posts.length + 1,
        title: req.body.title,
        body: req.body.body
    };
    posts.push(newPost);
    res.status(201).json(newPost);
});

// Update an existing post
router.put('/:id', express.json(), (req, res) => {
    const id = req.params.id;
    const post = posts.find(post => post.id === parseInt(id));
    if (!post) {
        return res
            .status(404)
            .json({ message: "Post not found" });
    }
    post.title = req.body.title || post.title;
    post.body = req.body.body || post.body;
    res.status(200).json(post);
});

// Delete a post
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    const postIndex = posts.findIndex(post => post.id === parseInt(id));
    if (postIndex === -1) {
        return res
            .status(404)
            .json({ message: "Post not found" });
    }
    posts.splice(postIndex, 1);
    res.status(200).json({ message: "Post deleted" });;
});

export default router;