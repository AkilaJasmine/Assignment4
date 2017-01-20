(function () {
    'use strict';

    angular.module('data')
    .service('menuDataService',menuDataService);
    menuDataService.$inject = ['$http'];

    function menuDataService($http){

        var service = this;

        service.getAllCategories = function(){
            return $http({
                method : 'GET',
                url : 'https://davids-restaurant.herokuapp.com/categories.json'
            }).then( function onSuccess(response){
                return response.data;
            });
        };

        service.getItemsForCategory = function(categoryShortName){
            return $http({
                method : 'GET',
                url : 'https://davids-restaurant.herokuapp.com/menu_items.json?category=',
                params : {category: categoryShortName}
            }).then(function(response){
                return response.data.menu_items;
            });
        };

    };

})();