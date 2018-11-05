angular.module('myApp.details', [])

.controller('detailsCtrl',['$scope','$location','SpatialService', function($scope,$location,SpatialService){
	SpatialService.startSpatial();
	
	$scope.keyDown = function(e){
		if(e.which===8){
			console.log("go back")
			$location.path('/')
		}
	}
}])
