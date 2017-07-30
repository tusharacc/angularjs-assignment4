(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoriesController', CategoriesController);


CategoriesController.$inject = ['CategoriesService', 'items'];
function CategoriesController(CategoriesService, items) {
  var $ctrl = this;
  $ctrl.categories = items;
}

})();
