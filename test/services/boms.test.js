const assert = require('assert');
const app = require('../../src/app');

describe('\'boms\' service', () => {
  it('registered the service', () => {
    const service = app.service('boms');

    assert.ok(service, 'Registered the service');
  });
});
