const assert = require('assert');
const app = require('../../src/app');

describe('\'elaboraciones\' service', () => {
  it('registered the service', () => {
    const service = app.service('elaboraciones');

    assert.ok(service, 'Registered the service');
  });
});
