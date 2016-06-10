'use strict';

describe('Service: utilsService', function () {

  // load the service's module
  beforeEach(module('cardangularApp'));

  // instantiate service
  var utilsService;
  beforeEach(inject(function (_utilsService_) {
    utilsService = _utilsService_;
  }));

  it('should do something', function () {
    expect(!!utilsService).toBe(true);
  });

});
