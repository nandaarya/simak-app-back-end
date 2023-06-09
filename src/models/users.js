const mongoose = require('mongoose');

const { Schema } = mongoose;
const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    required: true,
  },
  nim_nip: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('User', UserSchema);
