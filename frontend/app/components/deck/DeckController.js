'use strict';

require('./deck.less');

module.exports = angular.module('kd.deck.DeckController', [
    require('feature/deck/components/deck-create-directive').name,
    require('feature/deck/components/deck-list-directive').name,
    require('feature/card/components/card-create-directive').name,
    require('feature/card/components/card-list-directive').name
]).controller('DeckController', DeckController);

function DeckController($routeParams) {
    this.deckId = $routeParams.id;
}