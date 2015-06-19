'use strict';

module.exports = angular.module('kd.deck.DeckStore', [
    require('common/store-factory').name
]).service('DeckStore', DeckStore);

function DeckStore(StoreFactory) {

    _.assign(this, new StoreFactory());

    // TODO init empty
    this.add({ id: "1", name: "Programming" });
    this.add({ id: "2", name: "Cooking" });
}