(function(){
    var app = angular.module("githubViewer", ["ngRoute"]);
    app.config(function($routeProvider){
        $routeProvider
        .when("/github", {
            templateUrl: "github.html",
            controller: "GithubController"
        })
        .when("/user/:username", {
            templateUrl: "/user.html",
            controller: "UserController"
        })
        .otherwise({redirectTo:"/"});
    });
}());