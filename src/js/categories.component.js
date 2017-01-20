(function () {
    'use strict';

    angular.module('menuApp')
    .component('categoriesComponent',{
        templateUrl : '/src/template/categoriesList.html',
        bindings : {
            categories: '<'
        }
    });

})();