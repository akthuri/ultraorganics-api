const assert = require('assert');
const app = require('../../src/app');

describe('\'elaboraciones-partidas\' service', () => {
  it('registered the service', () => {
    const service = app.service('elaboraciones-partidas');

    assert.ok(service, 'Registered the service');
  });
});
