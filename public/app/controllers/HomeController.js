(function(){

	angular.module('app')
		.controller('HomeController', ['dataService', '$log', '$state', HomeController]);
		
	function HomeController(dataService, $log, $state) {
				
				var vm = this;
				
				vm.message = "Welcome to school, buddy!";
				
				vm.refresh = function() {
					$log.log($state.current);
					$state.reload();
				}

				dataService.getAllSchools()
					.then(function(schools) {
						vm.allSchools = schools;
						vm.schoolCount = schools.length;
					})
					.catch(showError);
					
				dataService.getAllClassrooms()
					.then(function(classrooms) {
						vm.allClassrooms = classrooms;
						vm.classroomCount = classrooms.length;
					})
					.catch(showError);
					
				dataService.getAllActivities()
					.then(function(activities) {
						vm.allActivities = activities;
						vm.activityCount = activities.length;
					})
					.catch(showError);
				
				function showError(message) {
					notifier.error(message);
				}
		};
}());