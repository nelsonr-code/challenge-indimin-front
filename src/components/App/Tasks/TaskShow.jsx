import { Link } from 'react-router-dom'

export const TaskShow = () => {
	return (
		<>
			<section className='view-task-intro p-3'>
				<div className='container'>
					<div className='row'>
						<div className='col'>
							<p className='h3 fw-bold'>View task</p>
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
			<section className='view-citizen p-3'>
				<div className='container'>
					<div className='row align-items-center'>
						<div className='col-md-6'>
							<ul className='list-group'>
								<li className='list-group-item list-group-item-action'>
									{'Task: '} <span className='fw-bold'>Task</span>
								</li>
								<li className='list-group-item list-group-item-action'>
									{'Description: '} <span className='fw-bold'>Description</span>
								</li>
							</ul>
						</div>
					</div>
					<div className='row mt-3'>
						<div className='col'>
							<Link
								to='/management/tasks/list'
								className='btn btn-outline-primary'
							>
								Back
							</Link>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
