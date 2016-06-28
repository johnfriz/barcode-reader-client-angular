angular.module('app.recent', ['app.services.fh']).component('recent', {
  templateUrl: 'routes/recent/recent.html',
  controller: ['fh', RecentController],
  controllerAs: 'vm'
});

function RecentController(fh) {
  var vm = this;

  vm.fh = fh;

  vm.getRecent = function() {
    vm.fh.cloud({path:'barcode/recent', method:'get'}).then(function(data) {
      console.log('arguments :: ', arguments);
      if(data.err) {
        console.log('barcode/recent error : ', data.err);
      }
      else {
        console.log('barcode/recent res : ', data.res);
        vm.recent = data.res;
      }
    });
 }

  vm.$routerOnActivate = vm.getRecent;
}
