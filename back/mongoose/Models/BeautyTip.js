const mongoose = require('mongoose');

const beautyTip = new mongoose.Schema({
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
  media: {
    type: String,
  },
  mediaType: {
    type: String,
  },
  content: {
    type: String,
    required: true,
    maxlength: 10000,
  }
});

const BeautyTipModel = mongoose.model('BeautyTip', beautyTip);

exports.beautyTip = beautyTip;
exports.BeautyTipModel = BeautyTipModel;
