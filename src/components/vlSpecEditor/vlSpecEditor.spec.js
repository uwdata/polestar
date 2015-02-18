'use strict';

describe('Directive: vlSpecEditor', function() {
  // load the directive's module
  beforeEach(module('vegalite-ui'));

  beforeEach(module('vegalite-ui', function($provide) {
    $provide.constant('vl', vl); // vl is loaded by karma

    // mock directive (trodrigues's answer in http://stackoverflow.com/questions/17533052)
    $provide.factory('uiZeroclipDirective', function() {return {};});
  }));



  var element,
    scope;

  beforeEach(module('vegalite-ui', function($provide) {
    var mock = {
      vlSpec: {},
      shorthand: 'point.'
    };
    $provide.value('Spec', mock);
  }));

  beforeEach(inject(function($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should show source code', inject(function($compile) {
    element = angular.element('<vl-spec-editor></vl-spec-editor>');
    element = $compile(element)(scope);
    scope.$digest();

    expect(element.find('.vlspec').val()).toBe('{}');
    expect(element.find('.shorthand').val()).toBe('point.');
  }));
});
