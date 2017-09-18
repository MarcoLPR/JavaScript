(function() {

var app = angular.module("toolbox");
var GithubController = function($scope, $interval, $location) {
    var decrementCountdown = () => {
        $scope.countdown -= 1;
        if($scope.countdown < 1){
            $scope.search($scope.username);
        };
    };
    var countdownInterval = null;
    var startCountdown = () => {
        countdownInterval = $interval(decrementCountdown, 1000, $scope.countdown);
    };
    $scope.search = username => {
        if(countdownInterval) {
            $interval.cancel(countdownInterval);
            $scope.countdown = null;
        }
        $location.path("/user/" + username);
    };
    $scope.username = "MarcoLPR"
    $scope.countdown = 5;
    startCountdown();
};

app.controller("GithubController", GithubController);
}());