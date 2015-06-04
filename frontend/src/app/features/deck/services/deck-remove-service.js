'use strict';

angular.module('kd.deck.DeckRemoveService', [
    'kd.deck.DeckStore'
]).service('DeckRemoveService', DeckRemoveService);

function DeckRemoveService(DeckStore) {

    this.removeDeck = removeDeck;

    function removeDeck(deck) {
        // TODO do API call

        DeckStore.remove(deck);
    }

}