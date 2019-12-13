const { CategoryModel } = require('../Models/Category');
const uniqueSlug = require ('../../utils/uniqueSlug');

const CategoryController = {
  /**
   * add a category into the collection
   * @param {Object} category
   * @returns {Promise}
   */
  add: async category => {
    // @ts-ignore
    category.slug = await CategoryController.slugify(category.name);
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
   * find a category by its slug
   * @param {String} categorySlug
   */
  findBySlug: categorySlug => {
    return CategoryModel.findOne({ slug: categorySlug });
  },

  /**
   * find all categories
   */
  findCategories: () => {
    return CategoryModel.find().populate('services');
  },

  slugify: uniqueSlug(CategoryModel),

  /**
   * add a service to a category using their id
   * @param {String} categoryId
   * @param {String} serviceId
   */
  addServiceById: (categoryId, serviceId) => {
    return CategoryModel.findByIdAndUpdate(categoryId, { $push: { services: serviceId } });
  },

  /**
   * find a category by its id and edit it
   * @param {String} id
   * @param {Object} category
   */
  editById: async (id, category) => {
    if (category.name) {
      category.slug = await CategoryController.slugify(category.name, id);
    }
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
