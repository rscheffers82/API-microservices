const ShortId = require('mongoose-shortid-nodeps');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// the model to work with
const linkSchema = new Schema({
  shortcode: {
    type: ShortId,
    unique: true,
    len: 4,
    base: 36,
    alphabet: undefined,
    retries: 4
  },
  url: String,
  // visits: Number           // maybe implement as an extra feature of how often the link was visited
});

// Create the model class
const Links = mongoose.model('links', linkSchema);

// Export the model
module.exports = Links;
