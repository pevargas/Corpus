/* jshint latedef:nofunc */
'use strict';

/**
 * @ngdoc function
 * @name northAmericanNinjaApp.controller:ThumbnailCtrl
 * @description
 * # ThumbnailCtrl
 * Controller of the northAmericanNinjaApp
 */
angular.module('northAmericanNinjaApp')
  .controller('ThumbnailCtrl', ThumbnailCtrl);

function ThumbnailCtrl($scope, $http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.init = function(source) {
      $http.get("/data/" + source + ".json").success(function(data){
        $scope.thumbs = data;
        $scope.source = source;
      });
    };
}
