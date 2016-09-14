/**
 * Created by Deb on 8/26/2014.
 */
(function () {
    "use strict";

    angular
        .module("productManagement")
        .controller("ProductDetailCtrl",
        ["product",'productService',
            function(product,productService) {
                var vm = this;

                vm.product = product;

                vm.title = "Product Detail: " + vm.product.productName;
                vm.marginPercent=productService.calculateMarginPercent(vm.product.price,vm.product.cost);
                if (vm.product.tags) {
                    vm.product.tagList = vm.product.tags.toString();
                }
            }]);


} ());
