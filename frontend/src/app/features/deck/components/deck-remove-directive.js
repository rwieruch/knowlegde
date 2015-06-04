'use strict';

angular.module('kd.deck.deckRemove', [
    'kd.deck.DeckRemoveService'
]).directive('deckRemove', deckRemove);

function deckRemove(DeckRemoveService) {
    return {
        restrict: 'E',
        templateUrl: 'app/features/deck/components/deck-remove-directive.html',
        scope: {
            deck: '='
        },
        controller: controllerFn,
        controllerAs: 'vm',
        bindToController: true
    };

    function controllerFn($scope) {

        var vm = this;

        vm.removeDeck = removeDeck;

        function removeDeck() {
            DeckRemoveService.removeDeck(vm.deck);
        }

    }
}