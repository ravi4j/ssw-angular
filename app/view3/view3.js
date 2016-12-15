'use strict';

angular.module('myApp.view3', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/view3', {
            templateUrl: 'view3/view3.html',
            controller: 'View3Ctrl'
        });
    }])

    .controller('View3Ctrl', ['$scope' , '$http' , function($scope, $http) {
        $scope.show = false;
        $scope.readInput = function () {
            $http.get("data/view3-maze.txt").success(
                function (data) {
                   var line , n;
                   $scope.input = data;
                   $scope.inputLines = data.split('\n');
                   $scope.n = parseInt($scope.inputLines[0]);
                   $scope.maze =  new Array($scope.n);
                   for(var i = 1 ; i <= $scope.n ; i++){
                        line = $scope.inputLines[i];
                        $scope.maze[i-1] = new Array($scope.n);
                        for(var j = 0 ; j < $scope.n ; j++)
                            $scope.maze[i-1][j] = line.charAt(j);
                   }
                   $scope.lastLine = $scope.inputLines[$scope.n+1].split(' ').map(Number);
                   $scope.start = $scope.lastLine.slice(0,2);
                   $scope.end = $scope.lastLine.slice(2,4);
                   $scope.show = true;
                }).error(function () {
                    console.log("Error reading input file");
                });
        }
    }]);