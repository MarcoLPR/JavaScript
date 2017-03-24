var http = require('http');
var options = {
host: 'ip-api.com',
path: '/json/?fields=country,countrycode,region,regionName,city,zip,lat,lon,timezone'
};
module.exports = function (locate) {

 callback = function(response) {
  var str = '';

  //another chunk of data has been recieved, so append it to `str`
  response.on('data', function (chunk) {
    str += chunk;
  });

  //the whole response has been recieved, so we just print it out here
  response.on('end', function () {
    console.log(str);
  });

http.request(options, callback).end();
}
};
