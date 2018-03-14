const ConnectionPool = require('../connectionPool')

/* eslint-disable no-unused-vars */
class Service {
  constructor (options) {
    this.options = options || {};
  }

  async find (params) {
    const code = params.query.code
    const cantidad = params.query.cantidad
    const whsCode = params.query.whsCode
    const consulta = `
            select
                t1."Code",  o."ItemName",
                t1."Quantity" / tt."Qauntity" "Cantidad", 
                ot."OnHand" "Existencia"
            from itt1 t1
            inner join oitt tt on tt."Code" = t1."Father"
            inner join oitw ot on t1."Code" = ot."ItemCode"
            inner join oitm o on ot."ItemCode" = o."ItemCode"
            where
                t1."Father" = '${code}'
                AND ot."WhsCode" = '${whsCode}'
    `

    try {
      const request = ConnectionPool.getPool().request()
      const resultado = await request.query(consulta)

      const faltantes = []
      resultado.recordset.forEach(function (componente) {
        const cantidadRequerida = componente.Cantidad * cantidad
        if (cantidadRequerida > componente.Existencia) {
          faltantes.push({
            ItemCode: componente.Code,
            ItemName: componente.ItemName,
            CantidadRequerida: cantidadRequerida,
            Existencia: componente.Existencia
          })
        }
      })

      return faltantes
    } catch (err) {
      console.log(err) // TODO: manejar error
      return [];  
    }
    
  }

  async get (id, params) {
    const consulta = `
      select OnHand
      from OITW
      where WhsCode = '01'
        AND ItemCode = '${id}'
    `

    try {
      const request = await ConnectionPool.getPool().request()
      const resultado = await request.query(consulta)
      
      return {
        id: id,
        existencia: resultado.recordset[0].OnHand
      }        
    } catch (err) {
        console.log(err)
        return { id: id, existencia: 0 }
    }
  }

  async create (data, params) {
    if (Array.isArray(data)) {
      return await Promise.all(data.map(current => this.create(current)));
    }

    return data;
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
