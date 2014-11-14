(function(){

	var OrdersController = function($scope, $routeParams){

		var customerID = $routeParams.customerID; // customerID is come from the url 
		$scope.orders = null;

		// Gather Data
		$scope.customers = customerData; // Referal to /api/data.js

		function ordersAssign(){
			for(var i=0, len=$scope.customers.length; i<len; i++){
				if( $scope.customers[i].id === parseInt( customerID ) ){
					// console.log( $scope.customers[i].id );
					$scope.orders = $scope.customers[i].orders;
					break;
				}
				// console.log( $scope.customers.length );
				// console.log( parseInt( customerID ) );
			}
			console.log(' Run ');
		}

		// Execute Order Assignation
		ordersAssign();

	}

	// Inject par to the Function
	OrdersController.$inject = ['$scope', '$routeParams'];

	// Create Module and Controller
	angular.module('customersApp')
		.controller('OrdersController', OrdersController);

}());