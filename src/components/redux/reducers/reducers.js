import { combineReducers } from 'redux'
import obtainedReducer from './obtainedReducer'
import regionalsReducer from './regionalsReducer'
import unavailableReducer from './unavailableReducer'
import statsReducer from './statsReducer'


const rootReducer = combineReducers({
	obtainedReducer,
	regionalsReducer,
	unavailableReducer,
	statsReducer
});

export default rootReducer;
