const assert = require('assert');
const app = require('../../src/app');

describe('\'existencias\' service', () => {
  it('registered the service', () => {
    const service = app.service('existencias');

    assert.ok(service, 'Registered the service');
  });
});
