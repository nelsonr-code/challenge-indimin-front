import { Link } from 'react-router-dom'

export const TaskAdd = () => {
	return (
		<section className='add-tarea'>
			<div className='container'>
				<div className='row pt-3'>
					<div className='col'>
						<p className='h3 fw-bold'>Add tarea</p>
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
									id='taskName'
									name='name'
									placeholder='name task'
									required={true}
									// value={form.nameCitizen}
									// onChange={handleChange}
								/>
								<label htmlFor='taskName'>Task name</label>
							</div>
							<div className='form-floating mb-2'>
								<textarea
									type='text'
									className='form-control'
									id='taskDescription'
									name='description'
									placeholder='description task'
									required={true}
									// value={form.lastnameCitizen}
									// onChange={handleChange}
								/>
								<label htmlFor='taskDescription'>Task description</label>
							</div>
							<div className='d-grid mt-2'>
								<button className='btn btn-primary mb-2' type='submit'>
									Add task
								</button>
								<Link to={'/management/tasks/list'} className='btn btn-dark'>
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
