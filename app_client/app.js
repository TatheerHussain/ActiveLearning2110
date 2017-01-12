/* jshint node: true */

//************************************************************
//  app.js                                                  //
//  Active Learning 2110                                    //
//                                                          //
//  Created by Jeremy Carter on 01/11/16.                   //
//  Copyright © 2016 Odell Mizrahi. All rights reserved.    //
//                                                          //
//  Date        Name        Description                     //
//  -------     ---------   --------------                  //
//  11Jan16     J. Carter  Initial Design                   //
//                                                          //
//************************************************************

var app = angular
    .module('app', [
        'ui.router',
        'ngMessages',
        'ngStorage',
        'angularModalService',
        'angular-jwt'
    ]);

app.config(function($stateProvider, $urlRouterProvider) {
    // default route
    $urlRouterProvider.otherwise("/");

    // app state and individual views
    // $stateProvider
    //     .state('dashboard', {
    //         url: '/',
    //         views: {
    //             'login': {
    //                 templateUrl: '/app-components/login/login.view.html',
    //                 controller: 'Login.Controller'
    //             }
    //         }
    //     });
});

app.controller('Main.Controller', function($scope, $http, $localStorage, ModalService, AuthenticationService) {

    var showLogin = function() {
        ModalService.showModal({
            templateUrl: '/app-components/login/login.view.html',
            controller: 'Login.Controller'
        }).then(function(modal) {
            modal.element.modal({
                backdrop: 'static',
                keyboard: false
            });
            modal.close.then(function(result) {
                console.log(result);
            });
        });
    };

    if ($localStorage.currentUser && !AuthenticationService.Expired($localStorage.currentUser.token)) {
        $http.defaults.headers.common.Authorization = $localStorage.currentUser.token;
    } else {
        showLogin();
    }
});
