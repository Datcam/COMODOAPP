angular
.module('comodoTestApp')
.component('preview', {
  templateUrl: '/scripts/components/preview/preview.component.html',
  controllerAs: 'cv',
  bindings: {
    cvdata: '<'
  },
  controller: function () {
    var cv = this;
  }
});
