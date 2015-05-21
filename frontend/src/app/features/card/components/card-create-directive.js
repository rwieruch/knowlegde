'use strict';

angular.module('kd.card.cardCreate', [
    'kd.card.CardCreateService'
]).directive('cardCreate', cardCreate);

function cardCreate() {
    return {
        restrict: 'E',
        templateUrl: 'app/features/card/components/card-create-directive.html',
        scope: { },
        controller: controllerFn,
        controllerAs: 'vm',
        bindToController: true
    };

    function controllerFn($scope, CardCreateService) {

        var vm = this;

        vm.createCard = createCard;

        function createCard() {
            CardCreateService.createCard(vm.question, vm.answer);
            clean();
        }

        function clean() {
            vm.question = '';
            vm.answer = '';
        }
    }
}