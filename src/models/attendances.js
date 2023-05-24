const mongoose = require('mongoose');

const { Schema } = mongoose;
const AttendanceSchema = new Schema({
  nim: {
    type: String,
    required: true,
  },
  classCode: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Attendance', AttendanceSchema);
