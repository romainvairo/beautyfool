const { UserModel } = require('../Models/User');
const { hash } = require('../../utils');
const { BaseError, errorCodes } = require('../../Errors');

const UserController = {
  // add user into the collection
  // hash the password of the user
  add: async user => {
    user.password = await hash(user.password);
    return await (new UserModel(user).save());
  },

  findByName: username => {
    return UserModel.findOne({ username }).select('-password');
  },

  // get all except password
  findByEmail: email => {
    return UserController.findFullUserByEmail(email).select('-password');
  },

  // get all
  findFullUserByEmail: email => {
    return UserModel.findOne({ email });
  },

  login: async user => {
    // get the user depending on the given email
    const userInDb = await UserController.findFullUserByEmail(user.email);

    if (!userInDb) {
      throw new BaseError(errorCodes.user.login.noUser);
    }

    // get if password match
    const match = await userInDb.comparePassword(user.password);

    if (match) {
      return userInDb;
    }

    throw new BaseError(errorCodes.user.login.incorrectPassword);
  },

};

module.exports = UserController;
