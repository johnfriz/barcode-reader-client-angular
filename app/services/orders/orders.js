console.log('orders');

angular.module('app.services.orders', ['app.services.fh']).service('Orders', ['$q', 'fh', Orders]);

function Orders($q, fh) {
	console.log('init function');
	this.$q = $q;
	this.fh = fh;
}

Orders.prototype.orderItem = function(item, quantity) {
	var self = this;
	item.barcode = item.id;
	item.quantity = quantity;

	return this.$q(function(resolve) {
		// Modify the data structure for cloud API
		self.fh.cloud({path:'/orders', data:item, method:'post'}).then(function(data) {
			console.log('order post arguments :: ', arguments);
			if(data.err) {
				console.log('order post error : ', data.err);
			}
			else {
				console.log('order post res : ', data.res);
			}
			resolve(data);
		});
	});
}

Orders.prototype.getOrders = function(item) {
	var self = this;

	return this.$q(function(resolve) {
		self.fh.cloud({path:'/orders', method:'get'}).then(function(data) {
			console.log('order get arguments :: ', arguments);
			if(data.err) {
				console.log('order post error : ', data.err);
			}
			else {
				console.log('order post res : ', data.res);
			}
			resolve(data);
		});
	});
}

Orders.prototype.removeItem = function(orderId) {
	var self = this;

	console.log('Orders.removeItem :: ', orderId);
	self.orderId = orderId;

	return this.$q(function(resolve) {
		self.fh.cloud({path:'/orders/' + self.orderId, method:'delete'}).then(function(data) {
			console.log('order delete arguments :: ', arguments);
			if(data.err) {
				console.log('order delete error : ', data.err);
			}
			else {
				console.log('order delete res : ', data.res);
			}
			resolve(data);
		});
	});
}
