'use strict';

describe('Directive: lyraExport', function () {

  // load the directive's module
  beforeEach(module('vleApp'));

  beforeEach(module('vleApp', function ($provide) {
    var mock = {
      vgSpec: {}
    };
    $provide.value('Spec', mock);
  }));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<lyra-export></lyra-export>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('Export to lyra');
  }));
});
