angular
.module('comodoTestApp')
.component('listCv', {
  templateUrl: '/scripts/components/listCV/listCV.component.html',
  controllerAs: 'vm',
  bindings: {
    list: '=',
    mode: '=',
    archive: '=',
    cvview: '='
  },
  controller: function ($q, CV, $location, $window) {

    this.$onInit = function() {
      var vm = this;
      vm.access = {
        view: true,
        edit: true,
        delete: true
      };
      vm.deletedCV = [];

      if (!vm.mode) {
        vm.access.edit = false;
        vm.access.delete = false;
      }

      vm.deleteCVById = function (id, idx) {
        $q(function (resolve, reject) {
          return CV.removeCVById(id)
            .$promise
            .then(function (data) {
              vm.deletedCV = vm.list.splice(idx, 1);
              resolve(vm.deletedCV);
            },
              function (err) {
              reject(err);
              })
        })
          .then(function (cv) {
            return CV.addToArchive(cv[0])
              .$promise
              .then(function (data) {

                },
                function (err) {
                  console.log('err: ', err);
                })
          })
          .catch(function (err) {
            console.log(err);
          });
      };

      this.editCV = function (id) {
        $window.localStorage.setItem ('cvId', id);
        $location.path('/editCV');
      };

      this.viewCV = function (cv) {
        if (vm.archive) {
          CV.getArchiveCV(cv.id)
            .then(function (cv) {
              CV.setViewCV(cv);
              $window.localStorage.setItem('cv', cv.id);
              $location.path('/viewCV');
            });
        } else if (vm.cvview) {
          CV.getCV(cv.id)
            .then(function (cv) {
              CV.setViewCV(cv);
              $window.localStorage.setItem('cv', cv.id);
              $location.path('/viewCV');
            });
        }
      }
    };
  }
});
