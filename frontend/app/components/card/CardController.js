'use strict';

require('./card.less');

module.exports = angular.module('kd.card.CardController', [
    require('components/card/components/card-create-directive').name,
    require('components/card/components/card-list-directive').name,
    require('components/deck/components/deck-create-directive').name,
    require('components/deck/components/deck-list-directive').name
]).controller('CardController', CardController);

function CardController($scope) {

}