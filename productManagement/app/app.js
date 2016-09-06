/**
 * Created by Deb on 8/20/2014.
 */
"use strict";
(function () {
    
    var app = angular.module("productManagement",[
        'common.services',
        'ui.router',
        'ui.utils',
        'ui.bootstrap',
        'productResourceMock'
        ]);

    app.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('home',{
            url:"/",
            templateUrl:"app/welcomeView.html"
        })
        .state('productList',{
            url:"/products",
            templateUrl:"app/products/productListView.html",
            controller:"ProductListCtrl as vm"
        })
        .state('productDetail',{
            url:"/products/:productId",
            templateUrl:"app/products/productDetailView.html",
            controller:"ProductDetailCtrl as vm",
            resolve:{
                productResource:"productResource",
                product:function(productResource,$stateParams){
                    var productId=$stateParams.productId;
                    return productResource.get({productId:productId}).$promise;
                }
            }
        })
        .state('productEdit',{
            url:"/products/edit/:productId",
            abstract:true,
            templateUrl:"app/products/productEditView.html",
            controller:"ProductEditCtrl as vm",
            resolve:{
                productResource:"productResource",
                product:function(productResource,$stateParams){
                    var productId=$stateParams.productId;
                    return productResource.get({productId:productId}).$promise;
                }
            }
        })
        .state('productEdit.info',{
            url:"/info",
            templateUrl:"app/products/productEditInfoView.html"
        })
        .state('productEdit.price',{
            url:"/price",
            templateUrl:"app/products/productEditPriceView.html"
        })
        .state('productEdit.tags',{
            url:"/tags",
            templateUrl:"app/products/productEditTagsView.html"
        });
    }]);
}());