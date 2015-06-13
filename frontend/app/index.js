require('./components/deck/deck-module');
require('./components/card/card-module');
require('./components/course/course-module');

require('./route');

module.exports = angular.module('kd', [
    'ngResource',
    'ngNewRouter',
    'ngMaterial',
    'kd.deck',
    'kd.card',
    'kd.course',
    'kd.route'
]);