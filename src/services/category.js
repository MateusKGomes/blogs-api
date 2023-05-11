const { Category } = require('../models');

const createCategory = (body) => Category.create(body);

const getAllCategories = () => Category.findAll();

module.exports = { createCategory, getAllCategories };