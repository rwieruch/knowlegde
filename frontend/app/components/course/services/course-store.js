module.exports = angular.module('kd.course.CourseStore', [
    require('components/common/store-factory').name
]).service('CourseStore', CourseStore);

function CourseStore(StoreFactory) {
    _.assign(this, new StoreFactory());

    // TODO init empty
    this.add({ id: "6", deckId: "1", strength: 3 });
    this.add({ id: "7", deckId: "2", strength: 4 });
}