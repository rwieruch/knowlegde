'use strict';

angular.module('kd.card.CardRemoveService', [
    'kd.card.CardStore'
]).service('CardRemoveService', CardRemoveService);

function CardRemoveService(CardStore) {

    this.removeCard = removeCard;

    function removeCard(card) {
        // TODO do API call

        CardStore.remove(card);
    }

}