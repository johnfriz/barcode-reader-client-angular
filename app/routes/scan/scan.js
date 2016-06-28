angular.module('app.scan', ['app.services.fh', 'ngComponentRouter']).component('scan', {
	templateUrl: 'routes/scan/scan.html',
	bindings: { $router: '<' },
	controller: ['fh', ScanController],
	controllerAs: 'vm'
});

function ScanController(fh) {
	var vm = this;

	vm.fh = fh;

	vm.readBarcode = function() {
	  console.log('read barcode - ', this.barcode);
		this.$router.navigate(['/Barcode', {id: this.barcode}]);
  }
}
