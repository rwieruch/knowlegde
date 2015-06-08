'use strict';

require('./card-page-controller.less');

module.exports = angular.module('kd.card.CardPageController', [
    require('features/card/components/card-create-directive').name,
    require('features/card/components/card-list-directive').name,
    require('features/deck/components/deck-create-directive').name,
    require('features/deck/components/deck-list-directive').name
]).controller('CardPageController', CardPageController);

function CardPageController($scope) {

}