module.exports = {
	mssql: {
	  user: 'sa',
	  password: 'SAPB1Admin',
	  server: 'WIN-TR0HMI56UON',
	  database: 'SBOPruebaMX',
	  pool: {
	    min: 5,
	    max: 15
	  }		
	},
	urlElaboracionSAP: 'http://localhost:64975/elaboraciones.svc/crearElaboracion',
	urlSessionPool: 'http://localhost:64975/sessionpool.svc'
}