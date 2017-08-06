(function() {

var app = angular.module("githubViewer");
var DBController = function($scope, $http) {
    var getSelected = function() {
        $http({method: 'GET', url: '/slave/' + $scope.id1})
        .then(function(response){
            return response.data;
        })
}
};
app.controller("DBController", DBController);
}());