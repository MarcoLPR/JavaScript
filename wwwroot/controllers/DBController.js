(function() {

var app = angular.module("githubViewer");
var DBController = function($scope, $http) {
    const ctrl = this;
    $http.get('/slave')
        .then(function(response){
            ctrl.slaves = response.data;
        });
    ctrl.getSelected = function() {
        $http.get('/slave/' + ctrl.id1)
        .then(function(response){
            ctrl.slave = response.data;
            ctrl.slave.id = null
            ctrl.get();
        })}
    ctrl.post = function() {
        $http.post('/slave', ctrl.slave)
        .then(function(response, error){
            alert("Contact added successfully");
            ctrl.get();
        })}
    ctrl.delete = function() {
        $http.delete('/slave/' + ctrl.id1)
        .then(function(response){
            alert("Contact deleted successfully");
            ctrl.get();
        })}
    ctrl.put = function() {
        $http.put('/slave/' + ctrl.id1, ctrl.slave)
        .then(function(response){
            alert("Contact modified successfully");
            ctrl.get();
        })}
    ctrl.get = function() {
        $http.get('/slave')
        .then(function(response){
            ctrl.slaves = response.data;
        })
    }
};
app.controller("DBController", DBController);
}());