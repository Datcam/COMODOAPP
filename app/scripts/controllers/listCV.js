angular
  .module('comodoTestApp')
  .controller('ListCV', function ($scope, $rootScope, CV, $q) {

    function activate() {
      $scope.listCV = CV.getAllCV();
    }

    activate();
  });
