(function () {

    angular.module('app')
        .controller('AllSchoolsController', ['dataService', 'notifier','$log','$state', AllSchoolsController]);

    function AllSchoolsController(dataService, notifier,$log,$state) {

        var vm = this;
        vm.refresh=function(){
            $log.debug($state.current);
            $state.reload();
        }
        dataService.getAllSchools()
            .then(function(schools) {
                vm.allSchools = schools;
            })
            .catch(showError);

        function showError(message) {
            notifier.error(message);
        }

    }

}());