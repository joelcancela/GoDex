import { VisibilityFilters } from '../actions/visibilityFilters';
import { ActionTypes } from '../actions/actionTypes';

const filters = (state = VisibilityFilters.SHOW_OBTAINED, action) => {
	switch (action.type) {
		case ActionTypes.SET_OBTAINED:
			return action.filter;
		default:
			return state;
	}
}

export default filters;
