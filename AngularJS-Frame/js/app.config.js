/*
*  注册  module
*/
"use strict"
var tempApp = angular.module("templateApp",["ui.router","oc.lazyLoad"])
.config(["$provide","$compileProvider","$controllerProvider","$filterProvider",
                function($provide,$compileProvider,$controllerProvider,$filterProvider){
                    tempApp.controller = $controllerProvider.register;
                    tempApp.directive = $compileProvider.directive;
                    tempApp.filter = $filterProvider.register;
                    tempApp.factory = $provide.factory;
                    tempApp.service  =$provide.service;
                    tempApp.constant = $provide.constant;
                }]);
