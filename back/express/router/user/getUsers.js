const { UserController } = require('../../../mongoose/Controllers');
const { errorCodes } = require('../../../Errors');
const { RequestHandler } = require('../../../services');

module.exports = (req, res) => {
  new RequestHandler(res)
    .error(errorCodes.user.findAll)
    .then(() => UserController.findUsers(req.params.page));
}
