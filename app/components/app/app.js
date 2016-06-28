var app = angular.module('myApp', [
	'ngComponentRouter',
	'app.templates',
	'app.home',
	'app.navbar',
	'app.recent',
	'app.scan',
	'app.barcode',
	'app.orders'
]);

app.value('$routerRootComponent', 'app');
app.component('app', {
	templateUrl: 'components/app/app.html',
	$routeConfig: [
		{ path: '/', component: 'home', name: 'Home' },
		{ path: '/recent', component: 'recent', name: 'Recent'},
		{ path: '/scan', component: 'scan', name: 'Scan'},
		{ path: '/orders', component: 'orders', name: 'Orders'},
		{ path: '/barcode/:id', component: 'barcode', name: 'Barcode'}
	]
});
