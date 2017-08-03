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
			templateUrl: 'app/templates/allClassrooms.html'
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
			templateUrl: '/app/templates/allActivities.html'
		})
		.otherwise('/');
}]);