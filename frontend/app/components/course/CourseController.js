'use strict';

module.exports = angular.module('kd.course.CourseController', [
    require('feature/course/services/course-store').name,
    require('feature/card/components/card-list-directive').name
]).controller('CourseController', CourseController);

function CourseController($routeParams, CourseStore) {
    // TODO: refactor, dont use card list directive
    var self = this;

    self.courseId = $routeParams.id;

    var course = _.filter(CourseStore.getAll(), function (course) {
        return course.id === self.courseId;
    });

    console.log(course);

    this.deckId = course[0].deckId;
}