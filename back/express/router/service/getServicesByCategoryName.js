const { ServiceController } = require('../../../mongoose/Controllers');
const { errorCodes } = require('../../../Errors');
const { end } = require('../../../utils');

module.exports = async (req, res) => {
  let services;

  try {
    services = await ServiceController.findByCategoryName(req.params.category_name);
  } catch (error){
    return end(res, { error: errorCodes.service.find });
  }

  end(res, { data: services }, true);
}
