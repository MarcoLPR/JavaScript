$(document).ready(function() {
  $('.button').click(function () {
  var $ip = $('.input1').val();
  var ipAPI = "/location/";
  var $consulted = $('#consultedIP');
  $.getJSON( ipAPI + $ip, function(data) {
    var myString = JSON.stringify(data);
    $consulted.text(myString);
  })
  })
});
