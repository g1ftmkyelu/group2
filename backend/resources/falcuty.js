const mongoose = require('mongoose');

const falcutySchema = new mongoose.Schema({
  question1: {
    type:[String],
    required: true,
    trim: true
  },
  question2: {
    type: String,
    required: true,
    trim: true
  },
  question3: {
    type: String,
    required: true,
    trim: true
  }
});

// Create the Falcuty model
module.exports = { name: "Falcuty", endpoint: "falcuty", schema: falcutySchema };
