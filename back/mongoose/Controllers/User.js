const { UserModel } = require('../Models/User');
const { hash } = require('../../utils');
const { BaseError, errorCodes } = require('../../Errors');

const limitByPage = 20;

const UserController = {
  /**
   * add user into the collection
   * hash the password of the user
   * @param {Object} user
   * @returns {Promise}
   */
  add: async user => {
    user.password = await hash(user.password);
    return await (new UserModel(user).save());
  },

  /**
   * find a user by its name
   * @param {String} username
   */
  findByName: username => {
    // 'select : is to select or exclude what you target
    // example `password` will make the query return only the password
    // example `-password` will exclude password from the result
    return UserModel.findOne({ username }).select('-password');
  },

  /**
   * get a user without its password
   * @param {String} email
   */
  findByEmail: email => {
    return UserController.findFullUserByEmail(email).select('-password');
  },

  /**
   * get a user
   * @param {String} email
   */
  findFullUserByEmail: email => {
    return UserModel.findOne({ email });
  },

  /**
   * get all users that are subscribed to the newsletter
   */
  findForNewsletter: () => {
    return UserModel.find({ newsletterSubscribed: true }).select('-password');
  },

  /**
   * log a user using its email and password
   * @param {Object} user
   * @param {String} user.email
   * @param {String} user.password
   * @returns {Promise}
   */
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

    throw new BaseError(errorCodes.user.login.noUser);
  },

  /**
   * add a appointment to a user
   * @param {String} userId
   * @param {String} appointmentId
   */
  addAppointmentById: (userId, appointmentId) => {
    return UserModel.findByIdAndUpdate(userId, { $push: { appointments: appointmentId } });
  },

  /**
   * add a feedback to a user
   * @param {String} userId
   * @param {String} feedbackId
   */
  addFeedbackById: (userId, feedbackId) => {
    return UserModel.findByIdAndUpdate(userId, { $push: { feedbacks: feedbackId } });
  },

  /**
   * add a comment to a user
   * @param {String} userId
   * @param {String} commentId
   */
  addCommentById: (userId, commentId) => {
    return UserModel.findByIdAndUpdate(userId, { $push: { comments: commentId } });
  },

  /**
   * find an actuality by its id
   * @param {String} id
   */
  findById: (id) => {
    return UserModel.findById(id).select('-password');
  },

  /**
   * find all users skipping `(page - 1) * limitByPage` and limiting to `limitByPage`
   * @param {Number} page
   */
  findAll: (page) => {
    return UserModel
      .find()
      .select('-password')
      // if you do : .skip(page * limitByPage) you don't find the first 20 users
      .skip((page - 1) * limitByPage)
      .limit(limitByPage);
  },

  /**
   * edit a user from its id
   * @param {String} id
   * @param {Object} user
   * @param {String} user.password
   * @returns {Promise<Object>}
   */
  editById: async (id, user) => {
    if (user.password) {
      user.password = await hash(user.password);
    }

    return await UserModel.findByIdAndUpdate(id, user).select('-password');
  },

  /**
   * delete a user from its id
   * @param {String} id
   */
  deleteById: id => {
    return UserModel.findByIdAndDelete(id).select('-password');
  },
};

module.exports = UserController;
