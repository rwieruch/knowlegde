module.exports = angular.module('kd.route', [
    require('components/card/CardController').name,
    require('components/deck/DeckController').name,
    require('components/course/CourseController').name
]).controller('RouteController', RouteController);

function RouteController($router) {

    $router.config([
        { path: '/', redirectTo: '/deck' },
        { path: '/deck', component: 'deck' },
        { path: '/deck/:id', component: 'deck' },
        { path: '/course', component: 'course' },
        { path: '/course/:id', component: 'course' }
    ]);

}