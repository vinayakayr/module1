(function () {
'use strict';

angular.module('myAppLunchItems', [])
.controller('myAppLunchItemsController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.checkDishes = function () {
    var noofdishes = countDishes($scope.dishesItems);
    $scope.messageToUser = createMessage(noofdishes);
  };

  function countDishes(dishesItems) {
    var count = 0;
    if (dishesItems) {
      var array = dishesItems.split(',');
      for (var idx in array) {
        if (array[idx].trim().length != 0) {
          count++;
        }
      }
    }
    return count;
  }

  function createMessage(noofdishes) {
    if(noofdishes === 0) {
      return 'Please enter your dish items';
    }
    else if(noofdishes <= 3) {
      return 'Enjoy!';
    } else {
      return 'Too much!';
    }
  }
}

})();