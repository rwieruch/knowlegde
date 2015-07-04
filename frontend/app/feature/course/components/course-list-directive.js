'use strict';

module.exports = angular.module('kd.course.courseListDirective', [
    require('feature/course/services/course-store').name,
    require('feature/deck/services/deck-store').name
]).directive('courseList', courseList);

function courseList(CourseStore, DeckStore) {
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
            var courses = CourseStore.getAll();
            var deckIds = _.pluck(courses, 'deckId');
            var decks = DeckStore.getByIds(deckIds);

            vm.extendedCourses = _.map(courses, extendCourseWithDeck(decks));
        }

        function extendCourseWithDeck(decks) {
            return function (course) {
                return _.assign({}, course, _.find(decks, getDeckByDeckId(course)));
            }
        }

        function getDeckByDeckId(course) {
            return function (deck) {
                return deck.id === course.deckId;
            }
        }

    }
}