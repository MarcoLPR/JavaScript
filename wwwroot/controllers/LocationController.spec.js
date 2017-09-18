describe('LocationController', () => {

    beforeEach(module('toolbox'));

    it('should show location of the IP', done => {
      inject(($controller,$http) => {
      scope = {};
      var ctrl = $controller('LocationController', {$scope: scope});
      scope.ip = '8.8.8.8';
      $http.get("/location/" + scope.ip)
      .then(response => {
          expect(response.data).toBe("wolf"); //Check this shit
          done();
      });
    });
  });
  
  });