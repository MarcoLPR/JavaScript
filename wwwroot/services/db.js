(function () {
    var db = function ($http) {
        var getAllUsers = () => {
            return $http.get('/slave').then(response => {
                return response.data
            });
        };

        var getSelected = (idSlave) => {
            return $http.get('/slave/' + idSlave).then(response => {
                return response.data
            })
        }
        var addSlave = (slave) => {
            return $http.post('/slave/save/', slave)
                .then(function (response, error) {
                    alert("Contact added successfully");
                })
        }
        var deleteSlave = (idSlave) => {
            return $http.delete('/slave/' + idSlave)
                .then(response => {
                    alert("Contact deleted successfully");
                })
        }
        var updateSlave = (idSlave, slave) => {
            return $http.put('/slave/' + idSlave, slave)
                .then(response => {
                    alert("Contact modified successfully");
                })
        }
        return {
            getAllUsers: getAllUsers,
            getSelected: getSelected,
            addSlave: addSlave,
            deleteSlave: deleteSlave,
            updateSlave: updateSlave
        };
    };
    var module = angular.module("toolbox");
    module.factory("db", db);
}());