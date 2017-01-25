const express = require('express');
const path = require('path');

const checkForDate = require('./timestamp-ms/API');

//-----------------------
//    Express settings
//-----------------------
const PORT = process.env.PORT || 8080;

var app = express();
app.listen(PORT);
console.log('API projects app: Service listening on port ', PORT);


//-----------------------
//    Routes
//-----------------------

// -- main -- \\
app.use( express.static( path.join(__dirname + '/public') ) );
app.get('/', function(req, res){
  res.sendFile( path.join(__dirname + '/index.html') );
})

// -- timestamp API -- \\
app.use( '/timestamp', express.static( path.join(__dirname + '/timestamp-ms/public') ) );   // automatically serve static files in the timestamp public file, in this case index.html
app.get('/timestamp/:timestamp', function(req, res){
  const rawInput = req.params.timestamp;         // catch the input off of the url, either text or unix timestamp
  res.send( checkForDate(rawInput) );
});

// -- Request Header Parser -- \\




//-----------------------
//    Resources
//-----------------------
// http://momentjs.com/docs/#/parsing/string-format/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse#Using_Date.parse()
