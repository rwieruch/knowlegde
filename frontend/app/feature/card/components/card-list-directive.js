'use strict';

require('./card-list-directive.less');

module.exports = angular.module('kd.card.cardList', [
    require('feature/card/services/card-store').name,
    require('feature/card/components/card-item-directive').name
]).directive('cardList', cardList);

function cardList(CardStore) {
    return {
        restrict: 'E',
        template: require('feature/card/components/card-list-directive.html'),
        scope: {
            deckId: '='
        },
        controller: controllerFn,
        controllerAs: 'vm',
        bindToController: true
    };

    function controllerFn($scope) {

        var vm = this;

        $scope.$watch('deckId', init);

        CardStore.on('add', init);
        CardStore.on('update', init);
        CardStore.on('remove', init);

        init();

        function init() {
            vm.cards = _.filter(CardStore.getAll(), function (card) {
                return card.deckId === vm.deckId;
            });
        }

    }
}