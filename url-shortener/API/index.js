const Links = require ('../model/links');

function validURL(url) {
  return true;
}

exports.shortenURL = function(req, res) {
  const appURL = 'http://localhost:8080'
  const longURL = req.params.url;

  // check for a valid url
  if ( !validURL(longURL) ) {
    res.status(422).json({ error: 'please provide a valid url' });
    return;
  }

  const link = new Links({
    url: longURL,
    visits: 0
  });

  link.save()
    .then( () => {
      res.json({
        status: 'saved',
        url: longURL,
        shorturl: `${appURL}/short/${link.shortcode}`
      });
    })
    .catch( (error) => {
      res.status(422).json({ error: error });
    })
}

exports.retrieveURL = function(req, res) {
  const url = /* req.protocol + '://' + */ req.hostname + req.url;
  const shortcode = req.params.shortcode;

  Links.findOne({ shortcode: shortcode })
    .then( (link) => {
      if (link) {
        // http://localhost:8080/short/e0Mi
        res.redirect(link.url);
        // res.json({ url: link.url });
      } else {
      res.status(422).json({ error: `No URL found for: ${url}` })
      }
    })
    .catch( (error) => {
      res.status(422).json({ error: error });
    });
};
