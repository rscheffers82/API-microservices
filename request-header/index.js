const accepts = require('accepts');
const os = require('os');

var headerAPI = function(req) {
  var header = {};

  // header.ipaddress = req.ip;
  // this will be more accurate and less poluted than the above which outputs on heroku "::ffff:10.61.238.152",
  header.ipAddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  header.language = accepts(req).languages()[0];
  header.software = os.type() + ' ' +
                    os.release().slice(0,4) + ' ' +
                    os.arch();
  return header;
}

module.exports = headerAPI;
