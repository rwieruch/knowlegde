require('./progress-bar-directive.less');

module.exports = angular.module('kd.common.progressBarDirective', [

]).directive('progressBar', progressBar);

function progressBar($document) {
    return {
        restrict: 'E',
        template: require('./progress-bar-directive.html'),
        scope: {
            courseProgress: '='
        },
        controller: controllerFn,
        controllerAs: 'vm',
        bindToController: true
    };

    function controllerFn($scope) {

        var vm = this;

        $scope.$watchCollection('vm.courseProgress', init);

        function init() {
            console.log(vm.courseProgress);
        }
    }
}