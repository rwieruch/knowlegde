'use strict';

require('./deck-remove-directive.less');

module.exports = angular.module('kd.deck.deckRemove', [
    require('feature/deck/services/deck-remove-service').name
]).directive('deckRemove', deckRemove);

function deckRemove(DeckRemoveService) {
    return {
        restrict: 'E',
        template: require('feature/deck/components/deck-remove-directive.html'),
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