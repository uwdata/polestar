'use strict';

angular.module('vegalite-ui')
  .directive('datasetSelector', function(Dataset, Config, Spec, Logger) {
    return {
      templateUrl: 'components/datasetselector/datasetselector.html',
      restrict: 'E',
      replace: true,
      scope: {},
      controller: function($scope) {
        $scope.Dataset = Dataset;

        $scope.datasetChanged = function() {
          var dataset = Dataset.dataset;

          Logger.logInteraction("Dataset changed to: " + dataset.name);

          Dataset.update(dataset).then(function() {
            Config.updateDataset(dataset);
            Spec.reset();
          });
        };
      }
    };
  });
