const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const user = new mongoose.Schema({
  createdAt: {
    type: Date,
    required: true,
    default: () => new Date,
  },
  updatedAt: {
    type: Date,
    required: true,
    default: () => new Date,
  },
  username: {
    type: String,
    trim: true,
    minlength: 3,
    maxlength: 40,
    required: true,
    unique: true,
  },
  firstname: {
    type: String,
    trim: true,
    minlength: 3,
    maxlength: 60,
    required: true,
  },
  lastname: {
    type: String,
    trim: true,
    minlength: 3,
    maxlength: 60,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  picture: {
    type: String,
  },
  birthdate: {
    type: Date,
  },
  fidelity: {
    type: Number,
    min: 0,
    default: 0,
  },
  city: {
    type: String,
  },
  zipcode: {
    type: String,
  },
  address: {
    type: String,
  },
  phone: {
    type: String,
  },
  isEmailValid: {
    type: Boolean,
    default: false,
  },
  newsletterSubscribed: {
    type: Boolean,
    default: false,
  },
  appointments: {
    type: [{
      ref: 'Appointment',
      type: mongoose.Schema.Types.ObjectId,
    }],
    default: []
  },
  roles: {
    type: [{
      ref: 'Role',
      type: mongoose.Schema.Types.ObjectId,
    }],
    default: [],
  },
  feedbacks: {
    type: [{
      ref: 'Feedback',
      type: mongoose.Schema.Types.ObjectId,
    }],
    default: [],
  },
  comments: {
    type: [{
      ref: 'Comment',
      type: mongoose.Schema.Types.ObjectId,
    }],
    default: [],
  }
});

/**
 * 'methods' is a native function of mongoose
 * compare the encrypted password of the current user with the given password
 * @param {String} candidatePassword
 * @returns {Promise<Boolean>}
 */
user.methods.comparePassword = function (candidatePassword) {
  return new Promise((resolve, reject) => {
    // 'this' with word function (ES5) is the context of the current scope,
    // if 'this' is used in arrow function (ES6), it is the context of the upper scope
    bcrypt.compare(candidatePassword, this.password, (err, match) => {
      if (err) {
        return reject(err);
      }

      resolve(match);
    });
  });
}

const UserModel = mongoose.model('User', user);

exports.user = user;
exports.UserModel = UserModel;
