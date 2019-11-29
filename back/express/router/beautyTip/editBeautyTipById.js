const { BeautyTipController } = require('../../../mongoose/Controllers');
const { errorCodes } = require('../../../Errors');
const { end } = require('../../../utils');

module.exports = async (req, res) => {
  const { id, ...beautyTip } = req.body;

  try {
    await BeautyTipController.editById(id, beautyTip);
  } catch (error) {
    return end(res, { error: errorCodes.beautyTip.editById });
  }

  end(res, null, true);
}
