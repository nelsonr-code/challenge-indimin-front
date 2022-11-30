import CitizenService from '@Services/CitizenService'
import { useState } from 'react'
import { AppContext, useAppContext } from '../Context/appContext'

export const useAddCitizen = (initialForm) => {
	const [form, setForm] = useState(initialForm)
	const { addCitizen } = useAppContext(AppContext)

	const handleSubmit = async (e) => {
		e.preventDefault()
		console.log('Submit!', form)
		const response = await CitizenService.createCitizen(form)
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
		form,
		handleSubmit,
		handleChange,
	}
}
