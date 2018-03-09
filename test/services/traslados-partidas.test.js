const assert = require('assert');
const app = require('../../src/app');

describe('\'traslados-partidas\' service', () => {
  it('registered the service', () => {
    const service = app.service('traslados-partidas');

    assert.ok(service, 'Registered the service');
  });
});
