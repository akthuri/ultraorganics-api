const assert = require('assert');
const app = require('../../src/app');

describe('\'traslados\' service', () => {
  it('registered the service', () => {
    const service = app.service('traslados');

    assert.ok(service, 'Registered the service');
  });
});
