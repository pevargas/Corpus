'use strict';

/**
 * @ngdoc function
 * @name northAmericanNinjaApp.controller:ProjectCtrl
 * @description
 * # ProjectCtrl
 * Controller of the northAmericanNinjaApp
 */
angular.module('northAmericanNinjaApp')
  .controller('ProjectCtrl', function ($scope, $http, $routeParams) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    var category    = $routeParams.category;
    var item        = $routeParams.item;
    $scope.category = category;
    $scope.item     = item;

    $http.get("/data/" + category + "/" + item + ".json").success(function(data){
      $scope.data = data;
    });
  });
