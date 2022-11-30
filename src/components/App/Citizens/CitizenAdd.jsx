import { useAddCitizen } from '@Hooks/useAddCitizen.js'
import { Link } from 'react-router-dom'

const initialForm = {
	name: '',
	lastName: '',
}

export const CitizenAdd = () => {
	const { form, handleChange, handleSubmit } = useAddCitizen(initialForm)

	return (
		<section className='add-citizen'>
			<div className='container'>
				<div className='row pt-3'>
					<div className='col'>
						<p className='h3 fw-bold'>Add citizen</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
							voluptates! Sint repudiandae fugiat incidunt quod facere? Minima
							iure voluptas, perspiciatis error voluptatum voluptatem amet
							asperiores quidem totam expedita illum soluta?
						</p>
					</div>
				</div>
				<div className='row'>
					<div className='col-md-4'>
						<form>
							<div className='form-floating mb-2'>
								<input
									type='text'
									className='form-control'
									id='name'
									name='name'
									placeholder='name'
									required={true}
									value={form.name}
									onChange={handleChange}
								/>
								<label htmlFor='name'>Name</label>
							</div>
							<div className='form-floating mb-2'>
								<input
									type='text'
									className='form-control'
									id='Lastname'
									name='lastName'
									placeholder='lastname citizen'
									required={true}
									value={form.lastName}
									onChange={handleChange}
								/>
								<label htmlFor='Lastname'>Lastname</label>
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
									Add citizen <i className='bx bx-user'></i>
								</button>
								<Link to={'/management/citizens/list'} className='btn btn-dark'>
									{'Cancel'}
								</Link>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	)
}
