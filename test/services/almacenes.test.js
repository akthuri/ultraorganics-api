const assert = require('assert');
const app = require('../../src/app');

describe('\'almacenes\' service', () => {
  it('registered the service', () => {
    const service = app.service('almacenes');

    assert.ok(service, 'Registered the service');
  });
});
