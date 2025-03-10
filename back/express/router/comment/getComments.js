const { CommentController } = require('../../../mongoose/Controllers');
const { errorCodes } = require('../../../Errors');
const { end } = require('../../../utils');

module.exports = async (req, res) => {
  let comments;

  try {
    comments = await CommentController.findAll(req.params.page);
  } catch (error) {
    return end(res, { error: errorCodes.comment.findAll });
  }

  end(res, { data: comments }, true);
}
