require('./features/deck/deck-module');
require('./features/card/card-module');
require('./features/course/course-module');

module.exports = angular.module('kd', [
    'ngResource',
    'ngRoute',
    'ngMaterial',
    'kd.deck',
    'kd.card',
    'kd.course'
])
.config(function ($routeProvider) {
    $routeProvider.otherwise({ redirectTo: '/card' });
});