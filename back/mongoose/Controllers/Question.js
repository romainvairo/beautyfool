const { QuestionModel } = require('../Models/Question');
const { hash } = require('../../utils');
const { BaseError, errorCodes } = require('../../Errors');

const limitByPage = 20;

const QuestionController = {
  /**
   * add a question into the collection
   * @param {Object} question
   * @returns {Promise}
   */
  add: question => {
    return new QuestionModel(question).save();
  },

  /**
   * find an actuality by its id
   * @param {String} id
   */
  findById: (id) => {
    return QuestionModel.findById(id);
  },

  /**
   * find all questions
   * @param {Number} page
   */
  findAll: (page) => {
    return QuestionModel
      .find()
      .skip((page -1) * limitByPage)
      .limit(limitByPage);
  },

  /**
   * edit a question from it's id
   * @param {String} id
   * @param {Object} question
   */
  editById: (id, question) => {
    return QuestionModel.findByIdAndUpdate(id, question);
  },

  /**
   * delete a question from it's id
   * @param {String} id
   * @param {Object} question
   */
  deleteById: id => {
    return QuestionModel.findByIdAndDelete(id);
  },
};

module.exports = QuestionController;
