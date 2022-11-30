import { webApi } from '@config/axios/index.js'

// const API_URL = process.env.REACT_APP_API_URL

export const fetchData = async (urlApi) => {
	const response = await webApi.get(urlApi)
	const data = await response.data

	return data
}

export const postData = async (urlApi, data) => {
	const response = await webApi.post(urlApi, data)
	const dataResponse = await response.data

	return dataResponse
}

export const putData = async (urlApi, data) => {
	const response = await webApi.put(urlApi, data)
	const dataResponse = await response.data

	return dataResponse
}

export const deleteData = async (urlApi, data) => {
	const response = await webApi.delete(urlApi, data)
	const dataResponse = await response.data

	return dataResponse
}
