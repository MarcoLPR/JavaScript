(function() {

var app = angular.module("githubViewer" []);

var MainController = function($scope, $http) {

    var onUserComplete = function(response) {
        $scope.user = response.data;
    };

    $http.get("https://api.github.com/users/marcolpr")
        .then(onUserComplete);

        $scope.message = "potato";
};
    
app.controller("MainController", MainController);
}());