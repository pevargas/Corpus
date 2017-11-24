/* jshint latedef:nofunc */
'use strict';

/**
 * @ngdoc function
 * @name northAmericanNinjaApp.controller:ModalinstanceCtrl
 * @description
 * # ModalinstanceCtrl
 * Controller of the northAmericanNinjaApp
 */
angular.module('northAmericanNinjaApp')
  .controller('ModalInstanceCtrl', ModalInstanceCtrl);

function ModalInstanceCtrl($scope, $uibModalInstance, $http, source) {
  this.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Karma'
  ];
  
  $scope.close = function close() {
    $uibModalInstance.close();
  };

  $http.get("/data/" + source).success(function(data){
    $scope.data = data;
  });
}
