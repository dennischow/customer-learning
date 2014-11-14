

// Option 1
// app.controller('CustomersController', function($scope){

// 	$scope.sortBy = 'name';
// 	$scope.reverse = false;

// 	$scope.customers = [
// 		{joined:'2009-12-02', name:'John', age:'39', city:'Hong Kong', orderTotal:'9.3223'},
// 		{joined:'2005-11-12', name:'Alan', age:'21', city:'Hong Kong', orderTotal:'100.29'},
// 		{joined:'2011-12-02', name:'peter', age:'32', city:'US', orderTotal:'6.3920'},
// 		{joined:'2007-12-02', name:'Bitch', age:'11', city:'Thailand', orderTotal:'4.329023'},
// 		{joined:'2007-02-12', name:'Mami', age:'68', city:'Taiwan', orderTotal:'11.930922'},
// 		{joined:'2007-12-22', name:'Wood', age:'452', city:'Africa', orderTotal:'122.930922'},
// 		{joined:'2007-05-12', name:'Crazy', age:'22', city:'Korea', orderTotal:'2121.22'},
// 		{joined:'1992-04-22', name:'legs', age:'56', city:'Japan', orderTotal:'123.34'},
// 		{joined:'2002-02-15', name:'double bet', age:'21', city:'Canada', orderTotal:'542.346654'},
// 		{joined:'1989-03-29', name:'drink ', age:'43', city:'Taibei', orderTotal:'9834.2578'}
// 	]

// 	$scope.doSort = function(propName){
// 		$scope.sortBy = propName;
// 		$scope.reverse = !$scope.reverse;
// 	}

// });



// Option 2
// (function(){

// 	angular.module('customersApp')
// 		.controller('CustomersController', function($scope){

// 		$scope.sortBy = 'name';
// 		$scope.reverse = false;

// 		$scope.customers = [
// 			{joined:'2009-12-02', name:'John', age:'39', city:'Hong Kong', orderTotal:'9.3223'},
// 			{joined:'2005-11-12', name:'Alan', age:'21', city:'Hong Kong', orderTotal:'100.29'},
// 			{joined:'2011-12-02', name:'peter', age:'32', city:'US', orderTotal:'6.3920'},
// 			{joined:'2007-12-02', name:'Bitch', age:'11', city:'Thailand', orderTotal:'4.329023'},
// 			{joined:'2007-02-12', name:'Mami', age:'68', city:'Taiwan', orderTotal:'11.930922'},
// 			{joined:'2007-12-22', name:'Wood', age:'452', city:'Africa', orderTotal:'122.930922'},
// 			{joined:'2007-05-12', name:'Crazy', age:'22', city:'Korea', orderTotal:'2121.22'},
// 			{joined:'1992-04-22', name:'legs', age:'56', city:'Japan', orderTotal:'123.34'},
// 			{joined:'2002-02-15', name:'double bet', age:'21', city:'Canada', orderTotal:'542.346654'},
// 			{joined:'1989-03-29', name:'drink ', age:'43', city:'Taibei', orderTotal:'9834.2578'}
// 		]

// 		$scope.doSort = function(propName){
// 			$scope.sortBy = propName;
// 			$scope.reverse = !$scope.reverse;
// 		}

// 	});

// }());


// Option 3
(function(){

	var CustomersController = function($scope){

		$scope.sortBy = 'name';
		$scope.reverse = false;

		// Gather Data
		$scope.customers = customerData; // Referal to /api/data.js

		$scope.doSort = function(propName){
			$scope.sortBy = propName;
			$scope.reverse = !$scope.reverse;
		}
	}

	// Inject par to the Function
	CustomersController.$inject = ['$scope'];

	// Create Module and Controller
	angular.module('customersApp')
		.controller('CustomersController', CustomersController);

}());

