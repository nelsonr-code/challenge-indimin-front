import CitizenService from '@Services/CitizenService.js'
import { useEditCitizen } from '@Hooks/useEditCitizen.js'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export const CitizenEdit = () => {
	const [dataCitizen, setDataCitizen] = useState({})
	const citizenId = useParams()
	const { handleChange, handleSubmit } = useEditCitizen(citizenId, dataCitizen)

	useEffect(() => {
		setDataCitizen({ ...dataCitizen, loading: true })
		const getData = async () => {
			const response = await CitizenService.getCitizen(citizenId)
			// console.log(response)

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
		<section className='edit-citizen'>
			<div className='container'>
				<div className='row pt-3'>
					<div className='col'>
						<p className='h3 fw-bold'>Edit citizen</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
							voluptates! Sint repudiandae fugiat incidunt quod facere? Minima
							iure voluptas, perspiciatis error voluptatum voluptatem amet
							asperiores quidem totam expedita illum soluta?
						</p>
					</div>
				</div>
				<div className='row align-items-center'>
					<div className='col-md-4'>
						<form>
							<div className='form-floating mb-2'>
								<input
									type='text'
									className='form-control'
									id='floatingName'
									name='name'
									placeholder='name'
									required={true}
									defaultValue={dataCitizen.citizen?.name}
									onChange={handleChange}
								/>
								<label htmlFor='floatingName'>Name</label>
							</div>
							<div className='form-floating mb-2'>
								<input
									type='text'
									className='form-control'
									id='floatingLastname'
									name='lastname'
									placeholder='lastname citizen'
									required={true}
									defaultValue={dataCitizen.citizen?.lastname}
									onChange={handleChange}
								/>
								<label htmlFor='floatingLastname'>Lastname</label>
							</div>
							<div className='form-floating mb-2'>
								<input
									type='email'
									className='form-control'
									id='email'
									name='emailCitizen'
									placeholder='Email'
									required={true}
									// value={form.lastnameCitizen}
									// onChange={handleChange}
								/>
								<label htmlFor='email'>Email</label>
							</div>
							<div className='d-grid mt-2'>
								<button
									className='btn btn-primary mb-2'
									type='submit'
									onClick={handleSubmit}
								>
									Save changes
								</button>
								<Link to={'/management/citizens/list'} className='btn btn-dark'>
									{'Cancel'}
								</Link>
							</div>
						</form>
					</div>
					<div className='col-md-6'>
						<img
							src='https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png'
							className='img-fluid contact-img'
							alt='user laughing'
						/>
					</div>
				</div>
			</div>
		</section>
	)
}
