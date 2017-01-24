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
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
})
app.get('/:timestamp', function(req, res){
  const input = req.params.timestamp;

  // determine if input is a unix timestamp
  if ( !isNaN(input) ) serveTime(input, 'unix', res);
  else if ( isValidHumanDate(input) ) serveTime(input, 'human', res);
  else res.send(noDate);



})

const PORT = process.env.PORT || 8080;

app.listen(PORT);
console.log('Example app listening on port ', PORT);
