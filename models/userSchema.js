const mongoose = require('mongoose');

const { Schema } = mongoose;

const User = new Schema({
  first_name: {
    type: String,
  },
  last_name: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  dob: {
    type: Date,
  },
  active: {
    type: Boolean,
  },
});

module.exports = mongoose.model('user', User);
