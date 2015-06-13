'use strict';

require('./deck.less');

module.exports = angular.module('kd.deck.DeckController', [
    require('components/deck/components/deck-create-directive').name,
    require('components/deck/components/deck-list-directive').name,
    require('components/card/components/card-create-directive').name,
    require('components/card/components/card-list-directive').name
]).controller('DeckController', DeckController);

function DeckController($routeParams, CardStore) {
    this.deckId = $routeParams.id;
}