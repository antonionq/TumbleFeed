var app = angular.module('tumble', ['ngRoute']);

app.config(function ($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: 'js/templates/home.html',
    controller: 'mainCtrl'
  })
  
});