const { RoleModel } = require('../Models/Role');

const RoleController = {
  // add a role to the collection
  add: role => {
    return new RoleModel(role).save();
  },
  // find a role by its name
  findByName: roleName => {
    return RoleModel.findOne({ name: roleName });
  },
};

module.exports = RoleController;
