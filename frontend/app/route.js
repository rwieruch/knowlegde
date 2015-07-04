module.exports = angular.module('kd.route', [
    require('components/card/CardController').name,
    require('components/deck/DeckController').name,
    require('components/course/CourseController').name,
    require('components/course-overview/CourseOverviewController').name
]).controller('RouteController', RouteController)
.config(['$componentLoaderProvider', getComoponentLoaderConfiguration]);

function RouteController($router) {

    $router.config([
        { path: '/', redirectTo: '/deck' },
        { path: '/deck', component: 'deck' },
        { path: '/deck/:id', component: 'deck' },
        { path: '/course', component: 'course-overview' },
        { path: '/course/:id', component: 'coure' }
    ]);

}

function getComoponentLoaderConfiguration ($componentLoaderProvider) {
    $componentLoaderProvider.setTemplateMapping(function (name) {
        return 'components/' + name + '/' + name + '.html';
    });
    $componentLoaderProvider.setCtrlNameMapping(function (name) {
        name = name.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); });
        return name[0].toUpperCase() + name.substr(1) + 'Controller';
    });
}