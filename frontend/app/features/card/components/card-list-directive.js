'use strict';

require('./card-list-directive.less');

module.exports = angular.module('kd.card.cardList', [
    require('features/card/services/card-store').name,
    require('features/card/components/card-item-directive').name
]).directive('cardList', cardList);

function cardList(CardStore) {
    return {
        restrict: 'E',
        template: require('features/card/components/card-list-directive.html'),
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