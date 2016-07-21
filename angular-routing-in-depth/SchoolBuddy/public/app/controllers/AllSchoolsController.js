(function () {

    angular.module('app')
        .controller('AllSchoolsController', ['dataService', 'notifier', AllSchoolsController]);

    function AllSchoolsController(dataService, notifier) {

        var vm = this;

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