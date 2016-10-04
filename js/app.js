var myApp = angular.module('myApp',['ngRoute','firebase'])
.constant('FIREBASE_URL','https://angularfire-registration.firebaseio.com/');

myApp.run(['$rootScope','$location', function($rootScope, $location){
  $rootScope.$on('$routeChangeError', function(evet,next,previous,error){
    if(error=='AUTH_REQUIRED') {
      $rootScope.message = 'Sorry,you must log in to acess this page';
      $location.path('/login');
    } // AUTH_REQUIRED
  });//event info
}]);//run

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
    controller:'SucessController',
    resolve: {
      currentAuth: function(Authentication){
        return Authentication.requireAuth();
      }//currentAuth
    }//resolve
  })
  .otherwise({
    redirectTo: '/login'
  });
}]);
