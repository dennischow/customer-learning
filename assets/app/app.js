(function(){

	var app = angular.module('customersApp', ['ngRoute']);

	// Config Routing
	app.config(function ($routeProvider) {
		$routeProvider
			.when('/', {
				controller : 'CustomersController',
				templateUrl : 'assets/app/views/customers.html'
			})
			.when('/orders/:customerID', {
				controller : 'OrdersController',
				templateUrl : 'assets/app/views/orders.html'
			})
			.otherwise({ redirectTo: '/' });

	});

	// Import Header View
	app.directive('headerView', function() {
		var headerView = {};
		headerView.restrict = 'AE';
		headerView.templateUrl = 'assets/app/views/header-view.html';
		return headerView;
	});



}());
