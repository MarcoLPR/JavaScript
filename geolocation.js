var http = require('http');
var options = {
host: 'ip-api.com',
path: '/json/'
};
module.exports = {
 locate: function(ip) {
     options.path = options.path + ip;
   callback = function(response) {
    var str = '';
    response.on('data', function (chunk) {
      str += chunk;
    });
    response.on('end', function () {
      console.log(str);
    });
  }

  http.request(options, callback).end();
}};
