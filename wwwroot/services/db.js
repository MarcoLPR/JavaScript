(function () {
    var db = $http => {
        ctrl = this;
        var getAllUsers = () => {
            ctrl.get('/slave').then(response => {
                $scope.slaves = response.data;
            })
        }
        var getSelected = () => {
            ctrl.get('/slave/' + $scope.id1)
                .then(response => {
                    $scope.slave = response.data;
                    $scope.slave.id = null
                })
        }
        var addSlave = () => {
            ctrl.post('/slave', $scope.slave)
                .then(function (response, error) {
                    alert("Contact added successfully");
                })
        }
        var deleteSlave = () => {
            ctrl.delete('/slave/' + $scope.id1)
                .then(response => {
                    alert("Contact deleted successfully");
                })
        }
        var updateSlave = () => {
            ctrl.put('/slave/' + $scope.id1, $scope.slave)
                .then(response => {
                    alert("Contact modified successfully");
                })
        }
        return {
            getAllUser: getAllUser,
            getSelected: getSelected,
            addSlave: addSlave,
            deleteSlave: deleteSlave,
            updateSlave: updateSlave
        };
    };
    var module = angular.module("toolbox");
    module.factory("db", db);
}());