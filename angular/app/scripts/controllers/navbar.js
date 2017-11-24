/* jshint latedef:nofunc */
'use strict';

/**
 * @ngdoc function
 * @name northAmericanNinjaApp.controller:NavbarCtrl
 * @description
 * # NavbarCtrl
 * Controller of the northAmericanNinjaApp
 */
angular.module('northAmericanNinjaApp')
  .controller('NavbarCtrl', NavbarCtrl);

  function NavbarCtrl($scope, $location) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };
  }
