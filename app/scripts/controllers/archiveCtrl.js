angular
.module('comodoTestApp')
.controller('ArchiveCtrl', function ($scope, CV) {
  function activate() {
    $scope.listArchives = CV.getArchives();
  }

  activate();
});
