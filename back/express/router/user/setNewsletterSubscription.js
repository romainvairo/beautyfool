const { UserController } = require('../../../mongoose/Controllers');
const { errorCodes } = require('../../../Errors');
const { RequestHandler } = require('../../../services');

module.exports = (req, res) => {
  const { isSubscribed } = req.body;

  new RequestHandler(res)
    .error(errorCodes.user.setNewsletterSubscritionById)
    .then(() => UserController.setNewsletterSubscritionById(req.params.id, isSubscribed));
}
