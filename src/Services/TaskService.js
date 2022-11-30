import { URL_API } from '@config/endpoints.js'
import { fetchData, postData, putData, deleteData } from '@helpers/index.js'

export default class TaskService {
	static async getAllTasks() {
		try {
			const { data } = await fetchData(`${URL_API}/Task/list`)
			return data
		} catch (error) {
			console.error(error)
			return []
		}
	}

	static async getTask(task) {
		try {
			const { data } = await fetchData(`${URL_API}/Task/show/${task.taskId}`)
			// console.log(data)

			return data
		} catch (error) {
			console.error(error)
			return []
		}
	}

	static async createTask(task) {
		try {
			const { data } = await postData(`${URL_API}/Task/add`, task)
			console.log(data)

			return data
		} catch (error) {
			console.error(error)
			return []
		}
	}

	static async updateTask(taskId, task) {
		console.log('Task ID', taskId)
		try {
			const { data } = await putData(
				`${URL_API}/Task/edit/${taskId.taskId}`,
				task
			)
			console.log(data)

			return data
		} catch (error) {
			console.error(error)
			return []
		}
	}

	static async deleteTask(taskId) {
		console.log(taskId)
		try {
			const { data } = await deleteData(`${URL_API}/Task/delete/${taskId}`)
			console.log(data)

			return data
		} catch (error) {
			console.error(error)
			return []
		}
	}
}
