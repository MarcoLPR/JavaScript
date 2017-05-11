
$(document).ready(function() {
  $('.button1').click(function () {
  var $slaveID = $('.input1').val();
  var slave = "/slave/";
  $.getJSON( slave + $slaveID, function(data) {
    if (!data[0]) {
      alert("Slave no. " + $slaveID + " not found.");
    } else{
    $('.name').val(data[0].name);
    $('.number').val(data[0].number);
    $('.city').val(data[0].city);
    $('.email').val(data[0].email);
  }
})});
 $('.button2').click(function () {
   var name = $('.name').val();
   var number = $('.number').val();
   var city = $('.city').val();
   var email = $('.email').val();
   var entry = {
     "name": name,
     "number": number,
     "city": city,
     "email": email
   }
   var entry = JSON.stringify(entry);
   $.post({
  url: "/slave",
  data: entry,
  contentType: 'application/json',
  success: function(response,status) {
    alert("Received")
}});
});
$('.button3').click(function () {
  var row = $('.input1').val();
  var name = $('.name').val();
  var number = $('.number').val();
  var city = $('.city').val();
  var email = $('.email').val();
  var change = {
    "name": name,
     "number": number,
     "city": city,
     "email": email
   }
  $.ajax({
  url: "/slave" + row,
  type: 'put',
  data: change,
  contentType: 'application/json',
  success: function(response,status) {
    alert("Received")
}})})
});
$('.button4').click(function () {
  var row = $('.input1').val();
  $.ajax({
  url: "/slave/" + row,
  type: 'DELETE',
  success: function(response,status) {
  alert("Received")
  }})});