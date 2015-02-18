'use strict';

// Service for the spec config.
// We keep this separate so that changes are kept even if the spec changes.
angular.module('vegalite-ui')
  .factory('Config', function(vl) {
    var Config = {};

    Config.schema = vl.schema.schema.properties.cfg;
    Config.config = vl.schema.util.instantiate(Config.schema);

    Config.config.singleWidth = 500;
    Config.config.singleHeight = 500;
    Config.config.largeBandMaxCardinality = 20;

    Config.updateDataset = function(dataset) {
      Config.config.dataUrl = dataset.url;
      Config.config.vegaServerTable = dataset.table;
    };

    return Config;
  });
