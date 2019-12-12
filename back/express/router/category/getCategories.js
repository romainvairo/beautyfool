const { CategoryController } = require('../../../mongoose/Controllers');
const { errorCodes } = require('../../../Errors');
const { end } = require('../../../utils');

module.exports = async (req, res) => {
  let categories;

  try {
    categories = await CategoryController.findCategories();
  } catch (error){
    return end(res, { error: errorCodes.category.findAll });
  }

  end(res, { data: categories }, true);
}
