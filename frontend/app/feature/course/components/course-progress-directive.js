require('./course-progress-directive.less');

module.exports = angular.module('kd.course.courseProgressDirective', [
    require('feature/course/services/course-store').name,
    require('feature/deck/services/deck-store').name,
    require('feature/card/services/card-store').name,
]).directive('courseProgress', courseProgress);

function courseProgress(CourseStore, DeckStore, CardStore) {
    return {
        restrict: 'E',
        template: require('./course-progress-directive.html'),
        scope: {
            courseId: '='
        },
        controller: controllerFn,
        controllerAs: 'vm',
        bindToController: true
    };

    function controllerFn($scope) {
        var vm = this;

        vm.nextCard = nextCard;
        vm.flipCard = flipCard;

        $scope.$watch('vm.courseId', init);

        function init() {
            var course = CourseStore.getById(vm.courseId);
            var cards = CardStore.getByDeckId(course.deckId);
            vm.deck = DeckStore.getById(course.deckId);
            vm.courseCards = cards.slice();
            vm.overallCardCount = cards.length;
            vm.currentCard = vm.courseCards.pop();
        }

        function flipCard() {
            vm.isFlipped = !vm.isFlipped;
        }

        function nextCard() {
            vm.isFlipped = false;
            vm.currentCard = vm.courseCards.pop();
        }
    }
}