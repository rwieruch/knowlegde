'use strict';

angular.module('kd.card.cardItem', [

]).directive('cardItem', cardItem);

function cardItem() {
    return {
        restrict: 'E',
        templateUrl: 'app/features/card/components/card-item-directive.html',
        scope: {
            card: '='
        },
        controller: controllerFn,
        controllerAs: 'vm',
        bindToController: true
    };

    function controllerFn($scope) {

        var vm = this;

    }
}