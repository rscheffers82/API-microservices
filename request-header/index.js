const accepts = require('accepts');
// const os = require('os');

var headerAPI = function(req) {
  var header = {};
  const ua = req.get('User-Agent');

  // header.ipaddress = req.ip;
  // The below will be more accurate and less poluted than the above which outputs on heroku "::ffff:10.61.238.152",
  header.ipAddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  header.language = accepts(req).languages()[0];
  // The below gets the OS info of the server
  // header.software = os.type() + ' ' +
  //                   os.release().slice(0,4) + ' ' +
  //                   os.arch();
  header.software = ua.match( /\((.*?)\)/ )[1];
  return header;
}

module.exports = headerAPI;
