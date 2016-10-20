import loginCtrl from './loginCtrl';

angular.module('myApp.login', ['ngRoute','ngStorage'])
  .config(function($routeProvider){
     $routeProvider.when('/',{
       templateUrl:'./login/login.html',
       controller:'loginCtrl',
       controllerAs:'lc'
     });
   })
   .controller('loginCtrl', loginCtrl);
