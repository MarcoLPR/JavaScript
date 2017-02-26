module.exports = function (meow) {
  var backward = "";
  for (var i = meow.length-1; i > -1; i--) {
    backward += (meow[i]);
}
return backward;
}
