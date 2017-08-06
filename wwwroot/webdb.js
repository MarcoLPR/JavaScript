$(document).ready(function() {
  //GET
  $('#GET').click(function () {
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
//POST
 $('#POST').click(function () {
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
//PUT
$('#PUT').click(function () {
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
  var change = JSON.stringify(change);
  $.ajax({
  url: "/slave/" + row,
  type: 'PUT',
  data: change,
  contentType: 'application/json',
  success: function(response,status) {
    alert("Received")
}})})
//DELETE
$('#DELETE').click(function () {
  var row = $('.input1').val();
  $.ajax({
  url: "/slave/" + row,
  type: 'DELETE',
  success: function(response,status) {
  alert("Received")
}})});
//TABLE
$('#refresh').click(function() {
    var tableBody = $('#tableSlave tbody');
    tableBody.empty();
    $.getJSON("/slave", function(data) {
      for(var item in data) {
        var name = data[item].name;
        var number = data[item].number;
        var email = data[item].email;
        var city= data[item].city;
        tableBody.append("<tr><td><input type='text' id='name"+ data[item].rowid + "' value='" + name + "'/></td><td><input type='text' id='number"+ data[item].rowid + "' value='" + number + "'/></td><td><input type='text' id='email"+ data[item].rowid + "' value='" + email + "'/></td><td><input type='text' id='city"+ data[item].rowid + "' value='" + city + "'/></td><td><input type='button' id='editRow' value='Edit' onclick='editRow("+ data[item].rowid +")'/></td><td><input type='button' id='deleteRow' value='Delete' onclick='deleteRow("+ data[item].rowid +")'/></td></tr>");
      }
    })});
    $('#refresh').click();
  });

//Global
//PUT ROW
function editRow(rowid) {
  var name = $('#name' + rowid + '').val();;
  var number = $('#number' + rowid + '').val();
  var city = $('#city' + rowid + '').val();
  var email = $('#email' + rowid + '').val();
  var change = {
    "name": name,
     "number": number,
     "city": city,
     "email": email,
  };
  change = JSON.stringify(change);
  $.ajax({
    url: "/slave/" + rowid,
    type: 'PUT',
    data: change,
    contentType: 'application/json',
    success: function(response,status) {
       $('#refresh').click();
}});
};
//DELETE ROW 
function deleteRow(rowid) {
  $.ajax({
  url: "/slave/" + rowid,
  type: 'DELETE',
  success: function(response,status) {
  $('#refresh').click();
  }})};