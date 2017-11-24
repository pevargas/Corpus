'use strict';

/**
 * @ngdoc directive
 * @name northAmericanNinjaApp.directive:backgroundSrc
 * @description
 * # backgroundSrc
 */
angular.module('northAmericanNinjaApp')
  .directive('backgroundSrc', function () {
    return function (scope, element, attrs) {
        element.css({
          'background-image': 'url(\'' + attrs.backgroundSrc + '\')'
        });
      };
  });
