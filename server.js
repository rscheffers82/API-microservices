const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

var multer  = require('multer');
var upload = multer({ dest: 'file-metadata/uploads' });

const checkForDate = require('./timestamp-ms/API');
const headerAPI = require('./request-header');
const { shortenURL, retrieveURL } = require('./url-shortener/API')
const filedata = require('./file-metadata/API');

const MONGOLAB_URI = process.env.MONGOLAB_URI;

//-----------------------
//    MongoDB connection
//-----------------------
// mongoose.connect(MONGOLAB_URI);
// mongoose.connection
//   .once('open', () => console.log('MongoDB: We are connected') )
//   .on('error', (error) => {
//     console.warn('Warning: ', error);
//   });


//-----------------------
//    Express settings
//-----------------------
const PORT = process.env.PORT || 8080;

var app = express();
app.listen(PORT);
console.log('API projects app: Service listening on port:', PORT);


//-----------------------
//    Routes
//-----------------------

// -- main -- \\
app.use( express.static( path.join(__dirname + '/public') ) );
app.get('/', function(req, res){
  res.sendFile( path.join(__dirname + '/index.html') );
})

// -- Timestamp API -- \\
app.use( '/timestamp', express.static( path.join(__dirname + '/timestamp-ms/public') ) );   // automatically serve static files in the timestamp public folder, in this case index.html
app.get('/timestamp/:timestamp', function(req, res){
  const rawInput = req.params.timestamp;         // catch the input off of the url, either text or unix timestamp
  res.json( checkForDate(rawInput) );
});

// -- Request Header Parser API -- \\
app.get('/whoami', function(req, res){
  res.json( headerAPI(req) );
});

// -- URL Shortener API -- \\
app.use( '/shorten', express.static( path.join(__dirname + '/url-shortener/public') ) );   // automatically serve static files in the timestamp public folder, in this case index.html
app.get('/shorten/:url(*)', (req, res) => shortenURL(req, res) );             // Shortener entry point
app.get('/short/:shortcode', (req, res) => retrieveURL(req, res) );           // Redirect entry point

// -- File Metadata Microservice -- \\
app.use( '/filedata', express.static( path.join(__dirname + '/file-metadata/public') ) );   // automatically serve static files in the timestamp public folder, in this case index.html
app.post( '/analyse-file', upload.single('file1'), (req, res) => filedata(req, res) );

// -- Exercise Tracker API -- \\
app.use( '/exercise', express.static( path.join(__dirname + '/exercise-tracker/public') ) );   // automatically serve static files in the timestamp public folder, in this case index.html

// GET /api/exercise/log?{userId}[&from][&to][&limit]
// { } = required, [ ] = optional
// from, to = dates (yyyy-mm-dd); limit = number
app.get( '/exercise/log', (req, res) => {} );
app.post( '/exercise/new-user', (req, res) => {} );
app.post( '/exercise/add', (req, res) => {} );


//-----------------------
//    Resources
//-----------------------
// *** Timestamp API
// http://momentjs.com/docs/#/parsing/string-format/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse#Using_Date.parse()

// *** Header request API
// http://expressjs.com/en/4x/api.html
// Using accepts - stackoverflow.com/questions/11845471/how-can-i-get-browser-the-language-in-node-js-express-js#11845585
// Accessing the User-Agent info
// http://stackoverflow.com/questions/22285921/how-to-handle-user-agent-in-nodejs-environment
// https://www.npmjs.com/package/useragent

// *** URL Shortener API
// Known bugs
// - MongoDB connection timeout (30 sec wait time)

//
// https://www.npmjs.com/package/multer
