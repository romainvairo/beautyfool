const { CategoryController } = require('../../../mongoose/Controllers');
const { errorCodes } = require('../../../Errors');
const { end } = require('../../../utils');

module.exports = async (req, res) => {
  try {
    await CategoryController.deleteById(req.params.id);
  } catch (error) {
    return end(res, { error: errorCodes.category.deleteById });
  }

  end(res, null, true);
}
