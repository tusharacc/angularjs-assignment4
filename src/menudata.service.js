(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService );


MenuDataService.$inject = ['$http','$q']
function MenuDataService($http,$q) {
  var service = this;

  service.getAllCategories = function(){
    var req = $http({
      method: "GET",
      url: ("https://davids-restaurant.herokuapp.com/categories.json")
    });
    return req;
  }
  
   service.getItemsForCategory = function(short_name){
    console.log(short_name);
    var req = $http({
      method: "GET",
      url: ("https://davids-restaurant.herokuapp.com/menu_items.json?category="+short_name)
    });
    return req;
  }

}

})();