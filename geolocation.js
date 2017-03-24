var http = require('http');
var options = {
host: 'ip-api.com',
path: '/json/?fields=country,countryCode,region,regionName,city,zip,lat,lon,timezone'
};
module.exports = {
 locate: function() {
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
