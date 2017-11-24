'use strict';

describe('Controller: CodeCtrl', function () {

  // load the controller's module
  beforeEach(module('northAmericanNinjaApp'));

  var CodeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CodeCtrl = $controller('CodeCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CodeCtrl.awesomeThings.length).toBe(3);
  });
});
