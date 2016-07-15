/**
 * Created by Deb on 8/21/2014.
 */
(function () {
    "use strict";

    angular
        .module("common.services")
        .factory("classResource",
        ["$resource",
            classResource]);

    function classResource($resource) {
        return $resource("/api/classes/:classId/:className");
    }

    //function classResource($resource) {
    //    return {
    //        classes: $resource("/api/classes/:classId/:className"),
    //        classByName: $resource("/api/class/:className/:classId")
    //    };
    //}
}());
