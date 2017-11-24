/* jshint latedef:nofunc */
'use strict';

/**
 * @ngdoc function
 * @name northAmericanNinjaApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the northAmericanNinjaApp
 */
angular.module('northAmericanNinjaApp')
  .controller('AboutCtrl', AboutCtrl);

function AboutCtrl() {
  this.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Karma'
  ];
}
