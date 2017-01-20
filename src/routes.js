(function () {
    'use strict';

    angular.module('menuApp')
    .config(routeConfig);

    routeConfig.$inject = ['$stateProvider','$urlRouterProvider'];

    function routeConfig($stateProvider,$urlRouterProvider){

        $urlRouterProvider.otherwise('/home');

        $stateProvider
        .state('home',{
            url : '/home',
            templateUrl : '/src/template/home.html'
        })
        .state('categories',{
            url : '/categories',
            templateUrl : '/src/template/categories.html',
            controller : 'categoriesController as cateCtrl',
            resolve : {
                categories : ['menuDataService', function(menuDataService){
                    return menuDataService.getAllCategories();
                }]
            }
        })
        .state('items',{
            url : '/items/{categoryShortName}',
            templateUrl : '/src/template/items.html',
            controller : 'itemsController as itemsCtrl',
            resolve : {
                items : ['$stateParams','menuDataService', function($stateParams,menuDataService){
                    return menuDataService.getItemsForCategory($stateParams.categoryShortName);
                }]
            }
        });
        
    };

})();