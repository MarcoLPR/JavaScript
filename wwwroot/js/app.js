(function(){
    var app = angular.module("githubViewer", ["ngRoute"]);
    app.config(function($routeProvider){
        $routeProvider
        .when("/github", {
            templateUrl: "github.html",
            controller: "GithubController"
        })
        .when("/user/:username", {
            templateUrl: "user.html",
            controller: "UserController"
        })
        .when("/db", {
            templateUrl: "db.html",
            controller: "DBController"
        })
        .when("/calculator", {
            templateUrl: "calculator.html",
            controller: "CalculatorController"
        })
        .when("/location", {
            templateUrl: "location.html",
            controller: "LocationController"
        })
        .otherwise({redirectTo:"/"});
    });
}());