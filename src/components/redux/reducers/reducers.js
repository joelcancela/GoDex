import { combineReducers } from 'redux'
import obtainedReducer from './obtainedReducer'
import specialsReducer from './specialsReducer'
import unavailableReducer from './unavailableReducer'
import statsReducer from './statsReducer'


const rootReducer = combineReducers({
	obtainedReducer,
	specialsReducer,
	unavailableReducer,
	statsReducer
});

export default rootReducer;
