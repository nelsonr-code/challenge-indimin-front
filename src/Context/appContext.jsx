import { createContext, useContext, useReducer } from 'react'
import { ADD, DELETE, UPDATE } from './actions'
import { reducer } from './reducers'

export const AppContext = createContext()
const initialState = {
	citizens: [
		{
			id: '1',
			nameCitizen: 'Name',
			lastnameCitizen: 'Lastname',
		},
		{
			id: '2',
			nameCitizen: 'Name 2',
			lastnameCitizen: 'Lastname 2',
		},
	],
}

// eslint-disable-next-line react/prop-types
export const AppProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState)

	const addCitizen = (form) =>
		dispatch({
			type: ADD,
			payload: form,
		})
	const updateCitizen = (form) =>
		dispatch({
			type: UPDATE,
			payload: form,
		})
	const deleteCitizen = (id) =>
		dispatch({
			type: DELETE,
			payload: id,
		})

	// const values = ''
	return (
		<AppContext.Provider
			value={{
				citizens: state.citizens,
				addCitizen,
				updateCitizen,
				deleteCitizen,
				dispatch,
			}}
		>
			{children}
		</AppContext.Provider>
	)
}

export const useAppContext = () => {
	return useContext(AppContext)
}
