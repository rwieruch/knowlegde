'use strict';

angular.module('kd.card.CardCreateService', [
    'kd.card.CardStore'
]).service('CardCreateService', CardCreateService);

function CardCreateService(CardStore) {

    this.createCard = createCard;

    function createCard(question, answer) {
        var card = {
            id: Math.random(),
            question: question,
            answer: answer
        };
        CardStore.add(card);
    }

}