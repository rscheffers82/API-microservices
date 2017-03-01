const User = require ('../model/user');
const Exercise = require ('../model/exercise');

exports.newUser = function(req, res) {

  console.log('body: ', req.body);
  const username = req.body.username
  
  res.json({data: req.body.username});
  // check if the userId is already in the system

  // if not create a user and pass json back to the screen
  // if ( !validURL(longURL) ) {
  //   res.status(422).json({ error: 'please provide a valid url' });
  //   return;
  // }
};

exports.retrieveURL = function(req, res) {
  // const url = /* req.protocol + '://' + */ req.hostname + req.url;
  // const shortcode = req.params.shortcode;
  //
  // Links.findOne({ shortcode: shortcode })
  //   .then( (link) => {
  //     if (link) {
  //       // http://localhost:8080/short/e0Mi
  //       link.visits++;
  //       link.save();
  //       res.redirect(link.url);
  //       // res.json({ url: link.url });
  //     } else {
  //       res.status(422).json({ error: `No URL found for: ${url}` });
  //     }
  //   })
  //   .catch( (error) => {
  //     res.status(422).json({ error: error });
  //   });
};
