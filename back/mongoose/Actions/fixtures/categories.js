const { CategoryController } = require('../../Controllers');
const { categories } = require('./data');

module.exports = () => Promise.all(categories.map(CategoryController.add));
