function getLocation() {
var http = require('http');
var options = {
host: 'ip-api.com',
path: '/json/'
};
   var ip = document.currentIP.ip.value;
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
  document.getElementById("ip").innerHTML += ip;
};