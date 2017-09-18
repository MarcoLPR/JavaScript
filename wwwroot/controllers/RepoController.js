(function() {

var app = angular.module("toolbox");

var RepoController = function($scope, github, $routeParams) {
    var onRepo = data => {
        $scope.repo = data;
    };
    var onError = reason => {
        $scope.error = reason;
    };

    var username = $routeParams.username;
    var reponame = $routeParams.reponame;
    github.getRepoDetails(username, reponame)
    .then(onRepo, onError);
};

app.controller("RepoController", RepoController);
}());