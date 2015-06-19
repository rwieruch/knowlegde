'use strict';

module.exports = angular.module('kd.deck.DeckCreateService', [
    require('feature/deck/services/deck-store').name
]).service('DeckCreateService', DeckCreateService);

function DeckCreateService(DeckStore) {

    this.createDeck = createDeck;

    function createDeck(deckName) {
        var deck = {
            id: Math.random(),
            name: deckName
        };
        DeckStore.add(deck);
    }

}