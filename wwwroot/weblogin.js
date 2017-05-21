$(document).ready(function(){
	$('.toggle-modal').click(function(){
		$('#myModal').modal('toggle');
	}); 
	$('#register-form').click(function () {
   var username = $('#username').val();
   var password = $('#password').val();
   var entry = {
     "username": username,
     "password": password,
   }
   var entry = JSON.stringify(entry);
   $.post({
  url: "/register",
  data: entry,
  contentType: 'application/json',
  success: function(response,status) {
    alert("User registered")
}});
});
	$('#login-form').click(function () {
   var username = $('#username').val();
   var password = $('#password').val();
   var i = 0;
    $.getJSON("/login", function getData(data) {
		if(data[i] === undefined) {
			alert("Username or password are incorrect");
		} else if (username != data[i].username || password != data[i].password) {
			i++;
			getData(data);
		} else {
			alert("Login " + username + " succesful");
			$('.toggle-modal').click();
		}
});
});
});