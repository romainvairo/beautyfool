const { ActualityController } = require('../../../mongoose/Controllers');
const { errorCodes } = require('../../../Errors');
const { end } = require('../../../utils');

module.exports = async (req, res) => {
  let actuality;

  try {
    actuality = await ActualityController.findById(req.body.id);
  } catch (error) {
    return end(res, { error: errorCodes.actuality.findById });
  }

  end(res, { data: actuality } , true);
}
