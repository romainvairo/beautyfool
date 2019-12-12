const { CategoryController } = require('../../../mongoose/Controllers');
const { errorCodes } = require('../../../Errors');
const { end } = require('../../../utils');

module.exports = async (req, res) => {
  const { id, ...category } = req.body;

  try {
    await CategoryController.editById(id, category);
  } catch (error) {
    return end(res, { error: errorCodes.category.editById });
  }

  end(res, null, true);
}
