const { FeedbackController } = require('../../../mongoose/Controllers');
const { errorCodes } = require('../../../Errors');
const { end } = require('../../../utils');

module.exports = async (req, res) => {
  let feedbacks;

  try {
    feedbacks = await FeedbackController.findFeedbacks(req.body.page);
  } catch (error){
    return end(res, { error: errorCodes.feedback.findAll });
  }

  end(res, { data: feedbacks }, true);
}
