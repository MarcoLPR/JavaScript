//Listen when a button, with a class of "myButton", is clicked
//You can use any jQuery/JavaScript event that you'd like to trigger the call
$('.myButton').click(function() {
  $.ajax({
    'url' : '/location/:IP',
    'type' : 'GET', 
    'data' : { 'paramater1' : 'IP',
    },
    'success' : function(data) {
      if (data == "success") {
        app.get('/location/:IP', function(req, res) {
  var options = {
  host: 'ip-api.com',
  path: '/json/'
  }
    var ip = req.param('IP');
    options.path = options.path + ip;
    callback = function(response) {
     var str = '';
     response.on('data', function (chunk) {
       str += chunk;
     });
     response.on('end', function () {
       res.send(str);
     });
   }

   http.request(options, callback).end();
});
      }
    }
  });
});