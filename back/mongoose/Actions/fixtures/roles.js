const { RoleController } = require('../../Controllers');
const { roles } = require('./data');

// return an array of requests
module.exports = () => Promise.all(roles.map(RoleController.add));
