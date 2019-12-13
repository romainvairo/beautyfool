const { ServiceController, CategoryController } = require('../../Controllers');
const { services } = require('./data');

module.exports = () => Promise.all(services.map(async service => {
  service.category = (await CategoryController.findByName(service.category))._id;

  const serviceDoc = await ServiceController.add(service);

  await CategoryController.addServiceById(service.category, serviceDoc._id);

  return serviceDoc;
}));
