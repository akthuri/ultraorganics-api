// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
const moment = require('moment')

// eslint-disable-next-line no-unused-vars
module.exports = function (options = {}) {
  return async context => {

    context.data.lastUpdated = moment().format()
    context.data.estatus = 'Enviado'

    console.log(JSON.stringify(context.data))

    return context;
  };
};
