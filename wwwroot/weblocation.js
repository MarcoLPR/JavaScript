$(document).ready(function() {
  $('#check').click(function () {
  var ip = $('.input1').val();
  var consulted = $('#ip');
  $.getJSON("/location/" + ip, function(data) {
    var myString = JSON.stringify(data);
    consulted.text(myString);
  })
  })
});
