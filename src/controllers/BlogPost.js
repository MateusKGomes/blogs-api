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

module.exports = { createPost };