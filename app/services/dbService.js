/**
 * Created by ravisharma on 10/25/2016.
 */
'use strict';

angular.module("myApp.dbServices", [])
    .service('dbService', function($http){
     return {
       getUsers: function () {
          return "Get User using http to express connected to mongodb";
        }
    };
 });
