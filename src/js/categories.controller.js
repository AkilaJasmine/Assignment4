(function(){
    'use strict';
    angular.module('menuApp')
    .controller('categoriesController', categoriesController);

    categoriesController.$inject = ['menuDataService','categories'];
    function categoriesController(menuDataService, categories){
         var cateCtrl = this;
         cateCtrl.categories = categories;
    };
})();