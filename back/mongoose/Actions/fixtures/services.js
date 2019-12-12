const { ServiceController, CategoryController } = require('../../Controllers');
const { services } = require('./data');

module.exports = () => Promise.all(services.map(async service => {
  service.category = (await CategoryController.findByName(service.category))._id;

  return ServiceController.add(service);
}));
