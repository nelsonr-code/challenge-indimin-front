import { Spinner } from '@components/Spinner'
import TaskService from '@Services/TaskService'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const TaskList = () => {
	const [dataTasks, setDataTasks] = useState({
		citizens: [],
		loading: false,
		error: null,
	})

	useEffect(() => {
		setDataTasks({ ...dataTasks, loading: true })
		const getData = async () => {
			const response = await TaskService.getAllTasks()
			console.log(response)
			setDataTasks({
				...dataTasks,
				tasks: response,
				loading: false,
			})
		}

		getData()

		return () => {}
	}, [])

	return (
		<>
			<section className='contact-search p-3'>
				<div className='container'>
					<div className='grid'>
						<div className='row'>
							<div className='col'>
								<p className=''>
									<Link to={'/management/tasks/add'}>
										<button className='btn btn-primary'>Add task</button>
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
			{dataTasks.loading ? (
				<Spinner />
			) : (
				<section className='task-list'>
					<div className='container'>
						<div className='row'>
							<div className='col-md-6'>
								<div className='card'>
									<div className='card-body'>
										<div className='row align-items-center'>
											<div className='col-md-11'>
												<ul className='list-group'>
													<li className='list-group-item list-group-item-action'>
														{'Task: '} <span className='fw-bold'>Task</span>
													</li>
													<li className='list-group-item list-group-item-action'>
														{'Description: '}{' '}
														<span className='fw-bold'>Description</span>
													</li>
												</ul>
											</div>
											<div className='col-md-1'>
												<Link
													className='btn btn-success mb-1'
													to={'/management/tasks/show/:taskId'}
												>
													<i className='bx bxs-show'></i>
												</Link>
												<Link
													className='btn btn-warning mb-1'
													to={'/management/tasks/edit/:taskId'}
												>
													<i className='bx bx-edit'></i>
												</Link>
												<button className='btn btn-danger'>
													<i className='bx bx-trash'></i>
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			)}
		</>
	)
}
