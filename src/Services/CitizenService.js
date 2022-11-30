import { URL_API } from '@config/endpoints.js'
import { fetchData, postData, putData, deleteData } from '@helpers/index.js'

export default class CitizenService {
	// constructor () {
	//   this.api = axios.create({
	//     baseURL: 'http://localhost:3000/api'
	//   })
	// }

	static async getAllCitizens() {
		// const { data } = await this.api.get('/citizens')
		try {
			const { data } = await fetchData(`${URL_API}/Citizen/list`)
			return data
		} catch (error) {
			console.error(error)
			return []
		}
	}

	static async getCitizen(citizen) {
		try {
			const { data } = await fetchData(
				`${URL_API}/Citizen/show/${citizen.citizenId}`
			)
			// console.log(data)

			return data
		} catch (error) {
			console.error(error)
			return []
		}
	}

	static async createCitizen(citizen) {
		try {
			const { data } = await postData(`${URL_API}/Citizen/add`, citizen)
			console.log(data)

			return data
		} catch (error) {
			console.error(error)
			return []
		}
	}

	static async updateCitizen(citizenId, citizen) {
		console.log('Citizen ID', citizenId)
		try {
			const { data } = await putData(
				`${URL_API}/Citizen/edit/${citizenId.citizenId}`,
				citizen
			)
			console.log(data)

			return data
		} catch (error) {
			console.error(error)
			return []
		}
	}

	static async deleteCitizen(citizenId) {
		console.log(citizenId)
		try {
			const { data } = await deleteData(
				`${URL_API}/Citizen/delete/${citizenId}`
			)
			console.log(data)

			return data
		} catch (error) {
			console.error(error)
			return []
		}
	}
}
