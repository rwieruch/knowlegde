'use strict';

module.exports = angular.module('kd.course.CourseOverviewController', [
    require('feature/course/components/course-list-directive').name
]).controller('CourseOverviewController', CourseOverviewController);

function CourseOverviewController() {

}