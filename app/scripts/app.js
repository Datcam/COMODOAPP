'use strict';

/**
 * @ngdoc overview
 * @name comodoTestApp
 * @description
 * # comodoTestApp
 *
 * Main module of the application.
 */

angular
  .module('comodoTestApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
  ])
  .controller('generalCtrl', function ($location, $window) {
    this.goHome = function () {
      $location.path('/');
    }

    this.createCV = function () {
      $window.localStorage.removeItem('cvId');
      $location.path('/createCV');
    }

  });
