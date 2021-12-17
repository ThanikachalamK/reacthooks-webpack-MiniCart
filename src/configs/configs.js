const isProd = String(process.env.NODE_ENV).toLowerCase() === 'production'

function getServerConfiguration() {
	if(isProd) {
		return {
			baseURL: 'https://api.spacexdata.com/v4/', // Prod Service Domain URL
		}
	}
	
	return {
		baseURL: 'https://api.spacexdata.com/v4/', // Dev Service Domain URL
	}
	

}

const serverConfig = getServerConfiguration()

export default {
	serverConfig
}