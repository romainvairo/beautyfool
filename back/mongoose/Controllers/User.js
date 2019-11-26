const { UserModel } = require('../Models/User');

const UserController = {
  add: user => {
    const userSave = new UserModel(user);
    return userSave.save();
  },

};

module.exports = UserController;
