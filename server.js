var express = require('express');
var moment = require('moment');

var app = express();

//-----------------------
//    Variables
//-----------------------
const noDate = {
  unix: null,
  human: null
};

const month = [
  'jan', 'feb', 'mar', 'apr', 'may', 'june', 'july', 'aug', 'sept', 'oct', 'nov', 'dec',
  'january','february','march','april','may','june','july','august','september','october','november','december'
];

//-----------------------
//    Functions
//-----------------------


//-----------------------
//    Routes
//-----------------------
app.use( express.static('public') );

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
})
app.get('/:timestamp', function(req, res){
//   Know issues:
//     - st, nd, th addition for days will render null for a human date
// http://momentjs.com/docs/#/parsing/string-format/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse#Using_Date.parse()

  const rawInput = req.params.timestamp;         // text or unix timestamp
  const unixDate = Date.parse(rawInput);         // try to convert a human date to a unix timestamp
  const format = 'MMM D YYYY';
  var output = {};

  if ( !isNaN(rawInput) ) {
    // a valid unix timestamp was provided
    const humanDate = moment.unix(rawInput).format(format);

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
  res.send(output);
});


const PORT = process.env.PORT || 8080;

app.listen(PORT);
console.log('Example app listening on port ', PORT);
