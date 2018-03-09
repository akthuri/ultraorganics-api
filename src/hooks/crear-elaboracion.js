// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
const moment = require('moment')

// eslint-disable-next-line no-unused-vars
module.exports = function (options = {}) {
  return async context => {

    const elaboracion = context.data

    context.data = {
      folio: null,
      dateCreated: moment().format(),
      lastUpdated: null,
      estatus: 'Enviado',
      partidas: elaboracion.partidas
    }

    return context;
  };
};
