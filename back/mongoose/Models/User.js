const mongoose = require('mongoose');

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
  adress: {
    type: String,
  },
  phone: {
    type: String,
    unique: true,
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

const UserModel = mongoose.model('User', user);

exports.user = user;
exports.UserModel = UserModel;
