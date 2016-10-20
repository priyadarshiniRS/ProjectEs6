import view1Ctrl from './view1Ctrl';
angular.module('myApp.view1', ['ngRoute','ngStorage'])
  .config(function($routeProvider){
     $routeProvider.when('/view1',{
			 templateUrl:'./view1/view1.html',
       controller:'view1Ctrl',
       controllerAs:'v1c'
		 })
     .when('/view12',{
			 templateUrl:'./view1/view12.html',
       controller:'view1Ctrl'
		 })
     .when('/newview', {
           redirectTo: '/view1'
       })
   })
   .controller('view1Ctrl', view1Ctrl);
