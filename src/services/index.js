const elaboraciones = require('./elaboraciones/elaboraciones.service.js');
const traslados = require('./traslados/traslados.service.js');
const productos = require('./productos/productos.service.js');
const almacenes = require('./almacenes/almacenes.service.js');
const usuarios = require('./usuarios/usuarios.service.js');
const existencias = require('./existencias/existencias.service.js');
const boms = require('./boms/boms.service.js');

const elaboracionesSap = require('./elaboraciones-sap/elaboraciones-sap.service.js');

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(elaboraciones);
  app.configure(traslados);
  app.configure(productos);
  app.configure(almacenes);
  app.configure(usuarios);
  app.configure(existencias);
  app.configure(boms);
  app.configure(elaboracionesSap);
};
