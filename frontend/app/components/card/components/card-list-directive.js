'use strict';

require('./card-list-directive.less');

module.exports = angular.module('kd.card.cardList', [
    require('components/card/services/card-store').name,
    require('components/card/components/card-item-directive').name
]).directive('cardList', cardList);

function cardList(CardStore) {
    return {
        restrict: 'E',
        template: require('components/card/components/card-list-directive.html'),
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