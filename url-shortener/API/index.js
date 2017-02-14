const config = require ('../../config');
const Links = require ('../model/links');

var shorten = function(longUrl) {
  // var mongoUrl = process.env.MONGOLAB_URI;
  var mongoUrl = config.MONGOLAB_URI;

  // Shorten URL

  // DB structure: Primary key | shortcode | longURL
  // shortcode: 0 to 9 and a to z

  // Store in the DB
  // Use the below for a unique identifier
  // https://www.npmjs.com/package/mongoose-shortid

  // return json



  return mongoUrl;
}

module.exports = shorten;
