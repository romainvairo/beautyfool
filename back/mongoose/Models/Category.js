const mongoose = require('mongoose');

const category = new mongoose.Schema({
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
  image: {
    type: String,
  },
  services: {
    type: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Service',
    }],
    default: [],
  },
});

const CategoryModel = mongoose.model('Category', category);

exports.category = category;
exports.CategoryModel = CategoryModel;
