import { combineReducers } from 'redux'
import filterReducer from './filterReducer'
import statsReducer from './statsReducer'


const rootReducer = combineReducers({
	filterReducer,
	statsReducer
});

export default rootReducer;
