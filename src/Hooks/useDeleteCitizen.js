import CitizenService from '@Services/CitizenService.js'

export const useDeleteCitizen = () => {
	const handleDelete = async (citizenId) => {
		console.log('Delete citizen!', citizenId)
		const response = await CitizenService.deleteCitizen(citizenId)
		console.log(response)
	}
	return {
		handleDelete,
	}
}
