'use strict';

describe('Controller: ThumbnailCtrl', function () {

  // load the controller's module
  beforeEach(module('northAmericanNinjaApp'));

  var ThumbnailCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ThumbnailCtrl = $controller('ThumbnailCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ThumbnailCtrl.awesomeThings.length).toBe(3);
  });
});
