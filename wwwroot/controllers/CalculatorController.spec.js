describe('CalculatorController', function() {
      
      beforeEach(module('toolbox'));
    
      it('should sum 2 values', inject(function($controller) {
        scope = {};
        var ctrl = $controller('CalculatorController', {$scope: scope});
        scope.a = 2;
        scope.b = 3;
        scope.op = '+';
        expect(scope.calculate()).toBe(5);
      }));
    
    });