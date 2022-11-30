import { useState } from 'react'
import { AppContext, useAppContext } from '../Context/appContext'

export const useFormEdit = () => {
	const [form, setForm] = useState()
	const { updateCitizen } = useAppContext(AppContext)

	const handleSubmit = (e) => {
		e.preventDefault()
		console.log('Submit from modal!', form)
		updateCitizen({
			form,
		})
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
