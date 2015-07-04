module.exports = angular.module('kd.course.courseDirective', [

]).directive('course', course);

function course() {
    return {
        restrict: 'E',
        template: '<p>new tpl</p>',
        scope: {
            courseId: '='
        },
        controller: controllerFn,
        controllerAs: 'vm',
        bindToController: true
    };

    function controllerFn($scope) {
        var vm = this;

        $scope.$watch('vm.courseId', init);

        function init() {
            console.log('courseIde', vm.courseId);
        }
    }
}