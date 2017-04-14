$(document).ready(function() {
  $('.input1').keypress(function (e) {
  if (e.which == 13) {
  $('.input1').val();
  var $ip = $('.input1');
  var ipAPI = "/location/";
  var $consulted = $('#consultedIP');
  $.getJSON( ipAPI + $ip, function(data) {
    $consulted.val(data);
    return false;
  })
}}
)}
);
