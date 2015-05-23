angular.module('kd.card.CardEditService', [
    'kd.card.CardStore'
]).service('CardEditService', CardEditService);

function CardEditService(CardStore) {

    this.editCard = editCard;

    function editCard(card) {
        // TODO api call

        CardStore.update(card);
    }

}