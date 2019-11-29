const { CommentController } = require('../../../mongoose/Controllers');
const { errorCodes } = require('../../../Errors');
const { end } = require('../../../utils');

module.exports = async (req, res) => {
  let comment;

  try {
    comment = await CommentController.findById(req.body.id);
  } catch (error) {
    return end(res, { error: errorCodes.comment.findById });
  }

  end(res, { data: comment }, true);
}
