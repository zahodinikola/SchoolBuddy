(function(){

	var app = angular.module('app', ['ui.router']);
	app.config(['$logProvider', '$stateProvider', '$urlRouterProvider', function ($logProvider, $stateProvider, $urlRouterProvider) {

		
		$logProvider.debugEnabled(true);

		$urlRouterProvider.otherwise('/');

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
				controllerAs: 'classrooms',
				onEnter: function($log) {
					$log.info('entered state');
				},
				onExit: function($log) {
					$log.info('leaved state');
				}
			})
			.state('activities', {
				url: '/activities',
				templateUrl: 'app/templates/allActivities.html',
				controller: 'AllActivitiesController',
				controllerAs: 'activities',
				resolve: {
					activities: function(dataService) {
						return dataService.getAllActivities();
					}
				},
				data: {
					name: 'MyActivities',
					description: 'awsome'
				},
				foo: {
					myFoo: 'bar'
				}
			})
			.state('classroom_summary', {
				url: '/classrooms/:id',
				templateUrl: 'app/templates/classroom.html',
				controller: 'ClassroomController',
				controllerAs: 'classroom'
			})
			.state('classroom_detail', {
				url: '/classrooms/{id}/detail/{month}',
				templateUrl: 'app/templates/classroomDetail.html',
				controller: 'ClassroomController',
				controllerAs: 'classroom',
				params: {
					classroomMessage: {value: 'Learning is fun!'}
				}
			});
			
	}]);
		
	app.run(['$rootScope', '$log', function($rootScope, $log) {

		// $rootScope.$on('$stateChangeSuccess', 
		// 	function(event, toState, toParams, fromState, fromParams){
		// 		$log.info('successfully changed state');
		// 		$log.log('event', event);
		// 		$log.log('toState', toState);
		// 		$log.log('toParams', toParams);
		// 		$log.log('fromState', fromState);
		// 		$log.log('fromParams', fromParams);
		// });

		$rootScope.$on('$stateNotFound', function(event, unfoundState, fromState, fromParams) {
			$log.error("The requested state wasn't found: ", unfoudState);
		});

		$rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
			$log.error('An error occured when changing states:', error);
			$log.info('event', event);
			$log.info('toState', toState);
			$log.info('toParams', toParams);
			$log.info('fromState', fromState);
			$log.info('fromParams', fromParams);
		});

	}]);
}());