/**
 * Created by Deb on 8/26/2014.
 */
(function () {
    "use strict";

    angular
        .module("onlineClassScheduler")
        .controller("ClassEditCtrl",
        ["selectedClass",
            "$location",
            ClassEditCtrl]);

    function ClassEditCtrl(selectedClass, $location) {
        var vm = this;

        vm.class = selectedClass;
        vm.title = "";

        //vm.class.startDate = new Date(vm.class.startDate);
        //vm.class.endDate = new Date(vm.class.endDate);

        var _startDate = new Date(vm.class.startDate);
        var _endDate= new Date(vm.class.endDate);
        vm.dates = {
            startDate: function(value){
                if (angular.isDefined(value))
                {
                    _startDate=value;
                    vm.class.startDate=_startDate;
                }
                return _startDate;
            },
            endDate: function(value){
                if (angular.isDefined(value))
                {
                    _endDate=value;
                    vm.class.endDate = _endDate;
                }
                return _endDate;
            }
        };

        if (vm.class && vm.class.classId) {
            vm.title = "Edit: " + vm.class.className;
        }
        else {
            vm.title = "New Class";
        }

        vm.cancelEntry = function (control, event) {
            //ESC keyCode
            if (event.keyCode == 27) {
                control.$rollbackViewValue();
            }
        };
        
        vm.submit = function () {
                vm.class.$save();
               // $location.path("/classList");
        };

        vm.cancel = function () {
            $location.path("/classList");
        };
    }
}());
