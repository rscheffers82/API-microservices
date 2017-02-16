var multer  = require('multer');
var upload = multer({ dest: 'uploads/' });

function filedata(req, res) {
  res.send('got it');
};

module.exports = filedata;
