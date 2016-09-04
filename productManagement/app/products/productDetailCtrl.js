/**
 * Created by Deb on 8/26/2014.
 */
(function () {
    "use strict";

    angular
        .module("productManagement")
        .controller("ProductDetailCtrl",
        ["product",
            function ProductDetailCtrl(product) {
                var vm = this;

                vm.product = product;

                vm.title = "Product Detail: " + vm.product.productName;

                if (vm.product.tags) {
                    vm.product.tagList = vm.product.tags.toString();
                }
            }]);


} ());
