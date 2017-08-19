(function () {

    angular.module('app')
        .controller('AllActivitiesController',
                ['$log', 'dataService', '$location', AllActivitiesController]);

    function AllActivitiesController($log, dataService, $location) {

        var vm = this;
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