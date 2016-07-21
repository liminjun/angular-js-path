(function () {

    angular.module('app')
        .controller('ClassroomController', ['dataService', 'notifier', '$routeParams', ClassroomController]);

    function ClassroomController(dataService, notifier, $routeParams) {

        var vm = this;

        vm.month = $routeParams.month;

        dataService.getClassroom($routeParams.id)
            .then(function (classroom) {
                vm.currentClassroom = classroom;

                if ($routeParams.month) {
                    if (classroom.activities.length > 0) {
                        vm.timePeriod = dataService.getMonthName($routeParams.month);
                    }
                    else {
                        vm.timePeriod = 'No activities this month';
                    }
                }
                else {
                    vm.timePeriod = 'All activities';
                }

            })
            .catch(showError);

        function showError(message) {
            notifier.error(message);
        }

    }

} ());