/**
 * Created by Deb on 8/20/2014.
 */
(function () {
    "use strict";
    angular
        .module("onlineClassScheduler")
        .controller("ClassListCtrl",
                    ["classResource",
                        ClassListCtrl]);

    function ClassListCtrl(classResource) {
        var vm = this;

        vm.classes = [];

        classResource.query(function(data) {
            vm.classes = data;
        });
    }
}());
