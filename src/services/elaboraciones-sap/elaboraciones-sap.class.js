const axios = require('axios')
const config = require('../../configuracion')

/* eslint-disable no-unused-vars */
class Service {
  constructor (options) {
    this.options = options || {};
  }

  setup (app) {
    this.app = app
  }

  async find (params) {
    return [];
  }

  async get (id, params) {
    return {
      id, text: `A new message with ID: ${id}!`
    };
  }

  async create (data, params) {
    console.log(data.id)

    if (Array.isArray(data)) {
      return await Promise.all(data.map(current => this.create(current)));
    }

    const elaboracionesService = this.app.service('elaboraciones')
    try {
      const documento = this.prepararDocumento(data)
      const response = await axios.post(config.urlElaboracionSAP, documento)

      if (response.status === 200) {
        const resultVO = response.data.d

        if (resultVO.Success) {
          await elaboracionesService.patch(data.id, {
            estatus: 'Generado',
            folio: resultVO.DocNum
          })

        } else {
          await elaboracionesService.patch(data.id, {
            estatus: 'Error',
            error: resultVO.Mensaje
          })
        }

        return resultVO
      } else {
        await elaboracionesService.patch(data.id, {
          estatus: 'Error',
          error: response.statusText
        })

        return {
          Success: false,
          Mensaje: response.statusText
        }
      }
    } catch (err) {
      await elaboracionesService.patch(data.id, {estatus: 'Error', error: err.toString()})

      return {
        Success: false,
        Mensaje: err.toString()
      }
    }
  } // create

  prepararDocumento (elaboracion) {
    const partidas = elaboracion.partidas.filter((partida) => {
      return partida.cantidad > 0
    }).map((partida) => {
      return {
        itemCode: partida.itemCode,
        itemName: partida.itemName,
        cantidad: partida.cantidad
      }
    })

    const documento = {
      elaboracion: {
        whsCode: elaboracion.whsCode,
        partidas: partidas
      }
    }

    return documento
  }

  async update (id, data, params) {
    return data;
  }

  async patch (id, data, params) {
    return data;
  }

  async remove (id, params) {
    return { id };
  }
}

module.exports = function (options) {
  return new Service(options);
};

module.exports.Service = Service;
