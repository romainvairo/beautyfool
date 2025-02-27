const { ActualityModel } = require('../Models/Actuality');
const { hash } = require('../../utils');
const { BaseError, errorCodes } = require('../../Errors');

const limitByPage = 20;

const ActualityController = {
  /**
   * add an actuality into the collection
   * @param {Object} actuality
   * @returns {Promise}
   */
  add: actuality => {
    return new ActualityModel(actuality).save();
  },

  /**
   * find an actuality by its id
   * @param {String} id
   */
  findById: (id) => {
    return ActualityModel.findById(id);
  },

  /**
   * find newest actuality
   */
  findNewestActuality: () => {
    return ActualityModel.findOne().sort({ _id: -1 });
  },

  /**
   * find all acutalities
   * @param {Number} page
   */
  findAll: (page) => {
    return ActualityModel
      .find()
      .skip((page - 1) * limitByPage)
      .limit(limitByPage);
  },

  /**
   * edit actuality by its id
   * @param {String} id
   * @param {Object} acutality
   */
  editById: (id, actuality) => {
    return ActualityModel.findByIdAndUpdate(id, actuality);
  },

  /**
   * get the count of all actualities
   */
  count: () => {
    return ActualityModel.countDocuments();
  },

  /**
   * delete an actuality by its id
   * @param {string} id
   */
  deleteById: id => {
    return ActualityModel.findByIdAndDelete(id);
  }
};

module.exports = ActualityController;
