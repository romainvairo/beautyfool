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
   * find all acutalities
   * @param {Number} page
   */
  findActualities: (page) => {
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
   * delete an actuality by its id
   * @param {string} id
   */
  deleteById: id => {
    return ActualityModel.findByIdAndDelete(id);
  }
};

module.exports = ActualityController;
