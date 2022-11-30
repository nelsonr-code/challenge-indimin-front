import { ADD, UPDATE, DELETE } from './actions'

export const reducer = (state, action) => {
	switch (action.type) {
		case ADD: {
			console.log('ADD', action.payload)
			return {
				...state,
				citizens: [...state.citizens, action.payload.form],
			}
		}
		case UPDATE: {
			console.log('UPDATE', action.payload.form)
			return {
				...state,
				citizens: state.citizens.map((citizen) => {
					if (citizen.id === action.payload.form.id) {
						return action.payload
					}
					return citizen
				}),
			}
		}

		case DELETE: {
			console.log('DELETE', action.payload)
			return {
				...state,
				citizens: state.citizens.filter(
					(citizen) => citizen.id !== action.payload
				),
			}
		}
		default:
			return state
	}
}
