const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// the model we'll work with
const linkSchema = new Schema({
  shortcode: {
    type: String,
    unique: true,
    lowercase: true
  },
  url: String,
  visits: Number
});

// Create the model class
const ModelClass = mongoose.model('links', linkSchema);

// Export the model
module.exports = ModelClass;
