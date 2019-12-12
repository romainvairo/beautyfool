const { CategoryController } = require('../../../mongoose/Controllers');
const { errorCodes } = require('../../../Errors');
const { end } = require('../../../utils');

module.exports = async (req, res) => {
  try {
    await CategoryController.add(req.body);
  } catch (error) {
    return end(res, { error: errorCodes.category.add });
  }

  end(res, null, true);
}
