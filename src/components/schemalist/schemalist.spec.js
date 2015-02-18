'use strict';

describe('Directive: schemaList', function() {

  // load the directive's module
  beforeEach(module('vegalite-ui'));

  var element,
    scope;

  beforeEach(module('vegalite-ui', function($provide) {
    var mockDataset = {
      dataschema: ['foo', 'bar', 'baz'],
      stats: {
        foo: {},
        bar: {},
        baz: {}
      }
    };
    $provide.value('Dataset', mockDataset);
  }));

  beforeEach(inject(function($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should have field', inject(function($compile) {
    element = angular.element('<schema-list></schema-list>');
    element = $compile(element)(scope);
    scope.$digest();

    expect(element.find('.field-info').length).toBe(3);
  }));
});
