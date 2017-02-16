var multer  = require('multer');
var upload = multer({ dest: 'uploads/' });

function filedata(req, res) {
  // console.log(req.body);
  console.log(req.file);
  res.send('got it');
};

module.exports = filedata;
