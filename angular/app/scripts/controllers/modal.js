/* jshint latedef:nofunc */
'use strict';

/**
 * @ngdoc function
 * @name northAmericanNinjaApp.controller:ModalCtrl
 * @description
 * # ModalCtrl
 * Controller of the northAmericanNinjaApp
 */
angular.module('northAmericanNinjaApp')
  .controller('ModalCtrl', ModalCtrl);

function ModalCtrl($scope, $uibModal) {
  this.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Karma'
  ];

  $scope.openModal = function openModal(jsonFile) {
    $uibModal.open({
      animation: true,
      templateUrl: '../views/partials/modal.html',
      controller: 'ModalInstanceCtrl',
      size: 'lg',
      resolve: {
        items: function() { return $scope.awesomeThings; },
        source: function() { return jsonFile; }
      }
    });
  };
}
