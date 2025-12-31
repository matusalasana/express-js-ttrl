import express from 'express';
import { getPostById, getPosts, createPost, updatePost, deletePost  } from '../controllers/post'

const router = express.Router();

let posts = [
    {id: 1, title: 'Post One', body: 'This is post one'},
    {id: 2, title: 'Post Two', body: 'This is post two'},
    {id: 3, title: 'Post Three', body: 'This is post three'},
];

// Get all posts
router.get('/', getPosts);

// Get a single post by ID
router.get('/:id', getPostById);

// Create a new post
router.post('/', express.json(), createPost);

// Update an existing post
router.put('/:id', express.json(), updatePost);

// Delete a post
router.delete('/:id', deletePost);
export default router;