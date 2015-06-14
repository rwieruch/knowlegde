require('./components/common/common-module');
require('./components/deck/deck-module');
require('./components/card/card-module');
require('./components/course/course-module');

require('./route');

var _ = require('lodash');

module.exports = angular.module('kd', [
    'ngResource',
    'ngNewRouter',
    'ngMaterial',
    'kd.common',
    'kd.deck',
    'kd.card',
    'kd.course',
    'kd.route'
]);