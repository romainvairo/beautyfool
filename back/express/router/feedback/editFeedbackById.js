const { FeedbackController } = require('../../../mongoose/Controllers');
const { errorCodes } = require('../../../Errors');
const { end } = require('../../../utils');

module.exports = async (req, res) => {
  const { id, ...feedback } = req.body;

  try {
    await FeedbackController.editById(id, feedback);
  } catch (error) {
    return end(res, { error: errorCodes.feedback.editById });
  }

  end(res, null, true);
}
