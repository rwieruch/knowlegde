'use strict';

module.exports = angular.module('kd.deck.deckCreate', [
    require('feature/deck/services/deck-create-service').name
]).directive('deckCreate', deckCreate);

function deckCreate(DeckCreateService) {
    return {
        restrict: 'E',
        template: require('feature/deck/components/deck-create-directive.html'),
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