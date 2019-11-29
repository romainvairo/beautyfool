const { ServiceController } = require('../../../mongoose/Controllers');
const { errorCodes } = require('../../../Errors');
const { RequestHandler } = require('../../../services');

module.exports = (req, res) => {
  const { id, ...service } = req.body;

  new RequestHandler(res)
    .error(errorCodes.service.editById)
    .then(() => ServiceController.editById(id, service));
}
