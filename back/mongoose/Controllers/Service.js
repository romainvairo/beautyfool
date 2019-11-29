const { ServiceModel } = require('../Models/Service');
const { hash } = require('../../utils');
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
   * find an actuality by its id
   * @param {String} id
   */
  findById: (id) => {
    return ServiceModel.findById(id);
  },

  /**
   * find all services in a page
   * @param {Number} page
   */
  findServices: (page) => {
    return ServiceModel
      .find()
      .skip((page - 1) * limitByPage)
      .limit(limitByPage);
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
