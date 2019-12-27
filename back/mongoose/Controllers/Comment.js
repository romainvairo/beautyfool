const { CommentModel } = require('../Models/Comment');
const { hash } = require('../../utils');
const { BaseError, errorCodes } = require('../../Errors');

const limitByPage = 20;

const CommentController = {
  /**
   * add a comment into the collection
   * @param {Object} comment
   * @returns {Promise}
   */
  add: comment => {
    return new CommentModel(comment).save();
  },

  /**
   * find an actuality by its id
   * @param {String} id
   */
  findById: (id) => {
    return CommentModel.findById(id).populate('user');
  },

  /**
   * find all comments
   * @param {Number} page
   */
  findAll: (page) => {
    return CommentModel
      .find()
      .skip((page - 1) * limitByPage)
      .limit(limitByPage)
      .populate('user');
  },

  /**
   * edit comment by its id
   * @param {String} id
   * @param {Object} comment
   */
  editById: (id, comment) => {
    return CommentModel.findByIdAndUpdate(id, comment);
  },

  /**
   * delete comment by its id
   * @param {String} id
   */
  deleteById: id => {
    return CommentModel.findByIdAndDelete(id);
  }
};

module.exports = CommentController;
