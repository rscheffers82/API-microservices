const accepts = require('accepts');
const os = require('os');

var headerAPI = function(req) {
  var header = {};

  header.ipaddress = req.ip;
  header.language = accepts(req).languages()[0];
  header.software = os.type() + ' ' +
                    os.release() + ' ' +
                    os.arch();

  return header;
}

module.exports = headerAPI;

// {      -- expected output
//   "ipaddress": "73.110.16.140",
//   "language": "en-US",
//   "software": "Windows NT 10.0; WOW64; rv:53.0"
// }
