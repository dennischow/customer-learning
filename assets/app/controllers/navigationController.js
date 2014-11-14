(function(){

	var NavigationCotroller = function($scope){

		// console.log( pageUrl );

		// Gather Data
		$scope.navLists = pageUrl; // Referal to /api/data.js

		// console.log( $scope.nav );

	}

	// Inject par to the Function
	NavigationCotroller.$inject = ['$scope'];

	// Create Module and Controller
	angular.module('customersApp')
		.controller('NavigationCotroller', NavigationCotroller);

}());