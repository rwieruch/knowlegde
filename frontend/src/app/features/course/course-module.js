'use strict';

angular.module('kd.course', [
    'kd.course.CoursePageController'
])
.config(function($routeProvider) {
    $routeProvider.when('/course', getCoursePage());
});

function getCoursePage() {
    return {
        templateUrl: 'app/features/course/course-page-controller.html',
        controller: 'CoursePageController'
    };
}

