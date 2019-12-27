const CategoryController = require('./Category');
const { ServiceModel } = require('../Models/Service');
const { BaseError, errorCodes } = require('../../Errors');

const limitByPage = 20;

const ServiceController = {
  /**
   * add a service into the collection
   * @param {Object} service
   * @returns {Promise}
   */
  add: service => {
    return new ServiceModel(service).save();
  },

  /**
   * find a service by its name
   * @param {String} serviceName
   */
  findByName: serviceName => {
    return ServiceModel.findOne({ name: serviceName });
  },

  /**
   * add a feedback to a service
   * @param {String} serviceId
   * @param {String} feedbackId
   */
  addFeedbackById: (serviceId, feedbackId) => {
    return ServiceModel.findByIdAndUpdate(serviceId, { $push: { feedbacks: feedbackId } });
  },

  /**
   * add a appointment to a service
   * @param {String} serviceId
   * @param {String} appointmentId
   */
  addAppointmentById: (serviceId, appointmentId) => {
    return ServiceModel.findByIdAndUpdate(serviceId, { $push: { appointments: appointmentId } });
  },

  /**
   * find a service by the name of its category
   * @param {String} categoryName
   */
  findByCategoryName: async categoryName => {
    const category = await CategoryController.findByName(categoryName);

    if (!category) {
      return null;
    }

    return await ServiceModel.find({ category: category._id });
  },

  /**
   * find a service by the slug of its category
   * @param {String} categorySlug
   */
  findByCategorySlug: async categorySlug => {
    const category = await CategoryController.findBySlug(categorySlug);

    if (!category) {
      return null;
    }

    return await ServiceModel.find({ category: category._id });
  },

  /**
   * find an actuality by its id
   * @param {String} id
   */
  findById: (id) => {
    return ServiceModel.findById(id);
  },

  findAllById: (ids) => {
    return ServiceModel.find({ _id: { $in: ids } }).populate('category');
  },

  /**
   * find all services in a page
   * @param {Number} page
   */
  findAll: (page) => {
    return ServiceModel
      .find()
      .skip((page - 1) * limitByPage)
      .limit(limitByPage)
      .populate('category');
  },

  /**
   * find a service and edit it by an id
   * @param {String} id
   * @param {Object} service
   */
  editById: (id, service) => {
    return ServiceModel.findByIdAndUpdate(id, service);
  },

  /**
   * find and delete a service by an id
   * @param {String} id
   */
  deleteById: id => {
    return ServiceModel.findByIdAndDelete(id);
  },
};

module.exports = ServiceController;
