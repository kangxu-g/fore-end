/*
*  ContentController
*/
(function(){
"use strict"
tempApp.controller('ContentController', function ($rootScope, $scope, $http, $location, $window,HeaderFactory){
	$scope.defaultValue = HeaderFactory.getProducts();
	

	
    
});
}());
