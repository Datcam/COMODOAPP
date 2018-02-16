angular
.module('comodoTestApp')
.controller('ViewCV', function ($scope, CV, $window, $location) {
  $scope.cv = CV.getViewCV();
});
