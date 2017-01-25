var moment = require('moment');

var checkForDate = function(rawInput) {
  //   Know issues:
  //     - st, nd, th addition for days will render null for a human date

  const unixDate = Date.parse(rawInput);         // try to convert a human date to a unix timestamp
  const humanDateFormat = 'MMM D YYYY';
  var output = {};

  if ( !isNaN(rawInput) ) {
    // a valid unix timestamp was provided
    const humanDate = moment.unix(rawInput).format(humanDateFormat);

    output.unix = rawInput;
    output.human = humanDate;
  }
  else if ( !isNaN(unixDate) ) {
    // rawInput contains a valid human date and was successfully converted to a unix timestamp
    output.unix = unixDate / 1000;              // /1000 to convert from ms to sec
    output.human = rawInput;
  }
  else {
    output.unix = null;
    output.human = null;
  }

  return output;
};

module.exports = checkForDate;
