const { FeedbackController, UserController, ServiceController } = require('../../Controllers');
const { feedbacks } = require('./data');

module.exports = () => {
  const populatedFeedbacks = feedbacks.map(async feedback => {
    feedback.user = await UserController.
  })
}