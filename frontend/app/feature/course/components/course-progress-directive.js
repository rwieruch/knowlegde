require('./course-progress-directive.less');

module.exports = angular.module('kd.course.courseProgressDirective', [
    require('feature/course/services/course-store').name,
    require('feature/deck/services/deck-store').name,
    require('feature/card/services/card-store').name,
    require('common/progress-bar-directive').name
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
            vm.currentCard = vm.courseCards.pop();

            vm.overallCardCount = cards.length;
            vm.courseCardsDoneLength = 0;

            prepareCourseProgress(cards);
        }

        function flipCard() {
            vm.isFlipped = !vm.isFlipped;
        }

        function nextCard(remember) {
            updateCourseProgress(vm.currentCard, remember);

            vm.isFlipped = false;
            vm.currentCard = vm.courseCards.pop();
        }

        function prepareCourseProgress(cards) {
            vm.courseProgress = [];
            _.forEachRight(cards, function (card) {
                return vm.courseProgress.push({ id: card.id, remember: null });
            });
        }

        function updateCourseProgress(card, remember) {
            var progress = _.find(vm.courseProgress, function (progress) {
                return progress.id === card.id;
            })
            progress.remember = remember;
        }
    }
}