angular
.module('comodoTestApp')
.component('createCV', {
  templateUrl: '/scripts/components/createCV/createCV.component.html',
  bindings: {
    mode: '=',
    cvdata: '='
  },
  controller: function ($scope, $rootScope, CV, $q, Modal, $location, $window, $timeout) {
    var ctrl = this;
    ctrl.$onInit = $onInit;

    function $onInit() {

      switch(ctrl.mode) {
        case 'edit':
          $scope.mode = true;
          CV.getCV($window.localStorage.getItem('cvId'))
            .then(function (cv) {
              $scope.cv = cv;
            });
          break;
        case 'create':
          $scope.cv = {};
          $scope.mode = false;
          break;
        case 'view':
          $scope.hideBtns = true;
          $scope.cv = CV.getViewCV();
          break;
      }

      $scope.editCV = function (cv) {
        $q(function (resolve, reject) {
          return CV.editCV(cv)
            .$promise
            .then(function (data) {
                resolve(data);
              },
              function (err) {
                reject(err);
              })
        })
          .then(function (data) {
            $timeout(function () {
              $location.path('/listCV');
            }, 10);
            $window.localStorage.removeItem('cvId');
            Modal.notification('Perfect, you have changed your CV.');
          })
          .catch(function (err) {
            console.log(err);
          })
      };

      $scope.addCV = function (cv) {
        $q(function (resolve, reject) {
          return CV.addNewCV(cv)
            .$promise
            .then(function (data) {
                resolve(data);
              },
              function (err) {
                reject(err);
              })
        })
          .then(function () {
            $window.localStorage.removeItem('cvId');
            $location.path('/listCV');
            Modal.notification('Good, already you have created a new CV.');
          })
          .catch(function (err) {
            console.log(err);
          })
      }
    }
  }
});
