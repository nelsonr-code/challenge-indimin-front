import CitizenService from '@Services/CitizenService.js'

export const deleteCitizen = (id) => {
	return {
		handleDelete: () => {
			console.log('Delete!')
			CitizenService.deleteCitizen(id)
		},
	}
}
