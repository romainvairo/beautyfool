const { BeautyTipController } = require('../../../mongoose/Controllers');
const { errorCodes } = require('../../../Errors');
const { end } = require('../../../utils');

module.exports = async (req, res) => {
  try {
    await BeautyTipController.deleteById(req.params.id);
  } catch (error) {
    return end(res, { error: errorCodes.beautyTip.deleteById });
  }

  end(res, null, true);
}
