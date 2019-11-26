const mongoose = require('mongoose');

const question = new mongoose.Schema({
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
  question: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 1000,
  },
  answer: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 1000,
  },
});

const QuestionModel = mongoose.model('Question', question);

exports.question = question;
exports.QuestionModel = QuestionModel;
