'use strict';

angular.module('kd', [
        'ngResource',
        'ngRoute',
        'ngMaterial',
        'kd.card',
        'kd.course'
    ])
    .config(function ($routeProvider) {
        $routeProvider.otherwise({ redirectTo: '/card' });
    })
;
