const blogPostsServices = require('../services/BlogPost');

const createPost = async (req, res) => {
    const { id } = req.payload.data;
    const { title, content, categoryIds } = req.body;
    const newPost = await blogPostsServices
    .createPost(title, content, categoryIds, { userId: id });
    if (newPost.type) {
        return res.status(newPost.type).json(newPost.message);
    }
    return res.status(201).json(newPost.message);
}; 

const getAllPosts = async (req, res) => {
    const posts = await blogPostsServices.getAllPosts();
    return res.status(200).json(posts);
};

const findPostById = async (req, res) => {
    const { id } = req.params;
    const postId = await blogPostsServices.getPostById(id);
    if (postId.type) { 
        return res.status(404).json(postId.message);
    }
    return res.status(200).json(postId.message);
};

const updatePost = async (req, res) => {
    const { title, content } = req.body;
    const { id } = req.params;
    const { id: idUser } = req.payload.data;
    if (idUser !== +id) {
        return res.status(401).json({ message: 'Unauthorized user' });
    }
    const post = await blogPostsServices.updatePost(title, content, id);
    return res.status(200).json(post.message);
};

const deletePost = async (req, res) => {
    const { id } = req.params;
    const { id: idUser } = req.payload.data;
    const post = await blogPostsServices.deletePost(id);
    if (post.type) {
        return res.status(post.type).json(post.message);
    } 
    if (idUser !== post.userId) {
        return res.status(401).json({ message: 'Unauthorized user' });
    }
    return res.status(204).json();
};

module.exports = { createPost, getAllPosts, findPostById, updatePost, deletePost };