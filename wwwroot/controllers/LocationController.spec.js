describe('LocationController', function() {

    beforeEach(module('toolbox'));

    it('should show location of the IP', inject(function($controller,$http) {
      scope = {};
      var ctrl = $controller('LocationController', {$scope: scope});
      scope.ip = '8.8.8.8';
      $http.get("/location/" + scope.ip)
      .then(function(response){
          expect(response.data).toBe("wolf");
      });
    }));
  
  });