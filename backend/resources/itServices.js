const mongoose = require('mongoose');

const itservicesSchema = new mongoose.Schema({
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

// Create the ItServices model
module.exports = { name: "ItServices", endpoint: "itservices", schema: itservicesSchema };
