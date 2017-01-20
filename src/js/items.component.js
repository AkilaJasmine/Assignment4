(function(){
    'use strict';
    angular.module('menuApp')
    .component('itemsComponent',{
        templateUrl : '/src/template/itemsList.html',
        bindings : {
            items : '<'
        }
    });

})();