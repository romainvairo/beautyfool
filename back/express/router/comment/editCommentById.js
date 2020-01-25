const { CommentController } = require('../../../mongoose/Controllers');
const { errorCodes } = require('../../../Errors');
const { end } = require('../../../utils');

module.exports = async (req, res) => {
  const { id, ...comment } = req.body;

  try {
    await CommentController.editById(id, comment);
  } catch (error) {
    return end(res, { error: errorCodes.comment.editById });
  }

  end(res, null, true);
}
