require('./progress-bar-directive.less');

module.exports = angular.module('kd.common.progressBarDirective', [

]).directive('progressBar', progressBar);

function progressBar($document) {
    return {
        restrict: 'E',
        template: require('./progress-bar-directive.html'),
        scope: {
            value: '=',
            maxValue: '='
        },
        controller: controllerFn,
        controllerAs: 'vm',
        bindToController: true
    };

    function controllerFn($scope) {

        var vm = this;

        $scope.$watch('vm.value', init);
        $scope.$watch('vm.maxValue', init);

        function init() {
            var progressDone = vm.value * 100 / vm.maxValue;
            var progressLeft = 100 - progressDone;

            angular.element($document[0].querySelector('.value')).css('width', progressDone + '%');
            angular.element($document[0].querySelector('.max-value')).css('width', progressLeft + '%');
        }
    }
}