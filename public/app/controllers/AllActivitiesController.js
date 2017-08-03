(function () {

    angular.module('app')
        .controller('AllActivitiesController',
                ['$log', 'dataService', AllActivitiesController]);
            // ['$log', '$state', 'dataService', 'notifier', 'activities', AllActivitiesController]);

    function AllActivitiesController($log, dataService) {//$state, notifier, activities) {

        var vm = this;

        vm.selectedMonth = 1; // default to January

        //vm.allActivities = activities;

        // $log.debug($state.current.data);

        // vm.search = function() {
        //   $state.go('classroom_detail', {
        //       id: vm.selectedClassroom.id,
        //       month: vm.selectedMonth
        //   });
        // };

        dataService.getAllActivities()
            .then(function(activities) {
                vm.allActivities = activities;
                //vm.selectedClassroom = classrooms[0];
            })
            .catch(showError);

        function showError(message) {
            notifier.error(message);
        }

    }

}());