module.exports = angular.module('kd.route', [

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