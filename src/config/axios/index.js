import axios from 'axios'
import { URL_API } from '@config/endpoints.js'

export const webApi = axios.create({
	// baseURL: import.meta.env.ENDPOINT_TEST,
	baseURL: URL_API,
	headers: {
		'Content-Type': 'application/json',
	},
})
