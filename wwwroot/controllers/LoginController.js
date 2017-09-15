(function () {

    var app = angular.module("toolbox");
    var LoginController = function ($scope, $http) {
        const ctrl = this;
        ctrl.register = function () {
            $http.post('/register', ctrl.user, ctrl.password)
                .then(function (response, error) {
                    alert("User created successfully");
                })
        }
        ctrl.login = function () {
            $http.get('/login')
                .then(function (response) {
                    ctrl.user = response.data;
                    console.log(ctrl.user);
                })
        }
    };
    app.controller("LoginController", LoginController);
}());