'use strict';

require('./deck-list-directive.less');

module.exports = angular.module('kd.deck.deckList', [
    require('components/deck/services/deck-store').name,
    require('components/deck/components/deck-item-directive').name
]).directive('deckList', deckList);

function deckList(DeckStore) {
    return {
        restrict: 'E',
        template: require('components/deck/components/deck-list-directive.html'),
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