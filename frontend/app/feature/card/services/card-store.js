'use strict';

module.exports = angular.module('kd.card.CardStore', [
    require('common/store-factory').name
]).service('CardStore', CardStore);

function CardStore(StoreFactory) {
    _.assign(this, new StoreFactory());

    // TODO init empty
    this.add({ id: "1", deckId: "1", question: "What is functional programming?", answer: "Funktionale Programmierung ist ein Programmierparadigma, bei dem Programme ausschließlich aus Funktionen bestehen. Dadurch wird bewusst auf die aus der imperativen Programmierung bekannten Nebenwirkungen verzichtet." });
    this.add({ id: "2", deckId: "1", question: "What is a closure?", answer: "JavaScript variables can belong to the local or global scope. Private variables can be made possible with closures." });
    this.add({ id: "3", deckId: "2", question: "What is an apple pie?", answer: "It is a cake!" })

    this.getByDeckId = getByDeckId;

    function getByDeckId(id) {
        return _.filter(this.getAll(), function (card) {
            return card.deckId === id;
        });
    }
}