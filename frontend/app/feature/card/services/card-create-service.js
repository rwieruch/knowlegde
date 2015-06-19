'use strict';

module.exports = angular.module('kd.card.CardCreateService', [
    require('feature/card/services/card-store').name
]).service('CardCreateService', CardCreateService);

function CardCreateService(CardStore) {

    this.createCard = createCard;

    function createCard(deckId, question, answer) {

        var card = {
            deckId: deckId,
            id: Math.random(),
            question: question,
            answer: answer
        };
        CardStore.add(card);
    }

}