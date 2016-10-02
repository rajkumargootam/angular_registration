var myApp = angular.module('myApp',['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider){
  $routeProvider
  .when('/login',{
    templateUrl:'views/login.html',
    controller:'LoginController'
  })
  .when('/registaration',{
    templateUrl:'views/registration.html',
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

// myApp.controller('appController',['$scope',function($scope){
//   $scope.message = "Welcome to my App";
// }])
