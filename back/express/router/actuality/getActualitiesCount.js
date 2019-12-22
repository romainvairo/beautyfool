const { ActualityController } = require('../../../mongoose/Controllers');
const { errorCodes } = require('../../../Errors');
const { end } = require('../../../utils');

module.exports = async (req, res) => {
  let count;

  try {
    count = await ActualityController.count();
  } catch (error) {
    console.error(error);

    return end(res, { error: errorCodes.actuality.getCount });
  }

  end(res, { data: count }, true);
}
