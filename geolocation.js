var http = require('http');
var options = {
host: 'ip-api.com',
path: '/json/?fields=country,countrycode,region,regionName,city,zip,lat,lon,timezone'
};
module.exports = function (locate) {

 callback = function(response) {
  var str = '';
    str += chunk;
  });
  response.on('end', function () {
    console.log(str);
  });

http.request(options, callback).end();
}
};
