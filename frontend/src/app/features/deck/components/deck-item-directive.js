'use strict';

angular.module('kd.deck.deckItem', [
    'kd.deck.deckRemove'
]).directive('deckItem', deckItem);

function deckItem() {
    return {
        restrict: 'E',
        templateUrl: 'app/features/deck/components/deck-item-directive.html',
        scope: {
            deck: '='
        },
        controller: controllerFn,
        controllerAs: 'vm',
        bindToController: true
    };

    function controllerFn($scope) {

        var vm = this;

    }
}