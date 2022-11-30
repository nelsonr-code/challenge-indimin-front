import CitizenService from '@Services/CitizenService.js'
import { useState } from 'react'

export const useEditCitizen = (citizenId, initialForm) => {
	const [form, setForm] = useState(initialForm)

	const handleSubmit = async (e) => {
		e.preventDefault()
		console.log('ID', citizenId)
		console.log('Submit!', form)
		const response = await CitizenService.updateCitizen(citizenId, form)
		console.log(response)
		// addCitizen({
		// 	form,
		// })
		// setForm(initialForm)
	}

	const handleChange = (e) => {
		e.preventDefault()
		console.group('Working handle change!')

		const { name, value } = e.target
		console.log(name, value)
		setForm({ ...form, [name]: value })

		console.groupEnd()
	}

	return {
		handleSubmit,
		handleChange,
	}
}
