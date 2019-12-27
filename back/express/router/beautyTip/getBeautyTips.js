const { BeautyTipController } = require('../../../mongoose/Controllers');
const { errorCodes } = require('../../../Errors');
const { end } = require('../../../utils');

module.exports = async (req, res) => {
  let beautyTips;

  try {
    beautyTips = await BeautyTipController.findAll(req.params.page);
  } catch (error) {
    return end(res, { error: errorCodes.beautyTip.findAll });
  }

  end(res, { data: beautyTips } , true);
}
