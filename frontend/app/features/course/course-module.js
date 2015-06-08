'use strict';

module.exports = angular.module('kd.course', [
    require('features/course/course-page-controller').name
])
.config(function($routeProvider) {
    $routeProvider.when('/course', getCoursePage());
});

function getCoursePage() {
    return {
        template: require('features/course/course-page-controller.html'),
        controller: 'CoursePageController'
    };
}

