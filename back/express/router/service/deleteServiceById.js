const { ServiceController } = require('../../../mongoose/Controllers');
const { errorCodes } = require('../../../Errors');
const { RequestHandler } = require('../../../services');

module.exports = (req, res) => {
  new RequestHandler(res)
    .error(errorCodes.service.deleteById)
    .then(() => ServiceController.deleteById(req.params.id));
}
