'use strict';

module.exports = angular.module('kd.course.CourseController', [
    require('components/course/services/course-store').name,
    require('components/card/components/card-list-directive').name
]).controller('CourseController', CourseController);

function CourseController($routeParams, CourseStore) {
    // TODO: refactor, dont use card list directive
    var self = this;

    self.courseId = $routeParams.id;

    var course = _.filter(CourseStore.getAll(), function (course) {
        return course.id === self.courseId;
    });

    this.deckId = course[0].deckId;
}