angular.module('myApp.home', [])

.controller('homeCtrl',['$scope','$http','$location','SpatialService', function($scope,$http,$location,SpatialService){

	console.log("Spatial test");
	SpatialService.startSpatial();
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
.service('SpatialService', function(){
	this.startSpatial = function(){
		SpatialNavigation.init();

		SpatialNavigation.add({
			id:'carousel-example-1z',
	        selector: '#carousel-example-1z .focusable',
	    });
		SpatialNavigation.add({
	        selector: '.focusable',
	    });
	    SpatialNavigation.add({
	    	id:'launchItem',
	        selector: '#launchItem .focusable',
	    });
	    SpatialNavigation.add({
	    	id:'main',
	        selector: '#main .focusable',
	    });
	    SpatialNavigation.add({
	    	id:'cancelBtn',
	        selector: '#cancelBtn .focusable',
	        restrict: 'self-only',
	        defaultElement:'#cancelBtn'
	    });
	 
		SpatialNavigation.makeFocusable();
		SpatialNavigation.focus();
	}
	
})