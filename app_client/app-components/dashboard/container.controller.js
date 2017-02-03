/* jshint node: true */

//************************************************************
//  sidebar.controller.js                                   //
//  Active Learning 2110                                    //
//                                                          //
//  Created by Jeremy Carter on 01/12/17.                   //
//  Copyright © 2016 Jeremy Carter. All rights reserved.    //
//                                                          //
//  Date        Name        Description                     //
//  -------     ---------   --------------                  //
//  12Jan17     J. Carter  Initial Design                   //
//                                                          //
//************************************************************

var app = angular.module('app');

app.controller('Container.Controller', function($scope, $element, $localStorage, $state, UserService) {

    $scope.sortType = 'firstname';
    $scope.sortReverse = false;
    $scope.searchUsers = '';

    $scope.courseAC = function() {
        UserService.ShowACCourse();
    };

    $scope.cardClick = function(index) {
        $scope.$storage.selectedCourse = index;
        $state.go('main.course');
    };
});
