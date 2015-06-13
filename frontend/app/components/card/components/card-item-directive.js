'use strict';

require('./card-item-directive.less');

module.exports = angular.module('kd.card.cardItem', [
    require('components/card/services/card-remove-service').name,
    require('components/card/services/card-edit-service').name
]).directive('cardItem', cardItem);

function cardItem(CardRemoveService, CardEditService) {
    return {
        restrict: 'E',
        template: require('components/card/components/card-item-directive.html'),
        scope: {
            card: '='
        },
        controller: controllerFn,
        controllerAs: 'vm',
        bindToController: true
    };

    function controllerFn($scope) {

        var vm = this;

        vm.removeCard = removeCard;
        vm.toggleEdit = toggleEdit;
        vm.saveEdit = saveEdit;
        vm.cancelEdit = cancelEdit;

        function removeCard() {
            CardRemoveService.removeCard(vm.card);
        }

        function toggleEdit() {
            vm.isEdit = !vm.isEdit;
        }

        function cancelEdit() {
            vm.isEdit = false;
        }

        function saveEdit() {
            CardEditService.editCard(vm.card);
            cancelEdit();
        }

    }
}