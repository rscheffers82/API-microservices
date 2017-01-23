var express = require('express');

var app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

const PORT = 8080;

app.listen(PORT, function () {
  console.log('Example app listening on port ', PORT);
})
