const mongoose = require('mongoose');

const actuality = new mongoose.Schema({
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
  title: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 70,
    trim: true,
  },
  content: {
    type: String,
    required: true,
  }
});

// create a model based on a schema wich will allow the capability to perform requests
const ActualityModel = mongoose.model('Actuality', actuality);

exports.actuality = actuality;
exports.ActualityModel = ActualityModel;
