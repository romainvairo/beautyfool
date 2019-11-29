const { ServiceController } = require('../../Controllers');
const { services } = require('./data');

module.exports = () => Promise.all(services.map(ServiceController.add));
