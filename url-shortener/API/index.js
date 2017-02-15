const Links = require ('../model/links');

function invalidURL(url) {
  return false;
}

exports.shortenURL = function(req, res) {
  const appURL = 'http://localhost:8080'
  const longURL = req.params.url;

  // check for a valid url
  if ( invalidURL(longURL) ) {
    res.json({ error: 'please provide a valid url' });
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
      res.json({ message, error });
    })
}

exports.retrieveURL = function(shortURL) {
  return 'retrieve...';
};
