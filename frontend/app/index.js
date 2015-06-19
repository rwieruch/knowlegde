require('./common/common-module');
require('./feature/deck/deck-module');
require('./feature/card/card-module');
require('./feature/course/course-module');

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