const mongoose = require('mongoose');

const financeSchema = new mongoose.Schema({
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

// Create the Finance model
module.exports = { name: "Finance", endpoint: "finance", schema: financeSchema };
