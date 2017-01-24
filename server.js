var express = require('express');

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
isValidHumanDate = function(input){
// Valid: dd-mm-yyyy or Dec | December 1st, 2016

}

serveTime = function(input, type, res) {
  res.send(input + 'hello');
}


//-----------------------
//    Routes
//-----------------------
app.use( express.static('public') );

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
})
app.get('/:timestamp', function(req, res){
  // Know issues: st, nd, th addition for days will render null for a human date

  const rawInput = req.params.timestamp;         // text or unix timestamp
  const unixDate = Date.parse(rawInput);         // try to convert a human date to a unix timestamp
  var output = {};

  if ( !isNaN(unixDate) ) {
    // rawInput contains a valid human date and was successfully converted to a unix timestamp
    output.human = rawInput ;
    output.unix = unixDate;
  }
  else if ( !isNaN(rawInput) ) {
    // a valid unix timestamp was provided
    output.unix = rawInput;
    Number(rawInput) < 86400 ? output.human = 'January 1, 1970' : output.human = new Date( Number(rawInput) );
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
