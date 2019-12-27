const { ServiceController } = require('../../../mongoose/Controllers');
const { errorCodes } = require('../../../Errors');
const { RequestHandler } = require('../../../services');

module.exports = (req, res) => {
  new RequestHandler(res)
    .error(errorCodes.service.findAll)
    .then(() => ServiceController.findAll(req.params.page));
}
