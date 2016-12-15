'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope' , function($scope) {
  $scope.showSystemPanel = false;
  $scope.showComputerPanel = false;


  $scope.showSystemPanelFn = function(){
    angular.element(event.target).toggleClass('active');
    $scope.showSystemPanel = !$scope.showSystemPanel;
  };

  $scope.showComputerPanelFn = function(){
    angular.element(event.target).toggleClass('active');
    $scope.showComputerPanel = !$scope.showComputerPanel;
  };

}]);