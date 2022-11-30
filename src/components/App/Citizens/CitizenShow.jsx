import { Spinner } from '@components/Spinner'
import CitizenService from '@Services/CitizenService'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export const CitizenShow = () => {
	const [dataCitizen, setDataCitizen] = useState({})
	const citizenId = useParams()

	useEffect(() => {
		setDataCitizen({ ...dataCitizen, loading: true })
		const getData = async () => {
			const response = await CitizenService.getCitizen(citizenId)
			console.log(response)
			setDataCitizen({
				...dataCitizen,
				citizen: response,
				loading: false,
			})
		}

		getData()

		return () => {}
	}, [citizenId])

	return (
		<>
			<section className='view-citizen-intro p-3'>
				<div className='container'>
					<div className='row'>
						<div className='col'>
							<p className='h3 fw-bold'>View citizen</p>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
								voluptates! Sint repudiandae fugiat incidunt quod facere? Minima
								iure voluptas, perspiciatis error voluptatum voluptatem amet
								asperiores quidem totam expedita illum soluta?
							</p>
						</div>
					</div>
				</div>
			</section>
			{dataCitizen.loading ? (
				<Spinner />
			) : (
				Object.keys(dataCitizen).length > 0 && (
					<section className='view-citizen p-3'>
						<div className='container'>
							<div className='row align-items-center'>
								<div className='col-md-4'>
									<img
										src='https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png'
										className='img-fluid contact-img'
										alt='user laughing'
									/>
								</div>
								<div className='col-md-8'>
									<ul className='list-group'>
										<li className='list-group-item list-group-item-action'>
											{'Name: '}{' '}
											<span className='fw-bold'>
												{dataCitizen.citizen.name}
											</span>
										</li>
										<li className='list-group-item list-group-item-action'>
											{'Lastname: '}{' '}
											<span className='fw-bold'>
												{dataCitizen.citizen.lastname}
											</span>
										</li>
										<li className='list-group-item list-group-item-action'>
											{'Email: '} <span className='fw-bold'>Email</span>
										</li>
									</ul>
								</div>
							</div>
							<div className='row mt-3'>
								<div className='col'>
									<Link
										to='/management/citizens/list'
										className='btn btn-outline-primary'
									>
										Back
									</Link>
								</div>
							</div>
						</div>
					</section>
				)
			)}
		</>
	)
}
