var myApp = angular.module('myApp', []);

myApp.controller('ctrl', function ($scope, $http) {

    $http.get('emp.json').success(function (data) {
        $scope.emp = data;
    });

  	$scope.reverseSort = false;


});