angular
.module('comodoTestApp')
  .config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider
      .when('/', {
        templateUrl: '../views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/listCV', {
        templateUrl: '../views/listCV.html',
        controller: 'ListCV',
        controllerAs: 'list'
      })
      .when('/archive', {
        templateUrl: '../views/archive.html',
        controller: 'ArchiveCtrl',
        controllerAs: 'archive'
      })
      .when('/contact', {
        templateUrl: '../views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
      })
      .when('/about', {
        templateUrl: '../views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/createCV', {
        templateUrl: '../views/createCV.html',
        controller: 'CreateCVCtrl',
        controllerAs: 'createCV'
      })
      .when('/editCV', {
        templateUrl: '../views/editCV.html',
        controller: 'EditCVCtrl',
        controllerAs: 'editCV'
      })
      .when('/viewCV', {
        templateUrl: '../views/viewCV.html',
        controller: 'ViewCV',
        controllerAs: 'view'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
