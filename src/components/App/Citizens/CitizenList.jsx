import { Spinner } from '@components/Spinner'
import CitizenService from '@Services/CitizenService.js'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export const CitizenList = () => {
	const [dataCitizens, setDataCitizens] = useState({
		citizens: [],
		loading: false,
		error: null,
	})

	useEffect(() => {
		setDataCitizens({ ...dataCitizens, loading: true })
		const getData = async () => {
			const response = await CitizenService.getAllCitizens()
			console.log(response)
			setDataCitizens({
				...dataCitizens,
				citizens: response,
				loading: false,
			})
		}

		getData()

		return () => {}
	}, [])

	const handleDelete = async (citizenId) => {
		const response = await CitizenService.deleteCitizen(citizenId)
		console.log(response)
	}

	return (
		<>
			<section className='contact-search p-3'>
				<div className='container'>
					<div className='grid'>
						<div className='row'>
							<div className='col'>
								<p className=''>
									<Link to={'/management/citizens/add'}>
										<button className='btn btn-primary'>
											Add Citizen
											<i className='bx bx-user ms-2'></i>
										</button>
									</Link>
								</p>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
							</div>
						</div>

						<div className='row'>
							<div className='col-md-6'>
								<form className='row'>
									<div className='col'>
										<div className='mb-2'>
											<input
												type='text'
												className='form-control'
												placeholder='Search citizen'
											/>
										</div>
									</div>
									<div className='col'>
										<div className='mb-2'>
											<input
												type='submit'
												className='btn btn-outline-dark'
												value='Search'
											/>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>
			{dataCitizens.loading ? (
				<Spinner />
			) : (
				<section className='contact-list'>
					<div className='container'>
						<div className='row'>
							{dataCitizens.citizens.length > 0 &&
								dataCitizens.citizens.map((citizen) => {
									return (
										<div className='col-md-6' key={citizen.id}>
											<div className='card'>
												<div className='card-body'>
													<div className='row align-items-center'>
														<div className='col-md-4'>
															<img
																src='https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png'
																className='img-fluid contact-img'
																alt='user laughing'
															/>
														</div>
														<div className='col-md-7'>
															<ul className='list-group'>
																<li className='list-group-item list-group-item-action'>
																	{'Name: '}{' '}
																	<span className='fw-bold'>
																		{citizen.name}
																	</span>
																</li>
																<li className='list-group-item list-group-item-action'>
																	{'Lastname: '}{' '}
																	<span className='fw-bold'>
																		{citizen.lastname}
																	</span>
																</li>
																<li className='list-group-item list-group-item-action'>
																	{'Email: '}{' '}
																	<span className='fw-bold'>Email</span>
																</li>
															</ul>
														</div>
														<div className='col-md-1'>
															<Link
																className='btn btn-success mb-1'
																to={`/management/citizens/show/${citizen.id}`}
															>
																<i className='bx bxs-show'></i>
															</Link>
															<Link
																className='btn btn-warning mb-1'
																to={`/management/citizens/edit/${citizen.id}`}
															>
																<i className='bx bx-edit'></i>
															</Link>
															<button
																className='btn btn-danger'
																onClick={() => {
																	console.log('delete')
																	handleDelete(citizen.id)
																}}
															>
																<i className='bx bx-trash'></i>
															</button>
														</div>
													</div>
												</div>
											</div>
										</div>
									)
								})}
						</div>
					</div>
				</section>
			)}
		</>
	)
}
