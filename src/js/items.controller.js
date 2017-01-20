(function(){
    'use strict';
    angular.module('menuApp')
    .controller('itemsController',itemsController);

    itemsController.$inject = ['menuDataService','items'];
    function itemsController(menuDataService,items) {
        var itemsCtrl = this;
        itemsCtrl.items = items;
    };
})();