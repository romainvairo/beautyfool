const { CommentController } = require('../../../mongoose/Controllers');
const { errorCodes } = require('../../../Errors');
const { end } = require('../../../utils');

module.exports = async (req, res) => {
  try {
    await CommentController.add(req.body);
  } catch (error) {
    return end(res, { error: errorCodes.image.add });
  }

  end(res, null, true);
}
