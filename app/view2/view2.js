import view2Ctrl from './view2Ctrl';
angular.module('myApp.view2', ['ngRoute','ngStorage'])
  .config(function($routeProvider){
     $routeProvider.when('/view2/:id',{
      templateUrl:'./view2/view2.html',
       controller:'view2Ctrl',
       controllerAs:'v2c'
    })
    .when('/view2',{
     templateUrl:'./view2/view2.html',
      controller:'view2Ctrl',
      controllerAs:'v2c'
   });
   })
   .controller('view2Ctrl', view2Ctrl);
