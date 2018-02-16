angular
.module('comodoTestApp')
.service('Modal', function ($uibModal) {
  this.notification = function (val) {
    return $uibModal.open({
      templateUrl: '/scripts/modals/notifications/notifications.modal.html',
      controller: 'Notifications',
      resolve: {
        val: function () {
          return val;
        }
      }
    }).result.catch(function (res) {
      console.log('It was ' + res);
    });
  }
});
