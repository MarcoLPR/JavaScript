(function() {
    
    var app = angular.module("toolbox");
    var DBController = function(db, $scope) {
        const ctrl = this;
        ctrl.getAllUsers = () => {db.getAllUsers().then(data => {ctrl.slaves = data})};
        ctrl.getSelected = () => {db.getSelected(ctrl.idSlave).then(response => {
            $scope.slave = data;
            $scope.slave.id = null
        })};
        ctrl.addSlave = () => {db.addSlave(ctrl.slave)};
        ctrl.deleteSlave = () => {db.deleteSlave(ctrl.idSlave)};
        ctrl.updateSlave = () => {db.updateSlave(ctrl.idSlave, ctrl.slave)};
    };
    
    app.controller("DBController", DBController);
    }());