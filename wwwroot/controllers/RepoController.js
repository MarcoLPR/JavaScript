(function() {

var app = angular.module("githubViewer");

var RepoController = function($scope, github, $routeParams) {
    var onRepo = function(data){
        $scope.repo = data;
    };
    var onError = function(reason){
        $scope.error = reason;
    };

    var username = $routeParams.username;
    var reponame = $routeParams.reponame;
    github.getRepoDetails(username, reponame)
    .then(onRepo, onError);
};

app.controller("RepoController", RepoController);
}());