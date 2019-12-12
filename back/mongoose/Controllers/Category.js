const { CategoryModel } = require('../Models/Category');

const CategoryController = {
  /**
   * add a category into the collection
   * @param {Object} category
   * @returns {Promise}
   */
  add: category => {
    return new CategoryModel(category).save();
  },

  /**
   * find a category by its name
   * @param {String} categoryName
   */
  findByName: categoryName => {
    return CategoryModel.findOne({ name: categoryName });
  },

  /**
   * find a category by its id
   * @param {String} id
   */
  findById: id => {
    return CategoryModel.findById(id);
  },

  /**
   * find all categories
   */
  findCategories: () => {
    return CategoryModel.find();
  },

  /**
   * find a category by its id and edit it
   * @param {String} id
   * @param {Object} category
   */
  editById: (id, category) => {
    return CategoryModel.findByIdAndUpdate(id, category);
  },

  /**
   * find a category by its id and delete it
   * @param {String} id
   */
  deleteById: id => {
    return CategoryModel.findByIdAndDelete(id);
  },
};

module.exports = CategoryController;
