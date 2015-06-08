'use strict';

require('./card-create-directive.less');

module.exports = angular.module('kd.card.cardCreate', [
    require('features/card/services/card-create-service').name
]).directive('cardCreate', cardCreate);

function cardCreate(CardCreateService) {
    return {
        restrict: 'E',
        template: require('features/card/components/card-create-directive.html'),
        scope: { },
        controller: controllerFn,
        controllerAs: 'vm',
        bindToController: true
    };

    function controllerFn($scope) {

        var vm = this;

        vm.createCard = createCard;

        function createCard() {
            CardCreateService.createCard(vm.question, vm.answer);
            clean();
        }

        function clean() {
            vm.question = '';
            vm.answer = '';
        }
    }
}