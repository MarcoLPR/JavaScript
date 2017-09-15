(function(){
    var app = angular.module("toolbox", ["ngRoute", "tubular"]);
    app.config(function($routeProvider){
        $routeProvider
        .when("/github", {
            templateUrl: "github.html",
            controller: "GithubController"
        })
        .when("/user/:username", {
            templateUrl: "user.html",
            controller: "UserController",
            controllerAs: "ctrl"
        })
        .when("/db", {
            templateUrl: "db.html",
            controller: "DBController",
            controllerAs: "ctrl"
        })
        .when("/calculator", {
            templateUrl: "calculator.html",
            controller: "CalculatorController"
        })
        .when("/location", {
            templateUrl: "location.html",
            controller: "LocationController"
        })
        .when("/repo/:username/:reponame", {
            templateUrl: "repo.html",
            controller: "RepoController",
            controllerAs: "ctrl"
        })
        /*.when("/", {
            templateUrl: "index.html",
            controller: "LoginController",
            controllerAs: "ctrl"
        })*/
        .otherwise({redirectTo:"/"});
    });
}());