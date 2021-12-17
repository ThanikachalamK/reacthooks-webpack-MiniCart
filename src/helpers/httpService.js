import axios from 'axios'
import configs from '../configs/configs'

const instance = axios.create({
	baseURL: configs.serverConfig?.baseURL ?? 'https://api.spacexdata.com/v4/',
	headers: {
		'content-type': 'application/json',
	},	
})



const getAPIData = async (method, url, requestBody) => {

	const response = await instance({
		method,
		url,
		data: requestBody,		
	})

	return response
}

export default getAPIData
