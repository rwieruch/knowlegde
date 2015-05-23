'use strict';

angular.module('kd.card.cardItem', [
    'kd.card.CardRemoveService',
    'kd.card.CardEditService'
]).directive('cardItem', cardItem);

function cardItem(CardRemoveService, CardEditService) {
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