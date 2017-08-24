(function () {

    angular.module('app')
        .controller('AllActivitiesController',
                ['$log', 'dataService', '$location', '$state', AllActivitiesController]);

    function AllActivitiesController($log, dataService, $location, $state) {

        var vm = this;
        vm.selectedMonth = 1;

        vm.search = function() {
            $state.go('classroom_detail', {id: vm.selectedClassroom.id, month: vm.selectedMonth});
        }

        dataService.getAllClassrooms()
            .then(function(classrooms) {
                vm.allClassrooms = classrooms;
                vm.selectedClassroom = classrooms[0];
            })
            .catch(showError);

        dataService.getAllActivities()
            .then(function(activities) {
                vm.allActivities = activities;
            })
            .catch(showError);

        function showError(message) {
            notifier.error(message);
        }

    }

}());