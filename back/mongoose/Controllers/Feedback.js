const { FeedbackModel } = require('../Models/Feedback');

const FeedbackController = {
  add: feedback => {
    return new FeedbackModel(feedback).save();
  },

  addComment: (feedbackId, commentId) => {
    return FeedbackModel.findByIdAndUpdate(feedbackId, { $push: { comments: commentId } });
  },

  // TODO delete
  findByRate: rate => {
    return FeedbackModel.findOne({ rate });
  }
};

module.exports = FeedbackController;
