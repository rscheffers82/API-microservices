const config = require ('../../config');
const Links = require ('../model/links');

function invalidURL(url) {
  return false;
}

exports.shortenURL = function(req, res) {
  // const mongoUrl = process.env.MONGOLAB_URI;
  const mongoUrl = config.MONGOLAB_URI;

  const longURL = req.params.url;

  // check for a valid url
  if ( invalidURL(longURL) ) {
    res.json({ error: 'please provide a valid url' });
    return;
  }

  const link = new Links({
    url: 'longURL',
    visits: 0
  });

  link.save()
    .then( () => {
      res.send('saved');
    })
    .catch( (error) => {
      res.send(`Oeps something went wrong... ${error}`);
    })
}

exports.retrieveURL = function(shortURL) {
  return 'retrieve...';
};
