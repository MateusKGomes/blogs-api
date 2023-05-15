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
    if (!findId) {
        return { type: 404, message: { message: 'Post does not exist' } }; 
    }
    return { type: null, message: findId };
};

const updatePost = async (title, content, id) => {
    await BlogPost.update(
        { title, content },
        { where: { id } },
        {
            include: [
            { model: User,
                as: 'user',
            attributes: {
                exclude: ['password'],
            } },
            { model: Category, as: 'categories', through: { attributes: [] } }, 
            ],
        },
    );
    const postId = await getPostById(id);
    return postId;
};

const deletePost = async (id) => {
    const postId = await getPostById(id);
    if (postId.type) {
        return { type: 404, message: { message: 'Post does not exist' } };
    }
    const post = await BlogPost.destroy({
        where: { id },
    });
    const { userId } = postId.message.dataValues;
    return { type: null, message: post, userId };
};

module.exports = { createPost, getAllPosts, getPostById, updatePost, deletePost };