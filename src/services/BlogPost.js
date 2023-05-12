const { BlogPost, PostCategory, User, Category } = require('../models');
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

const getAllPosts = async () => {
    const findAll = await BlogPost.findAll({
        include: [
        { model: User,
            as: 'user',
        attributes: {
            exclude: ['password'],
        } },
        { model: Category, as: 'categories', through: { attributes: [] } }, 
        ],
    });
    return findAll;
};

const getPostById = async (id) => {
    const findId = await BlogPost.findByPk(id, {
        include: [
        { model: User,
            as: 'user',
        attributes: {
            exclude: ['password'],
        } },
        { model: Category, as: 'categories', through: { attributes: [] } }, 
        ],
    });
    return findId;
};

module.exports = { createPost, getAllPosts, getPostById };