'use strict';

describe('Controller: DesignCtrl', function () {

  // load the controller's module
  beforeEach(module('northAmericanNinjaApp'));

  var DesignCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DesignCtrl = $controller('DesignCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DesignCtrl.awesomeThings.length).toBe(3);
  });
});
