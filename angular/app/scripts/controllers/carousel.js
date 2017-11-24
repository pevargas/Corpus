/* jshint latedef:nofunc */

'use strict';

/**
 * @ngdoc function
 * @name northAmericanNinjaApp.controller:CarouselCtrl
 * @description
 * # CarouselCtrl
 * Controller of the northAmericanNinjaApp
 */
angular.module('northAmericanNinjaApp')
  .controller('CarouselCtrl', CarouselCtrl);

function CarouselCtrl($http, $scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    // $scope.myInterval = 5000;
    // $scope.noWrapSlides = false;

    $http.get("/data/splash-page.json").success(function(data){
      if (data instanceof Array) {
        $scope.slides = data;
      }
    });
}
