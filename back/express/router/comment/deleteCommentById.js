const { CommentController } = require('../../../mongoose/Controllers');
const { errorCodes } = require('../../../Errors');
const { end } = require('../../../utils');

module.exports = async (req, res) => {
  try {
    await CommentController.deleteById(req.body.id);
  } catch (error) {
    return end(res, { error: errorCodes.comment.deleteById });
  }

  end(res, null, true);
}
