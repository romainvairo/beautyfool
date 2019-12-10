const { BeautyTipController } = require('../../../mongoose/Controllers');
const { errorCodes } = require('../../../Errors');
const { end } = require('../../../utils');

module.exports = async (req, res) => {
  let beautyTip;

  try {
    beautyTip = await BeautyTipController.findNewestBeautyTip();
  } catch (error) {
    // @ts-ignore
    return end(res, { error: errorCodes.actuality.findNewest });
  }

  end(res, { data: beautyTip } , true);
}
