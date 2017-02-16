var multer  = require('multer');
var upload = multer({ dest: 'uploads/' });

function filedata(req, res) {
  if (req.file){
    res.json({
      filename: req.file.originalname,
      size: req.file.size
    });
  } else {
    res.status(422).json({ error: 'could not read file' });
  }
};

module.exports = filedata;
