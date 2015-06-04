'use strict';

angular.module('kd.deck.deckCreate', [
    'kd.deck.DeckCreateService'
]).directive('deckCreate', deckCreate);

function deckCreate(DeckCreateService) {
    return {
        restrict: 'E',
        templateUrl: 'app/features/deck/components/deck-create-directive.html',
        scope: { },
        controller: controllerFn,
        controllerAs: 'vm',
        bindToController: true
    };

    function controllerFn($scope) {

        var vm = this;

        vm.createDeck = createDeck;

        function createDeck() {
            DeckCreateService.createDeck(vm.deckName);
            clean();
        }

        function clean() {
            vm.deckName = '';
        }
    }
}