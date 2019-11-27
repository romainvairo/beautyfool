const { FeedbackController, UserController, ServiceController } = require('../../Controllers');
const { feedbacks } = require('./data');

module.exports = () => {
  return Promise.all(feedbacks.map(async feedback => {
    feedback.user = (await UserController.findByName(feedback.user))._id;
    feedback.service = (await ServiceController.findByName(feedback.service))._id;

    return FeedbackController.add(feedback);
  }));
}
