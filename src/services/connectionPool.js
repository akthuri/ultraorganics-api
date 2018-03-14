const sql = require('mssql')
const config = require('../configuracion')

const ConnectionPool = ( function () {
	const state = {
		pool: null
	}

  const pool = new sql.ConnectionPool(config.mssql)
  pool.connect()
    .then(() => {
      console.log('Pool creado!')        
      state.pool = pool
    })
    .catch((err) => {
      console.log(err)        
    })

	return {
		getPool: function () {
			return state.pool
		}
	}
})()

module.exports = ConnectionPool