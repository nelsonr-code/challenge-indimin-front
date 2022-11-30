import '@styles/App.css'
import Header from './components/Navbar/index'
import { Route, Routes, Navigate } from 'react-router-dom'
import { CitizenList } from './components/App/Citizens/CitizenList'
import { CitizenAdd } from './components/App/Citizens/CitizenAdd'
import { CitizenEdit } from './components/App/Citizens/CitizenEdit'
import { CitizenShow } from './components/App/Citizens/CitizenShow'
import { TaskList } from './components/App/Tasks/TaskList'
import { TaskAdd } from './components/App/Tasks/TaskAdd'
import { TaskEdit } from './components/App/Tasks/TaskEdit'
import { TaskShow } from './components/App/Tasks/TaskShow'
// import { Navbar } from './components/Navbar/Navbar'

const App = () => {
	return (
		<>
			<Header />
			{/* <Navbar /> */}
			<div className='container'>
				<Routes>
					{/* Routes for citizens */}
					<Route
						path='/'
						element={<Navigate to={'/management/citizens/list'} />}
					/>
					<Route path='/management/citizens/list' element={<CitizenList />} />
					<Route path='/management/citizens/add' element={<CitizenAdd />} />
					<Route
						path='/management/citizens/edit/:citizenId'
						element={<CitizenEdit />}
					/>
					<Route
						path='/management/citizens/show/:citizenId'
						element={<CitizenShow />}
					/>
					{/* Routes for tasks */}
					<Route path='/management/tasks/list' element={<TaskList />} />
					<Route path='/management/tasks/add' element={<TaskAdd />} />
					<Route path='/management/tasks/edit/:taskId' element={<TaskEdit />} />
					<Route path='/management/tasks/show/:taskId' element={<TaskShow />} />
				</Routes>
			</div>
		</>
	)
}

export default App
