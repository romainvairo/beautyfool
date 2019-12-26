const { AppointmentModel } = require('../Models/Appointment');
const UserController = require('./User');
const ServiceController = require('./Service');
const { hash } = require('../../utils');
const { BaseError, errorCodes } = require('../../Errors');

const limitByPage = 20;

const AppointmentController = {
  /**
   * add an appointment into the collection
   * @param {Object} appointment
   * @returns {Promise}
   */
  add: async appointment => {
    const appointmentDoc = await new AppointmentModel(appointment).save();
    const requests = appointment.services.map(s => ServiceController.addAppointmentById(s._id, appointmentDoc._id));

    await Promise.all(requests);
    await UserController.addAppointmentById(appointment.customer, appointmentDoc._id);

    return appointmentDoc;
  },

  /**
   * find an actuality by its id
   * @param {String} id
   */
  findById: async (id) => {
    return AppointmentModel.findById(id).populate('customer');
  },

  /**
   * find all appointments
   * @param {Number} page
   */
  findAll: (page) => {
    return AppointmentModel
      .find()
      .populate('customer')
      .populate({
        path: 'services',
        populate: 'category'
      });
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
  },

  /**
   * find appointments by the id of the customer
   * @param {String} userId
   */
  findByUserId: (userId) => {
    return AppointmentModel.find({customer: userId})
      .populate({
        path: 'services',
        populate: 'category'
      });
  }
};

module.exports = AppointmentController;
