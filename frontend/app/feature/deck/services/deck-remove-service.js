'use strict';

module.exports = angular.module('kd.deck.DeckRemoveService', [
    require('feature/deck/services/deck-store').name
]).service('DeckRemoveService', DeckRemoveService);

function DeckRemoveService(DeckStore) {

    this.removeDeck = removeDeck;

    function removeDeck(deck) {
        // TODO do API call

        DeckStore.remove(deck);
    }

}