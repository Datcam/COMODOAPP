angular
.module('comodoTestApp')
.controller('Notifications', function ($scope, $location, val, $uibModalInstance) {
  $scope.message = val;

  $scope.ok = function () {
    $location.path('/listCV');
    $uibModalInstance.close();
  }
});
