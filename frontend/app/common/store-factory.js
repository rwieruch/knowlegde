'use strict';

var EventEmitter = require('wolfy87-eventemitter');

module.exports = angular.module('kd.common.StoreFactory', [

]).service('StoreFactory', StoreFactory);

function StoreFactory() {
    return function StoreFactory() {

        var EVENTS = {
            add: 'add',
            update: 'update',
            remove: 'remove'
        };

        _.assign(this, EventEmitter.prototype);

        var itemsById = {};

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
}

