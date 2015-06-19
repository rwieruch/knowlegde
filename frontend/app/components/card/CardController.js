'use strict';

require('./card.less');

module.exports = angular.module('kd.card.CardController', [
    require('feature/card/components/card-create-directive').name,
    require('feature/card/components/card-list-directive').name,
    require('feature/deck/components/deck-create-directive').name,
    require('feature/deck/components/deck-list-directive').name
]).controller('CardController', CardController);

function CardController($scope) {

}