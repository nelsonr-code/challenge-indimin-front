import { useState } from 'react'

export const useModal = () => {
	// console.log('useModal hook')
	const [show, setShow] = useState(false)
	const [dataRowCitizen, setDataRowCitizen] = useState([])

	const handleClose = () => setShow(false)

	const handleShow = (citizen) => {
		console.log(citizen)
		setShow(true)
		setDataRowCitizen(citizen)
	}

	return {
		show,
		dataRowCitizen,
		handleShow,
		handleClose,
	}
}
