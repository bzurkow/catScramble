import { CreateJumpstateMiddleware } from 'jumpstate';
import { createStore, combineReducers, applyMiddleware } from 'redux';

import Reducers from './index';

const store = createStore(
	combineReducers(reducers),
	applyMiddleware(
		CreateJumpstateMiddleware()
		)
	)

export default store