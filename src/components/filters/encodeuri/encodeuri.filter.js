'use strict';

/**
 * @ngdoc filter
 * @name vegalite-ui.filter:encodeUri
 * @function
 * @description
 * # encodeUri
 * Filter in the vegalite-ui.
 */
angular.module('vegalite-ui')
  .filter('encodeURI', function () {
    return function (input) {
      return window.encodeURI(input);
    };
  });