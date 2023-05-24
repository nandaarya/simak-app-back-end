const mongoose = require('mongoose');

const { Schema } = mongoose;

const ClassSchema = new Schema({
  classCode: {
    type: String,
    required: true,
  },
  className: {
    type: String,
    required: true,
  },
  lecturer: {
    type: String,
    required: true,
  },
  material: {
    type: String,
    required: true,
  },
  startedAt: {
    type: String,
    required: true,
  },
  finishAt: {
    type: String,
    required: true,
  },
  room: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Class', ClassSchema);
