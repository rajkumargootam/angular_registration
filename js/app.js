var myApp = angular.module('myApp',['ngRoute','firebase'])
.constant('FIREBASE_URL','https://angularfire-registration.firebaseio.com/');

myApp.config(['$routeProvider', function($routeProvider){
  $routeProvider
  .when('/login',{
    templateUrl:'views/login.html',
    controller:'RegistrationController'
  })
  .when('/register',{
    templateUrl:'views/register.html',
    controller:'RegistrationController'
  })
  .when('/sucess',{
    templateUrl:'views/sucess.html',
    controller:'SucessController'
  })
  .otherwise({
    redirectTo: '/login'
  });
}]);
