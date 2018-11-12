
var app = angular.module('myApp',
	[
		'ui.router',
		'myApp.home',
		'myApp.details',
		'myApp.menu'
	]);
app.config(function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise('/');
	
	$stateProvider
	.state('home',{
		url:'/',
		views:{
			"":{
				templateUrl:"home/home.html"
			}
		}
	})
	.state('details',{
		url:'/details',
		views:{
			"":{
				templateUrl:"details/details.html"
			}
		}
	})
	.state('menu',{
		url:'/menu',
		views:{
			"":{
				templateUrl:"menu/menu.html"
			}
		}
	})
})

.controller('mainCtrl',['$scope','$location','$rootScope','SpatialService','$timeout', function($scope,$location,$rootScope,SpatialService,$timeout){
	
	$scope.keyDown = function(e){
		if(e.which===76){
			$('#myModal').modal('show');

			$('#myModal').on('shown.bs.modal', function () {
				SpatialNavigation.clear();
				SpatialService.dialogService();
			})
		} else if(e.which===8){
			$location.path('/');
			$('#myModal').modal('hide');
			SpatialNavigation.clear();
		} else if(e.which===65){
			$location.path('/menu');
			SpatialNavigation.clear();
		} else {
			if(SpatialNavigation.focus('carousel-example-1z',true)){
				if(e.which===37){
					$('#carousel-example-1z').carousel('prev')
				} else if(e.which===39) {
					$('#carousel-example-1z').carousel('next')
				}
			}
			SpatialService.startSpatial();
		}
	}
}])

.service('SpatialService', function(){
	this.startSpatial = function(){
		SpatialNavigation.init();

		SpatialNavigation.add({
	        selector: '.focusable',
	    });
	    
		SpatialNavigation.makeFocusable();
		SpatialNavigation.focus('main');
	}
	this.dialogService = function(){
		SpatialNavigation.init();

	    SpatialNavigation.add({
	    	id:'myModal',
	        selector: '#myModal .focusable',
	        restrict:'self-only',
	        defaultElement:'#cancelBtn'
	    });
	 
		SpatialNavigation.makeFocusable();
		SpatialNavigation.focus('myModal');
	}
})