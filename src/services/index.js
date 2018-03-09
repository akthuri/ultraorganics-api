const elaboraciones = require('./elaboraciones/elaboraciones.service.js');
const traslados = require('./traslados/traslados.service.js');
const productos = require('./productos/productos.service.js');
const almacenes = require('./almacenes/almacenes.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(elaboraciones);
  app.configure(traslados);
  app.configure(productos);
  app.configure(almacenes);
};
