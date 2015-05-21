'use strict';

angular.module('kd', [
        'ngResource',
        'ngRoute',
        'ngMaterial',
        'kd.card'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', { redirectTo: '/card' })
            .otherwise({ redirectTo: '/card' });
    })
;
