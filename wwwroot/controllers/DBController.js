(function() {
    
    var app = angular.module("toolbox");
    
    var DBController = function($scope, db) {
        ctrl = this;
        ctrl.getAllUsers() = db.getAllUsers;
        ctrl.getSelected() = db.getSelected;
        ctrl.addSlave() = db.addSlave;
        ctrl.deleteSlave() = db.deleteSlave;
        ctrl.updateSlave() = db.updateSlave;
    };
    
    app.controller("DBController", DBController);
    }());