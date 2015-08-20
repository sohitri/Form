"use strict";

var application = angular.module("myApp", []);

application.controller("Ctrl", function($scope) {
    $scope.mail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,3}$/;
    $scope.validName = /^[A-z]+$/;
    $scope.validDesignation = /^[A-z]+$/;

    $scope.addEmployee = function() {

    	if($scope.formValid.$invalid){
    		$scope.submitted=0;
			}
			else
			{
				$scope.submitted=1;
			}

    };

});
