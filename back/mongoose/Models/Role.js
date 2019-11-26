const mongoose = require('mongoose');

const role = new mongoose.Schema({
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
    unique: true,
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 30,
  },
  permission: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 50,
  },
  users: {
    type: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    }],
    default: []
  }
});

const RoleModel = mongoose.model('Role', role);

exports.role = role;
exports.RoleModel = RoleModel;
