/**
 * 路由配置 
 */
"use strict"
tempApp.config(["$stateProvider","$urlRouterProvider",routeFn]);
function routeFn($stateProvider,$urlRouterProvider){
    //$urlRouterProvider.otherwise("/default");
    $stateProvider
    .state("content",{
        url:"/content",
        templateUrl:"views/content.html",
        controller:"ContentController",
        controllerAs:"content",
        resolve:{
            deps:["$ocLazyLoad",function($ocLazyLoad){
                return $ocLazyLoad.load("js/controllers/ContentController.js");
            }]
        } 
    })
    .state("content1",{
        url:"/content1",
        templateUrl:"views/content1.html",
        controller:"Content1Controller",
        controllerAs:"content1",
        resolve:{
            deps:["$ocLazyLoad",function($ocLazyLoad){
                return $ocLazyLoad.load("js/controllers/Content1Controller.js");
            }]
        } 
    })
};
