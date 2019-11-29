const { ActualityController } = require('../../../mongoose/Controllers');
const { errorCodes } = require('../../../Errors');
const { end } = require('../../../utils');

module.exports = async (req, res) => {
  try {
    await ActualityController.add(req.body);
  } catch (error) {
    return end(res, { error: errorCodes.actuality.add });
  }

  end(res, null, true);
}
