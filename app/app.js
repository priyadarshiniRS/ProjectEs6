import dir1Ctrl from './directives/dir1Ctrl';
import ExampleService from './services/detailfact';
import dir1 from './directives/dir1';
import dir2 from './directives/dir2';
import dir3 from './directives/dir3';

import './login/login.js';
import './view1/view1.js';
import './view2/view2.js';
angular.module('myApp',
['ngRoute',
'ngStorage',
'myApp.login',
'myApp.view1',
'myApp.view2'])
  .config(function($routeProvider){
     $routeProvider.otherwise('/');
     console.log("This is route config");
	})

  .service('exampleService',ExampleService)
  .controller('dir1Ctrl', dir1Ctrl)
  .directive('d1', () => new dir1)
  .directive('d2', () => new dir2)
  .directive('d3', () => new dir3)
