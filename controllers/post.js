import posts from '../data/posts.js';


const getPosts = (req, res) => {
    res.status(200).json(posts);
}

const getPostById = (req, res) => {
    const id = req.params.id;
    const post = posts.find(post => post.id === parseInt(id));
    if (!post) {
        return res
            .status(404)
            .json({ message: "Post not found" });
    }
    res.status(200).json(post);
}

const createPost = (req, res) => {
    const newPost = {
        id: posts.length + 1,
        title: req.body.title,
        body: req.body.body
    };
    posts.push(newPost);
    res.status(201).json(newPost);
}

const updatePost = (req, res) => {
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
}

const deletePost = (req, res) => {
    const id = req.params.id;
    const postIndex = posts.findIndex(post => post.id === parseInt(id));
    if (postIndex === -1) {
        return res
            .status(404)
            .json({ message: "Post not found" });
    }
    posts.splice(postIndex, 1);
    res.status(200).json({ message: "Post deleted" });
}

export {
    getPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost
};