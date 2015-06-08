'use strict';

module.exports = angular.module('kd.card', [
    require('features/card/card-page-controller').name
])
.config(function($routeProvider) {
    $routeProvider.when('/card', getCardPage());
});

function getCardPage($router) {
    return {
        template: require('features/card/card-page-controller.html'),
        controller: 'CardPageController'
    };
}

