'use strict';

angular.module('kd.deck.DeckCreateService', [
    'kd.deck.DeckStore'
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