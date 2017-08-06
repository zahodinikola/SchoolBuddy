'use strict';

var app = angular.module('app', ['ngRoute']);

app.config(['$logProvider', '$routeProvider', function ($logProvider, $routeProvider) {
    
    $logProvider.debugEnabled(true);
    
    $routeProvider
        .when('/', {
            controller: 'HomeController',
            controllerAs: 'home',
            templateUrl: 'app/templates/home.html'
        })
		.when('/schools', {
			controller: 'AllSchoolsController',
			controllerAs: 'schools',
			templateUrl: '/app/templates/allSchools.html',
/* 			caseInsensitiveMatch: true */
		})
		.when('/classrooms', { /* /:id', { */
			controller: 'AllClassroomsController',
			controllerAs: 'classrooms',
			templateUrl: 'app/templates/allClassrooms.html',
			// resolve: {
			// 	promise: function() {
			// 		throw "an error transitioning to classrooms";
			// 	}
			// }
/* 															,
			redirectTo: function(params, currPath, currSearch) {
				console.log(params);
				console.log(currPath);
				console.log(currSearch);
				return '/';
			} */
		})
		.when('/activities', {
			controller: 'AllActivitiesController',
			controllerAs: 'activities',
			templateUrl: '/app/templates/allActivities.html',
			resolve: {
				activities: function(dataService) {
					return dataService.getAllActivities();
				}
			}
		})
		.when('/classrooms/:id', {
			controller: 'ClassroomController',
			controllerAs: 'classroom',
			templateUrl: 'app/templates/classroom.html'
		})
		.when('/classrooms/:id/detail/:month?', {
			controller: 'ClassroomController',
			controllerAs: 'classroom',
			templateUrl: '/app/templates/classroomDetail.html'
		})
		.otherwise('/');
}]);

app.run(['$rootScope', '$log', function($rootScope, $log) {

	$rootScope.$on('$routeChangeSuccess', function(event, current, previous) {
		console.log('successfully changed route');
		console.log(event);
		console.log(current);
		console.log(previous);
	});

	$rootScope.$on('$routeChangeError', function(event, current, previous, rejection) {
		console.log('error changing route');
		console.log(event);
		console.log(current);
		console.log(previous);
		console.log(rejection);
	});
}]);