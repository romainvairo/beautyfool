const { ActualityController } = require('../../../mongoose/Controllers');
const { errorCodes } = require('../../../Errors');
const { end } = require('../../../utils');

module.exports = async (req, res) => {
  try {
    await ActualityController.deleteById(req.body.id);
  } catch (error) {
    return end(res, { error: errorCodes.actuality.deleteById });
  }

  end(res, null, true);
}
