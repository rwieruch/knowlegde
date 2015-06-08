'use strict';

module.exports = angular.module('kd.deck.deckItem', [
    require('features/deck/components/deck-remove-directive').name
]).directive('deckItem', deckItem);

function deckItem() {
    return {
        restrict: 'E',
        template: require('features/deck/components/deck-item-directive.html'),
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