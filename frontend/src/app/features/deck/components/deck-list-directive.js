'use strict';

angular.module('kd.deck.deckList', [
    'kd.deck.DeckStore',
    'kd.deck.deckItem'
]).directive('deckList', deckList);

function deckList(DeckStore) {
    return {
        restrict: 'E',
        templateUrl: 'app/features/deck/components/deck-list-directive.html',
        scope: { },
        controller: controllerFn,
        controllerAs: 'vm',
        bindToController: true
    };

    function controllerFn($scope) {

        var vm = this;

        DeckStore.on('add', init);
        DeckStore.on('update', init);
        DeckStore.on('remove', init);

        init();

        function init() {
            vm.decks = DeckStore.getAll();
        }

    }
}