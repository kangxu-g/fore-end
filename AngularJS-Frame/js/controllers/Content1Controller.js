/*
*  Content1Controller
*/
(function(){
"use strict"
tempApp.controller('Content1Controller', function ($rootScope, $scope, $http, $location, $window,HeaderFactory){
	$scope.defaultValue = HeaderFactory.getProducts();
	
});
}());
