(function () {

    angular.module('app')
        .controller('ClassroomController', ['dataService', 'notifier', '$stateParams',ClassroomController]);

    function ClassroomController(dataService, notifier, $stateParams) {

        var vm = this;
        vm.message=$stateParams.classroomMessage;
        
        dataService.getClassroom($stateParams.id)
            .then(function (classroom) {
                vm.currentClassroom = classroom;

                if ($stateParams.month) {
                    if (classroom.activities.length > 0) {
                        vm.timePeriod = dataService.getMonthName($stateParams.month);
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

}());