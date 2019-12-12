const { ActualityController } = require('../../../mongoose/Controllers');
const { errorCodes } = require('../../../Errors');
const { end } = require('../../../utils');

module.exports = async (req, res) => {
  let actuality;

  try {
    actuality = await ActualityController.findNewestActuality();
  } catch (error) {
    // @ts-ignore
    return end(res, { error: errorCodes.actuality.findNewest });
  }

  end(res, { data: actuality } , true);
}
