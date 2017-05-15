$(document).ready(function() {
  $('#calculate').click(function () {
  var $operation = $('#operation option:selected').val();
  var $firstValue = $('.value1').val();
  var $secondValue = $('.value2').val();
  var $result = $('#total');
  $.getJSON($operation + '/' + $firstValue + '/' + $secondValue, function(data) {
    var result = data[0];
    $result.text(result);
  })
  })
});