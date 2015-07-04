'use strict';

module.exports = angular.module('kd.course.courseListDirective', [
    require('feature/course/services/course-store').name
]).directive('courseList', courseList);

function courseList(CourseStore) {
    return {
        restrict: 'E',
        template: require('./course-list-directive.html'),
        scope: {

        },
        controller: controllerFn,
        controllerAs: 'vm',
        bindToController: true
    };

    function controllerFn() {

        var vm = this;

        CourseStore.on('add', init);
        CourseStore.on('update', init);
        CourseStore.on('remove', init);

        init();

        function init() {
            vm.courses = CourseStore.getAll();
        }

    }
}