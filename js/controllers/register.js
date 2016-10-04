myApp.controller('RegistrationController', ['$scope','Authentication', '$rootScope', function($scope,Authentication,$rootScope) {

  $scope.login = function() {
    Authentication.login($scope.user);
  };//login

  $scope.logout = function() {
    Authentication.logout();
  };//logout

  $scope.register = function() {
    Authentication.register($scope.user);
 };//register
}]);//controller
