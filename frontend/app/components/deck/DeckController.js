'use strict';

require('./deck.less');

module.exports = angular.module('kd.deck.DeckController', [
    require('components/deck/components/deck-create-directive').name,
    require('components/deck/components/deck-list-directive').name,
    require('components/card/services/card-store').name,
    require('components/card/components/card-create-directive').name,
    require('components/card/components/card-list-directive').name
]).controller('DeckController', DeckController);

function DeckController($routeParams, CardStore) {

    var self = this;

    CardStore.on('add', init);
    CardStore.on('update', init);
    CardStore.on('remove', init);

    init();

    function init() {
        self.cards = _.filter(CardStore.getAll(), function (card) {
            return card.deckId === $routeParams.id;
        });
    }

}