'use strict';

angular.module('kd.card', [
    'kd.card.CardPageController'
])
.config(function($routeProvider) {
    $routeProvider.when('/card', getCardPage());
});

function getCardPage() {
    return {
        templateUrl: 'app/features/card/card-page-controller.html',
        controller: 'CardPageController'
    };
}

