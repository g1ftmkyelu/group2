const mongoose = require('mongoose');

const registrySchema = new mongoose.Schema({
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

// Create the Registry model
module.exports = { name: "Registry", endpoint: "registry", schema: registrySchema };
