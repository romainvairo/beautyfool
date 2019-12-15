const { RoleModel } = require('../Models/Role');
const { hash } = require('../../utils');
const { BaseError, errorCodes } = require('../../Errors');

const limitByPage = 20;

const RoleController = {
  /**
   * add a role into the collection
   * @param {Object} role
   * @returns {Promise}
   */
  add: role => {
    return new RoleModel(role).save();
  },

  /**
   * find a role by its name
   * @param {String} roleName
   */
  findByName: roleName => {
    return RoleModel.findOne({ name: roleName });
  },

  /**
   * get all the roles
   */
  findAll: () => {
    return RoleModel.find();
  },
};

module.exports = RoleController;
