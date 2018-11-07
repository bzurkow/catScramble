import { State } from 'jumpstate';

const gameStatus = State({
	initial: null,
	setGameStatus (state, payload) {
		return payload
	},
	resetGameStatus (state, payload) {
		return null
	}
})

export default gameStatus