const mongoose = require('mongoose');

const image = new mongoose.Schema({
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
    trim: true,
    minlength: 3,
    maxlength: 70,
    required: true,
  },
  link: {
    type: String,
  },
  thumbnail: {
    type: String,
  },
});

const ImageModel = mongoose.model('Image', image);

exports.image= image;
exports.ImageModel = ImageModel;
