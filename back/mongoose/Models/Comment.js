const mongoose = require('mongoose');

const comment = new mongoose.Schema({
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
  text: {
    type: String,
    required: true,
    maxlength: 5000,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  feedbacks: {
    type: [{
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Feedback',
    }],
    default: []
  }
});

const CommentModel = mongoose.model('Comment', comment);

exports.comment = comment;
exports.CommentModel = CommentModel;
