angular.module('app.navbar', []).component('navBar', {
  templateUrl: 'components/navbar/navbar.html',
  controllerAs: 'vm',
  controller: ['$rootRouter', function($rootRouter) {
    var vm = this;
  }]
});
