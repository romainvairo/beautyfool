const { FeedbackController } = require('../../../mongoose/Controllers');
const { errorCodes } = require('../../../Errors');
const { end } = require('../../../utils');

module.exports = async (req, res) => {
  try {
    await FeedbackController.deleteById(req.params.id);
  } catch (error) {
    return end(res, { error: errorCodes.feedback.deleteById });
  }

  end(res, null, true);
}
