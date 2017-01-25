var moment = require('moment');

var checkForDate = function(rawInputOrigin) {

  rawInput = rawInputOrigin;
  rawInput = rawInput.replace(/(st|nd|rd|th)/g,'');   // remove st, nd, rd, th from the day if provided
  const unixDate = Date.parse(rawInput);              // try to convert a natural date to a unix timestamp
  const naturalDateFormat = 'MMM D YYYY';
  var output = {};

  if ( !isNaN(rawInput) ) {
    // a valid unix timestamp was provided
    const naturalDate = moment.unix(rawInput).format(naturalDateFormat);

    output.unix = rawInput;
    output.natural = naturalDate;
  }
  else if ( !isNaN(unixDate) ) {
    // rawInput contains a valid natural date and was successfully converted to a unix timestamp
    output.unix = unixDate / 1000;              // /1000 to convert from ms to sec
    output.natural = rawInputOrigin;              // return the original input provided
  }
  else {
    output.unix = null;
    output.natural = null;
  }

  return output;
};

module.exports = checkForDate;
