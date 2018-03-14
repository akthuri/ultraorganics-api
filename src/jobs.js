const axios = require('axios')
const config = require('./configuracion')

const jobs = (function () {

	// Refrescar sesiones SAP
	setInterval(function () {
		axios.get(config.urlSessionPool + '/refresh')
	}, 300000)

	console.log('Cron iniciado')

})()

module.exports = jobs