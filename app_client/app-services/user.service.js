/* jshint node: true */

//************************************************************
//  user.service.js                                         //
//  Active Learning 2110                                    //
//                                                          //
//  Created by Jeremy Carter on 01/12/17.                   //
//  Copyright © 2016 Odell Mizrahi. All rights reserved.    //
//                                                          //
//  Date        Name        Description                     //
//  -------     ---------   --------------                  //
//  12Jan17     J. Carter  Initial Design                   //
//  15Jan17     J. Carter  Moved in ShowLogin & created     //
//                          ShowACCourse                    //
//************************************************************

var app = angular.module('app');

app.factory('UserService', function($http, $localStorage, ModalService) {

    var service = {};

    $localStorage.$default({
        id: '',
        email: '',
        photo: '',
        role: '',
        notifications: {
            count: 0,
            data: []
        }
    });

    service.ShowLogin = function() {
        ModalService.showModal({
            templateUrl: '/app-components/login/login.view.html',
            controller: 'Login.Controller'
        }).then(function(modal) {
            modal.element.modal({
                backdrop: 'static',
                keyboard: false
            });
        });
    };

    service.ShowACCourse = function() {
        ModalService.showModal({
            templateUrl: '/app-components/coursemodal/coursemodal.view.html',
            controller: 'CourseModal.Controller'
        }).then(function(modal) {
            modal.element.modal();
        });
    };

    service.getUserInfo = function(callback) {
        $http.post('/api_v2/user/' + $localStorage.id)
            .then(function (response) {
                $localStorage.id = response.data.user._id;
                $localStorage.email = response.data.user.username;
                $localStorage.photo = response.data.user.photo;
                $localStorage.role = response.data.user.role;
                callback(true, response.status, response.data.message);
            },
            function(response) {
                callback(false, response.status, response.data.message);
            }
        );
    };

    service.Clear = function() {
        $localStorage.$reset();
    };

    return service;
});
