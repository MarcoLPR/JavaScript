(function() {

var app = angular.module("toolbox");

var UserController = function($scope, github, $routeParams) {

    var onUserComplete = data => {
        $scope.user = data;
        github.getRepos($scope.user).then(onRepos, onError);
    };
    var onRepos = data => {
        $scope.repos = data;
    };
    var onError = reason => {
        $scope.error = "Could not fetch the data."
    };
    $scope.username = $routeParams.username;
    $scope.repoSortOrder = "-stargazers_count";
    github.getUser($scope.username).then(onUserComplete, onError);
};

app.controller("UserController", UserController);
}());