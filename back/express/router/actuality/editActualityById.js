const { ActualityController } = require('../../../mongoose/Controllers');
const { errorCodes } = require('../../../Errors');
const { end } = require('../../../utils');

module.exports = async (req, res) => {
  const { id, ...actuality } = req.body;

  try {
    await ActualityController.editById(id, actuality);
  } catch (error) {
    return end(res, { error: errorCodes.actuality.editById });
  }

  end(res, null, true);
}
