const mongoose = require('mongoose');

const administrationSchema = new mongoose.Schema({
  question1: {
    type:[String],
    required: true,
    trim: true
  },
  question2: {
    type: String,
    required: true,
    trim: true
  }
});

// Create the Administration model
module.exports = { name: "Administration", endpoint: "administration", schema: administrationSchema };
