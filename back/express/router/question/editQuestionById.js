const { QuestionController } = require('../../../mongoose/Controllers');
const { errorCodes } = require('../../../Errors');
const { RequestHandler } = require('../../../services');

module.exports = (req, res) => {
  const { id, ...question } = req.body;

  new RequestHandler(res)
    .error(errorCodes.question.editById)
    .then(() => QuestionController.editById(id, question));
}
