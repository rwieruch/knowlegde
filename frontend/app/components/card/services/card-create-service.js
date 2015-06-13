'use strict';

module.exports = angular.module('kd.card.CardCreateService', [
    require('components/card/services/card-store').name
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