angular.module('app.orders', ['app.services.orders']).component('orders', {
  templateUrl: 'routes/orders/orders.html',
  controller: ['Orders', OrdersController],
  controllerAs: 'vm'
});

function OrdersController(orders) {
  var vm = this;

  vm.orderService = orders;

  vm.getOrders = function() {
    vm.orderService.getOrders().then(function(data) {
      console.log('get orders arguments :: ', arguments);
      if(data.err) {
        console.log('get orders error : ', data.err);
      }
      else {
        console.log('get orders res : ', data.res);
        vm.orders = data.res;
      }
    });
  }

  vm.removeItem = function(orderId) {
    console.log('remove Item arguments :: ', arguments);
    console.log('orders.js - orderId ', orderId);
    vm.orderService.removeItem(orderId).then(function(data) {
      console.log('remove order item arguments :: ', arguments);
      if(data.err) {
        console.log('remove order item error : ', data.err);
      }
      else {
        console.log('remove order item : ', data.res);
        vm.orderService.getOrders().then(function(data) {
          vm.orders = data.res;
        });
      }
    });
  }

  vm.$routerOnActivate = vm.getOrders;
}
