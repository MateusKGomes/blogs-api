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

module.exports = { createPost, getAllPosts };