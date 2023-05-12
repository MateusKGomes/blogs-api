const { BlogPost, PostCategory } = require('../models');
const categoryServices = require('./category');

const createPost = async (title, content, categoryIds, { userId }) => {
    const getCategories = await categoryServices.getAllCategories();
    const checkCategory = getCategories.map((value) => value.dataValues.id)
    .filter((el) => categoryIds.includes(el));

    if (categoryIds.length !== checkCategory.length) {
        return { type: 400, message: { message: 'one or more "categoryIds" not found' } };
    }
    const newPost = await BlogPost
    .create({
        title,
        content,
        categoryIds,
        userId,
    });

    Promise.all(categoryIds
        .map((el) => PostCategory.create({ postId: newPost.id, categoryId: el })));

    return { type: null, message: newPost };
};

module.exports = { createPost };