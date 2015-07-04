'use strict';

module.exports = angular.module('kd.course.CourseController', [
    require('feature/course/components/course-progress-directive').name
]).controller('CourseController', CourseController);

function CourseController($routeParams) {
    var self = this;

    this.courseId = $routeParams.id;
}