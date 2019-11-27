const { UserModel } = require('../Models/User');

const UserController = {
  // add user into the collection
  add: user => {
    return new UserModel(user).save();
  },

  findByName: username => {
    return UserModel.findOne({ username }).select('-password');
  },

};

module.exports = UserController;
