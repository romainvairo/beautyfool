const { ActualityController } = require('../../Controllers');
const { actualities } = require('./data');

module.exports = () => Promise.all(actualities.map(ActualityController.add));
