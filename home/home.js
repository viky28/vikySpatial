angular.module('myApp.home', [])

.controller('homeCtrl',['$scope','$http','$location','SpatialService', function($scope,$http,$location,SpatialService){

	console.log("Spatial test");
	
	$scope.showFirst = true;
	$scope.showFourth = false;

	$scope.showMore = function(e){
		console.log("Inside the function")
		$scope.showFirst = false;
		$scope.showFourth = true;
	}
	$scope.goToDetails = function(e){
		console.log("details")
		$location.path('/details')
		SpatialNavigation.clear()
	}
}])
.directive('ngEnter', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if(event.which === 13) {
                scope.$apply(function (){
                    scope.$eval(attrs.ngEnter);
                });

                event.preventDefault();
            }
        });
    };
})
