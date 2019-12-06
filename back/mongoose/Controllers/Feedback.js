const { FeedbackModel } = require('../Models/Feedback');
const { hash } = require('../../utils');
const { BaseError, errorCodes } = require('../../Errors');

const limitByPage = 20;

const FeedbackController = {
  /**
   * add a feedback into the collection
   * @param {Object} feedback
   * @returns {Promise}
   */
  add: feedback => {
    return new FeedbackModel(feedback).save();
  },

  /**
   * add a comment to a feedback
   * @param {String} feedbackId
   * @param {String} commentId
   */
  addComment: (feedbackId, commentId) => {
    return FeedbackModel.findByIdAndUpdate(feedbackId, { $push: { comments: commentId } });
  },

  // TODO delete
  findByRate: rate => {
    return FeedbackModel.findOne({ rate });
  },

  /**
   * find an actuality by its id
   * @param {String} id
   */
  findById: (id) => {
    return FeedbackModel.findById(id);
  },

  /**
   * find all feedbacks
   * @param {Number} page
   */
  findFeedbacks: (page) => {
    return FeedbackModel
      .find()
      .skip((page - 1) * limitByPage)
      .limit(limitByPage)
      .populate('service')
      .populate('user');
  },

  /**
   * edit a feedback by its id
   * @param {String} id
   * @param {Object} feedback
   */
  editById: (id, feedback) => {
    return FeedbackModel.findByIdAndUpdate(id, feedback);
  },

  /**
   * delete a feedback by its id
   * @param {String} id
   */
  deleteById: id => {
    return FeedbackModel.findByIdAndDelete(id);
  }
};

module.exports = FeedbackController;
