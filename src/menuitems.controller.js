(function () {
'use strict';

angular.module('MenuApp')
.controller('MenuItemsController', MenuItemsController);


MenuItemsController.$inject = ['MenuItemsService','$scope', '$stateParams'];
function MenuItemsController(MenuItemsService,$scope,$stateParams) {
  var menu = this;
  var promise = MenuItemsService.response($stateParams.short_name);
  
  promise.then(function (response) {
      console.log(response.data);
      menu.items = response.data.menu_items;
  }).catch(function (error) {
      console.log(error);
  })
  
  
}

})();
