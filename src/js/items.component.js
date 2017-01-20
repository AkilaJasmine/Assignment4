(function(){
    'use strict';
    angular.module('menuApp')
    .component('itemsComponent',{
        templateUrl : 'src/templates/itemsList.template.html',
        bindings : {
            items : '<'
        }
    });

})();