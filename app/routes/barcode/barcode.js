angular.module('app.barcode', ['app.services.fh', 'app.services.orders']).component('barcode', {
  templateUrl: 'routes/barcode/barcode.html',
  controller: ['fh', 'Orders', BarcodeController],
  controllerAs: 'vm'
});

function BarcodeController(fh, orders) {
  var vm = this;

  vm.fh = fh;
  vm.orders = orders;

  vm.getBarcode = function(toRoute, fromRoute) {
    vm.id = toRoute.params.id;

    vm.fh.cloud({path:'barcode/read', data:{barcode:vm.id}, method:'get'}).then(function(data) {
      console.log('arguments :: ', arguments);
      if(data.err) {
        console.log('barcode/recent error : ', data.err);
      }
      else {
        console.log('barcode/recent res : ', data.res);
        vm.barcode = data.res;
        vm.barcode.id = vm.id;
      }
    });
  };

  vm.orderItem = function() {
    vm.orders.orderItem(vm.barcode, vm.quantity).then(function(data) {
      console.log('Item Ordered');
    });
  }

  vm.$routerOnActivate = vm.getBarcode;
}
