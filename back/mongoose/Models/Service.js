const mongoose = require('mongoose');

const service = new mongoose.Schema({
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
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50,
    trim: true,
  },
  description: {
    type: String,
    maxlength: 2000,
  },
  duration: {
    type: Date,
    required: true,
  },
  price: {
    type: Number,
    default: 0,
    min: 0,
  },
  image: {
    type: String,
  },
  feedbacks: {
    type: [{
      ref: 'Feedback',
      type: mongoose.Schema.Types.ObjectId,
    }],
    default: [],
  },
  users: {
    type: [{
      ref: 'User',
      type: mongoose.Schema.Types.ObjectId,
    }],
    default: [],
  },
  appointments: {
    type:  [{
      ref: 'Appointment',
      type: mongoose.Schema.Types.ObjectId,
    }],
    default: [],
  }
});

const ServiceModel = mongoose.model('Service', service);

exports.service = service;
exports.ServiceModel = ServiceModel;
