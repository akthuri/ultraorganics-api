const assert = require('assert');
const app = require('../../src/app');

describe('\'elaboraciones-sap\' service', () => {
  it('registered the service', () => {
    const service = app.service('elaboraciones-sap');

    assert.ok(service, 'Registered the service');
  });
});
