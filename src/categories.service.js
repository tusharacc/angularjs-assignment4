(function () {
'use strict';

angular.module('MenuApp')
.service('CategoriesService', CategoriesService);


CategoriesService.$inject = ['$http']
function CategoriesService($http) {
  var service = this;

  service.response = function(){
    var req = $http({
      method: "GET",
      url: ("https://davids-restaurant.herokuapp.com/categories.json")
    });
    return req;
  }
  

}

})();