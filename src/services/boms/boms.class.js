const ConnectionPool = require('../connectionPool')

/* eslint-disable no-unused-vars */
class Service {
  constructor (options) {
    this.options = options || {};
  }

  async find (params) {
    const term = params.query.$search.toUpperCase()

    const consulta = `
      SELECT 
        TOP 10 
        o1.ItemCode, o1.ItemName
      FROM OITT o
      INNER JOIN OITM o1 ON o.Code = o1.ItemCode
      WHERE o.TreeType = 'P'
        AND UPPER(o1.ItemName) like '%${term}%'
      ORDER BY
        o1.ItemName    
    `

    try {
      const request = await ConnectionPool.getPool().request()
      const resultado = await request.query(consulta)

      return resultado.recordset

    } catch (err) {
      console.log(err)
      return []
    }
  }

  async get (id, params) {
    return {
      id, text: `A new message with ID: ${id}!`
    };
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
