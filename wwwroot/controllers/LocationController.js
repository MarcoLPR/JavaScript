(function () {

    var app = angular.module("githubViewer");
    var LocationController = function ($scope, $http) {
        $scope.location = function(){
             $http.get("/location/" + $scope.ip)
             .then(function(response){
                 $scope.locate = response.data;
             });
        }
    };
app.controller("LocationController", LocationController);
}());