'use strict';

angular.module('kd', [
        'ngResource',
        'ngRoute',
        'ngMaterial',
        'kd.deck',
        'kd.card',
        'kd.course'
    ])
    .config(function ($routeProvider) {
        $routeProvider.otherwise({ redirectTo: '/card' });
    })
;
