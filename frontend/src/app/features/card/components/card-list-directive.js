'use strict';

angular.module('kd.card.cardList', [
    'kd.card.CardStore',
    'kd.card.cardItem'
]).directive('cardList', cardList);

function cardList(CardStore) {
    return {
        restrict: 'E',
        templateUrl: 'app/features/card/components/card-list-directive.html',
        scope: { },
        controller: controllerFn,
        controllerAs: 'vm',
        bindToController: true
    };

    function controllerFn($scope) {

        var vm = this;

        CardStore.on('add', init);
        CardStore.on('update', init);
        CardStore.on('remove', init);

        init();

        function init() {
            vm.cards = CardStore.getAll();
        }

    }
}