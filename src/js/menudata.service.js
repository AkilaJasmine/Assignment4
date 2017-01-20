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
                url : 'https://davids-restaurant.herokuapp.com/menu_items.json',
                //params : {name: categoryShortName}
            }).then(function(response){
                var menuItems = response.data.menu_items;
                var filterItems = [];
                if(categoryShortName.indexOf("Sushi") != -1){
                    categoryShortName = "Sushi";
                }
                 for (var i = 0; i < menuItems.length; i++) {
                    var item = menuItems[i].name.toLowerCase();
                        if (item.indexOf(categoryShortName.toLowerCase()) != -1) {
                            filterItems.push(menuItems[i]);
                        }
                }
                return filterItems;
            });
        };

    };

})();