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
				controller: 'AllActivitiesController',
				controllerAs: 'activities'
			});
			
	}]);
		
	app.run(['$rootScope', '$log', function($rootScope, $log) {

		$rootScope.$on('$stateChangeStart', 
			function(event, toState, toParams, fromState, fromParams, options){ 
    			console.log(event); 
		});

		$rootScope.$on('$stateChangeSuccess', 
			function(event, toState, toParams, fromState, fromParams){
				$log.warn('successfully changed state');
				$log.log('event', event);
				$log.log('toState', toState);
				$log.log('toParams', toParams);
				$log.log('fromState', fromState);
				$log.log('fromParams', fromParams);
		});

	}]);
}());