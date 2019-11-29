const { FeedbackController } = require('../../../mongoose/Controllers');
const { errorCodes } = require('../../../Errors');
const { end } = require('../../../utils');

module.exports = async (req, res) => {
  try {
    await FeedbackController.add(req.body);
  } catch (error) {
    return end(res, { error: errorCodes.feedback.add });
  }

  end(res, null, true);
}
