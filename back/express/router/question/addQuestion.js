const { QuestionController } = require('../../../mongoose/Controllers');
const { errorCodes } = require('../../../Errors');
const { RequestHandler } = require('../../../services');

module.exports = (req, res) => {
  new RequestHandler(res)
    .error(errorCodes.question.add)
    .then(() => QuestionController.add(req.body));
}
