const assert = require('assert');
const feathers = require('@feathersjs/feathers');
const crearElaboracion = require('../../src/hooks/crear-elaboracion');

describe('\'crear-elaboracion\' hook', () => {
  let app;

  beforeEach(() => {
    app = feathers();

    app.use('/dummy', {
      async get(id) {
        return { id };
      }
    });

    app.service('dummy').hooks({
      before: crearElaboracion()
    });
  });

  it('runs the hook', async () => {
    const result = await app.service('dummy').get('test');
    
    assert.deepEqual(result, { id: 'test' });
  });
});
