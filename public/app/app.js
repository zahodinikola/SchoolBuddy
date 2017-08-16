(function(){

	var app = angular.module('app', ['ui.router']);

	app.config(['$logProvider', '$stateProvider', function ($logProvider, $stateProvider) {
		
		$logProvider.debugEnabled(true);
		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: 'app/templates/home.html',
				controller: 'HomeController',
				controllerAs: 'home'
			})
			.state('schools', {
				url: '/schools',
				templateUrl: 'app/templates/allSchools.html',
				controller: 'AllSchoolsController',
				controllerAs: 'schools'
			})
			.state('classrooms', {
				url: '/classrooms',
				templateUrl: 'app/templates/allClassrooms.html',
				controller: 'AllClassroomsController',
				controllerAs: 'classrooms'
			})
			.state('activities', {
				url: '/activities',
				templateUrl: 'app/templates/allActivities.html',
				cintroller: 'AllActivitiesController',
				controllerAs: 'activities'
			});
	}]);

	app.run(['$log', '$rootScope', function($rootScope, $log) {

		$rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
			
			$log.debug('successfully changed state');

			$log.debug('event', event);
			$log.debug('toState', toState);
			$log.debug('toParams', toParams);
			$log.debug('fromState', fromState);
			$log.debug('fromParams', fromParams);

		});
	}]);
}());