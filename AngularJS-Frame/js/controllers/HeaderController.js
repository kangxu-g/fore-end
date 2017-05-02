/*
*  HeaderController
*/
(function(){
"use strict"
tempApp.controller('HeaderController', function ($rootScope, $scope, $http, $location, $window,HeaderFactory){
	$scope.defaultValue = HeaderFactory.getProducts();
	
});
}());
