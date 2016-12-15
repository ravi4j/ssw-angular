'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}]).controller('View1Ctrl', ['$scope', function($scope) {
  $scope.showBillDetailDrillDown = false;

  $scope.showCreditDetailDrillDown = false;

  $scope.toggleBillDetailDrillDown = function(){
    $scope.showBillDetailDrillDown = !$scope.showBillDetailDrillDown;
  };

  $scope.toggleCreditDetailDrillDown = function(){
    $scope.showCreditDetailDrillDown = !$scope.showCreditDetailDrillDown;
  };
  
}]);