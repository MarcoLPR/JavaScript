(function() {

var app = angular.module("toolbox");
var CalculatorController = function($scope) {
    $scope.op = '+';
    $scope.calculate = function() {
      if($scope.op == '+') {
        return $scope.a + $scope.b;
      }else if($scope.op == '-') {
        return $scope.a - $scope.b;
      }else if($scope.op == '*') {
        return $scope.a * $scope.b;
      }else if($scope.op == '/') {
        return $scope.a / $scope.b;
      }
    };
};
app.controller("CalculatorController", CalculatorController);
}());