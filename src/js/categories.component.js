(function () {
    'use strict';

    angular.module('menuApp')
    .component('categoriesComponent',{
        templateUrl : 'src/templates/categoriesList.template.html',
        bindings : {
            categories: '<'
        }
    });

})();