(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoriesController', CategoriesController);


CategoriesController.$inject = ['categories'];
function CategoriesController(categories) {
  var cat = this;
  console.log(categories);
  cat.categories = categories.data;
}

})();
