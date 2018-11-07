import { State } from 'jumpstate';

const currentGame = State({
	initial: null,
	setGame (state, payload) {
		return payload
	},
	resetGame (state, payload) {
		return null
	}
})

export default currentGame