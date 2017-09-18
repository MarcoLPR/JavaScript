(function() {
    
    var app = angular.module("toolbox");
    
    var DBController = function($scope, db) {
        db.getAllUsers();
    };
    
    app.controller("UserController", UserController);
    }());