const User = require ('../model/user');
const Exercise = require ('../model/exercise');

exports.newUser = function(req, res) {
  const name = req.body.username;

  User.findOne({ name: name })
    .then( (user) => {
      if (user) return new Promise( (resolve,reject) => reject('User already exists') );
      else return new User({ name }).save();
    })
    .then( (newUser) => {
      if(!newUser.isNew) res.json({ userId: newUser.userId, name: newUser.name });
    })
    .catch( (error) => res.status(422).json({ error }) );
};

exports.addExercise = function(req, res) {


  res.json();
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
