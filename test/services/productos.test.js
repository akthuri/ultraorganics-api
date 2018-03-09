const assert = require('assert');
const app = require('../../src/app');

describe('\'productos\' service', () => {
  it('registered the service', () => {
    const service = app.service('productos');

    assert.ok(service, 'Registered the service');
  });
});
