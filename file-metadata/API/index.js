var multer  = require('multer');
var upload = multer({ dest: 'uploads/' });

function filedata(req, res) {
  // console.log(req.body);
  console.log(req.file);
  res.json({
    filename: req.file.originalname,
    size: req.file.size
  });
};

module.exports = filedata;
