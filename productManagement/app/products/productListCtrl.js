/**
 * Created by Deb on 8/20/2014.
 */
(function () {
    "use strict";
    angular
        .module("productManagement")
        .controller("ProductListCtrl",
                    ["productResource",
                        ProductListCtrl]);

    function ProductListCtrl(productResource) {
        var vm = this;

        productResource.query(function(data) {
            vm.products = data;
        });
        vm.showImage = false;

        vm.toggleImage = function() {
            vm.showImage = !vm.showImage;
        }
    }
}());
