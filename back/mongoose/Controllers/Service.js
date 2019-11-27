const { ServiceModel } = require('../Models/Service');

const ServiceController = {
  add: service => {
    return new ServiceModel(service).save();
  },

  findByName: serviceName => {
    return ServiceModel.findOne({ name: serviceName });
  },
};

module.exports = ServiceController;
