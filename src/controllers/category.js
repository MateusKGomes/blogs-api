const categoryServices = require('../services/category');

const createCategory = async (req, res) => {
    const name = req.body;
    const category = await categoryServices.createCategory(name);
    return res.status(201).json(category);
};

module.exports = {
    createCategory,
};