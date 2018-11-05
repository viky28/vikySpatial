
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

.controller('mainCtrl',['$scope','$location', function($scope,$location){
	$scope.keyDown = function(e){
		console.log('e==',e)
		if(e.which===8){
			$location.path('/')
			$('#myModal').modal('hide')
		}
		if(e.which===65){
			$location.path('/menu')
		} else if(e.which===76){
			$('#myModal').modal('show')
		}
	}
}])
