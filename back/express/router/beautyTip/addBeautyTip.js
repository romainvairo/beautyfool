const { BeautyTipController } = require('../../../mongoose/Controllers');
const { errorCodes } = require('../../../Errors');
const { end } = require('../../../utils');

module.exports = async (req, res) => {
  try {
    await BeautyTipController.add(req.body);
  } catch (error) {
    return end(res, { error: errorCodes.beautyTip.add });
  }

  end(res, null, true);
}
