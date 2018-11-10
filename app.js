
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
		console.log('e==',e.which)
		if(e.which===8){
			$location.path('/')
			$('#myModal').modal('hide')
			SpatialNavigation.clear()
		} else if(e.which===65){
			$('#myModal').modal('hide')
			$location.path('/menu')
			SpatialNavigation.clear()
		} else if(e.which===76){
			$('#myModal').modal('show')
			if(SpatialNavigation.focus('cancelBtn', true)){
				console.log("Hello bar bar ")
			}
			// SpatialNavigation.focus('carousel-example-1z',false)
			// SpatialNavigation.focus('main',false)
			// SpatialNavigation.focus('launchItem',false)
		} else if(e.which===37){
			if(SpatialNavigation.focus('carousel-example-1z', true))
			$('#carousel-example-1z').carousel('prev')
		} else if(e.which===39){
			if(SpatialNavigation.focus('carousel-example-1z', true))
			$('#carousel-example-1z').carousel('next')
		}
	}
}])
