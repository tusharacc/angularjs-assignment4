(function () {
'use strict';

angular.module('MenuApp')
.service('MenuItemsService', MenuItemsService);


MenuItemsService.$inject = ['$http','$q']
function MenuItemsService($http,$q) {
  var service = this;
  
  service.response = function(short_name){
    console.log(short_name);
    var req = $http({
      method: "GET",
      url: ("https://davids-restaurant.herokuapp.com/menu_items.json?category="+short_name)
    });
    return req;
  }
  

}

})();