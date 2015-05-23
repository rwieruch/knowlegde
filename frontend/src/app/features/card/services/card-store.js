'use strict';

angular.module('kd.card.CardStore', [

]).service('CardStore', CardStore);

function CardStore() {

    var EVENTS = {
        add: 'add',
        update: 'update',
        remove: 'remove'
    }

    // TODO init empty
    var itemsById = {
        1: { id: "1", question: "What is functional programming?", answer: "Foo" },
        2: { id: "2", question: "What is a closure?", answer: "Bar" }
    };

    this.add = add;
    this.update = update;
    this.remove = remove;
    this.getAll = getAll;

    var self = this;

    function add(item) {
        console.log('add', item);
        addOrUpdateItem(item);
    }

    function update(item) {
        console.log('update', item);
        addOrUpdateItem(item);
    }

    function remove(item) {
        console.log('delete', item);
        delete itemsById[item.id];
        emit(EVENTS.remove, item);
    }

    function getAll() {
        return Object.keys(itemsById).map(function (key) {
            return itemsById[key];
        });
    }

    function addOrUpdateItem(item) {
        var storeEvent = (itemsById[item.id]) ? EVENTS.update : EVENTS.add;
        itemsById[item.id] = item;
        emit(storeEvent, item);
    }

    function emit(type, data) {
        var storeEvent = new StoreEvent(type, data);
        self.emit(type, storeEvent);
    }

    function StoreEvent(type, data) {
        this.type = type;
        this.data = data;
    }
}

CardStore.prototype = Object.create(new EventEmitter());