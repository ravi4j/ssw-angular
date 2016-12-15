'use strict';

angular.module("myApp.services" , [])
    .service('urlService', function(){
        var _baseUrl = '';
        var _context = '';
        var _resource = '';

        this.setBaseUrl = function(baseUrl){
            _baseUrl = baseUrl;
        }

        this.getBaseUrl = function(){
            return _baseUrl;
        }

        this.setContext = function(context){
            _context = context;
        }

        this.getContext = function(){
            return _context;
        }

        this.setResource = function(resource){
            _resource = resource;
        }

        this.getResource = function(){
            return _resource;
        }
        
        this.makeUrl = function(){
            return _baseUrl + '/' + _context + '/' + _resource;
        }
    });