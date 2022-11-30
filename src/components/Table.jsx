import { AppContext, useAppContext } from '../Context/appContext'
import { ModalEdit } from './Panel/Modal'
import { useModal } from '../Hooks/useModal'

export const Table = () => {
	const { citizens, deleteCitizen } = useAppContext(AppContext)
	// console.log(citizens)
	const { show, dataRowCitizen, handleShow, handleClose } = useModal()

	return (
		<>
			<table className='table table-striped mt-5'>
				<thead className='bg-dark text-white'>
					<tr>
						<th scope='col'>#</th>
						<th scope='col'>Name</th>
						<th scope='col'>Lastname</th>
						<th scope='col'>Actions</th>
					</tr>
				</thead>
				<tbody>
					{citizens.map((citizen) => (
						<tr key={citizen.id}>
							<th scope='row'>{citizen.id}</th>
							<td>{citizen.nameCitizen}</td>
							<td>{citizen.lastnameCitizen}</td>
							<td>
								<div className='btn-group'>
									<button
										className='btn btn-info'
										onClick={() => handleShow(citizen)}
									>
										<i className='bx bxs-edit'></i>
									</button>
									<button
										className='btn btn-danger'
										onClick={() => deleteCitizen(citizen.id)}
									>
										<i className='bx bxs-trash-alt'></i>
									</button>
								</div>
							</td>
						</tr>
					))}
				</tbody>
			</table>
			<ModalEdit
				show={show}
				handleClose={handleClose}
				handleShow={handleShow}
				dataRowCitizen={dataRowCitizen}
			/>
		</>
	)
}
