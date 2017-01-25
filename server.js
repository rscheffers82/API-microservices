var express = require('express');
var checkForDate = require('./timestampMS');

var app = express();

//-----------------------
//    Routes
//-----------------------
app.use( express.static('public') );

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
})
app.get('/:timestamp', function(req, res){
  const rawInput = req.params.timestamp;         // catch the unput off of the url, either text or unix timestamp
  res.send( checkForDate(rawInput) );
});

const PORT = process.env.PORT || 8080;

app.listen(PORT);
console.log('Timestamp Microservice listening on port ', PORT);


//-----------------------
//    Resources
//-----------------------
// http://momentjs.com/docs/#/parsing/string-format/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse#Using_Date.parse()
