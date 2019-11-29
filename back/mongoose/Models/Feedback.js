const mongoose = require('mongoose');

const feedback = new mongoose.Schema({
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
  rate: {
    type: Number,
    min: 0,
    max: 5,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  service: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Service',
  },
  comments: {
    type: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Comment',
    }],
    default: []
  },
  appointment: {
    type: {
      metadata: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Metadata'
      },
      server: {
        type: mongoose.Schema.Types.Mixed,
        validator: [
          value =>
        ]
      }
    }
  }
});

const FeedbackModel = mongoose.model('Feedback', feedback);

exports.feedback = feedback;
exports.FeedbackModel = FeedbackModel;
