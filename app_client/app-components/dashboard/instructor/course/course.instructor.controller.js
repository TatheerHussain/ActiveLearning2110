/* jshint node: true */

//************************************************************
//  course.instructor.controller.js                         //
//  Active Learning 2110                                    //
//                                                          //
//  Created by Jeremy Carter on 02/03/17.                   //
//  Copyright © 2016 Jeremy Carter. All rights reserved.    //
//                                                          //
//  Date        Name        Description                     //
//  -------     ---------   --------------                  //
//  11Feb17     J. Carter  Initial Design                   //
//                                                          //
//************************************************************

var app = angular.module('app');

app.controller('Instructor.Course.Controller', function($scope, $state, $localStorage, UserService) {

    $scope.status_labels = ["Verified", "Pending"];
    $scope.status_data = {};
    $scope.status_options = {
        responsive:false,
        maintainAspectRatio: false
    };

    $scope.statusPopulate = function(section) {
        var verified = 0;
        var pending = 0;
        for (var key in section.students) {
            if (section.students[key].status === "complete") {
                verified += 1;
            } else {
                pending += 1;
            }
        }
        $scope.status_data[section.name] = [verified, pending];
    };

});
