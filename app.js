var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider

  .when('/home', {
    templateUrl : 'pages/home.html',
    controller  : 'HomeController'
  })

  .when('/registration', {
    templateUrl : 'pages/registration.html',
    controller  : 'RegController'
  })

  .otherwise({redirectTo: '/'});
});

app.controller('HomeController', function($scope) {
  $scope.message = 'Hello from HomeController';
 
});

app.controller('regController', function($scope) {
  $scope.message = 'Hello from BlogController';
  
});

