(function() {

var app = angular.module("toolbox");
var CalculatorController = $scope => {
    $scope.op = '+';
    $scope.calculate = () => {
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