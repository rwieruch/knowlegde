'use strict';

require('./card-list-directive.less');

module.exports = angular.module('kd.card.cardList', [
    require('components/card/components/card-item-directive').name
]).directive('cardList', cardList);

function cardList() {
    return {
        restrict: 'E',
        template: require('components/card/components/card-list-directive.html'),
        scope: {
            cards: '='
        },
        controller: controllerFn,
        controllerAs: 'vm',
        bindToController: true
    };

    function controllerFn($scope) {

    }
}