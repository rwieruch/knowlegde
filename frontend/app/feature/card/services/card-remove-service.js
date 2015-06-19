'use strict';

module.exports = angular.module('kd.card.CardRemoveService', [
    require('feature/card/services/card-store').name
]).service('CardRemoveService', CardRemoveService);

function CardRemoveService(CardStore) {

    this.removeCard = removeCard;

    function removeCard(card) {
        // TODO do API call

        CardStore.remove(card);
    }

}