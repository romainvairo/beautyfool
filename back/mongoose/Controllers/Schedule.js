const { ScheduleModel } = require('../Models/Schedule');
const { hash } = require('../../utils');
const { BaseError, errorCodes } = require('../../Errors');

const limitByPage = 20;

const ScheduleController = {
  /**
   * add a schedule into the collection
   * @param {Object} schedule
   * @returns {Promise}
   */
  add: schedule => {
    return new ScheduleModel(schedule).save();
  },

  /**
   * find an actuality by its id
   * @param {String} id
   */
  findById: (id) => {
    return ScheduleModel.findById(id);
  },

  /**
   * find all schedules in a page
   * @param {Number} page
   */
  findAll: (page) => {
    return ScheduleModel
    .find()
    .skip((page - 1) * limitByPage)
    .limit(limitByPage);
  },

  /**
   * edit a schedule from its id
   * @param {String} id
   * @param {Object} schedule
   */
  editById: (id, schedule) => {
    return ScheduleModel.findByIdAndUpdate(id, schedule);
  },

  /**
   * delete a schedule from its id
   * @param {String} id
   */
  deleteById: id => {
    return ScheduleModel.findByIdAndDelete(id);
  },

};

module.exports = ScheduleController;
