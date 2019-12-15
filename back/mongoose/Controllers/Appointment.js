const { AppointmentModel } = require('../Models/Appointment');
const { hash } = require('../../utils');
const { BaseError, errorCodes } = require('../../Errors');

const limitByPage = 20;

const AppointmentController = {
  /**
   * add an appointment into the collection
   * @param {Object} appointment
   * @returns {Promise}
   */
  add: appointment => {
    return new AppointmentModel(appointment).save();
  },

  /**
   * find an actuality by its id
   * @param {String} id
   */
  findById: (id) => {
    return AppointmentModel.findById(id).populate('customer');
  },

  /**
   * find all appointments
   * @param {Number} page
   */
  findAll: (page) => {
    return AppointmentModel
      .find()
      .skip((page - 1) * limitByPage)
      .limit(limitByPage)
      .populate('customer');
  },
  /**
   * find appointment by its id
   * @param {String} id
   * @param {Object} appointment
   */
  editById: (id, appointment) => {
    return AppointmentModel.findByIdAndUpdate(id, appointment);
  },

  /**
   * delete appointment by its id
   * @param {String} id
   */
  deleteById: id => {
    return AppointmentModel.findByIdAndDelete(id);
  }
};

module.exports = AppointmentController;
