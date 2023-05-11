const categoryServices = require('../services/category');

const createCategory = async (req, res) => {
    const name = req.body;
    const category = await categoryServices.createCategory(name);
    return res.status(201).json(category);
};

const getAllCategories = async (req, res) => {
    const categories = await categoryServices.getAllCategories();
    return res.status(200).json(categories);
};

module.exports = {
    createCategory,
    getAllCategories,
};