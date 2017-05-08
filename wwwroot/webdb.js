$(document).ready(function() {
  $('.button').click(function () {
  var $slaveID = $('.input1').val();
  var slave = "/slave/";
  $.getJSON( slave + $slaveID, function(data) {
    $('.name').val(data[0].name);
    $('.number').val(data[0].number);
    $('.city').val(data[0].city);
    $('.email').val(data[0].email);
  })
  })
});