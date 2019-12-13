const { ServiceController } = require('../../../mongoose/Controllers');
const { errorCodes } = require('../../../Errors');
const { end } = require('../../../utils');

module.exports = async (req, res) => {
  let services;

  try {
    services = await ServiceController.findByCategorySlug(req.params.category_slug);
  } catch (error){
    return end(res, { error: errorCodes.service.find });
  }
  console.log(services);

  end(res, { data: services }, true);
}
