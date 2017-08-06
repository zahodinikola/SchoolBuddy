(function () {

    angular.module('app')
        .controller('AllActivitiesController',
                ['$log', 'dataService', '$location', 'activities', AllActivitiesController]);
            // ['$log', '$state', 'dataService', 'notifier', 'activities', AllActivitiesController]);

    function AllActivitiesController($log, dataService, activities, $location) {//$state, notifier, activities) {

        var vm = this;
        vm.AllActivities = activities;

        vm.selectedMonth = 1; // default to January

        vm.search = function() {
            var classroom_detail_url = '/classrooms/' + vm.selectedClassroom.id + '/detail/' + vm.selectedMonth;
            $location.url(classroom_detail_url);
        };

        dataService.getAllClassrooms()
        .then(function(classrooms) {
            vm.allClassrooms = classrooms;
            vm.selectedClassroom = classrooms[0];
        })
        .catch(showError);

        //vm.allActivities = activities;

        // $log.debug($state.current.data);

        // vm.search = function() {
        //   $state.go('classroom_detail', {
        //       id: vm.selectedClassroom.id,
        //       month: vm.selectedMonth
        //   });
        // };

        // dataService.getAllActivities()
        //     .then(function(activities) {
        //         vm.allActivities = activities;
        //         //vm.selectedClassroom = classrooms[0];
        //     })
        //     .catch(showError);

        function showError(message) {
            notifier.error(message);
        }

    }

}());