const { ActualityController } = require('../../../mongoose/Controllers');
const { errorCodes } = require('../../../Errors');
const { end } = require('../../../utils');

module.exports = async (req, res) => {
  let actualities;

  try {
    actualities = await ActualityController.findActualities(req.body.page);
  } catch (error) {
    return end(res, { error: errorCodes.actuality.findAll });
  }

  end(res, { data: actualities } , true);
}
