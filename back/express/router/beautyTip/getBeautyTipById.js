const { BeautyTipController } = require('../../../mongoose/Controllers');
const { errorCodes } = require('../../../Errors');
const { end } = require('../../../utils');

module.exports = async (req, res) => {
  let beautyTip;

  try {
    beautyTip = await BeautyTipController.findById(req.body.id);
  } catch (error) {
    return end(res, { error: errorCodes.beautyTip.findById });
  }

  end(res, { data: beautyTip } , true);
}
