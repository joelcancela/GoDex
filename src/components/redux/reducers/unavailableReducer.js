import { VisibilityFilters } from '../actions/visibilityFilters';
import { ActionTypes } from '../actions/actionTypes';

const filters = (state = VisibilityFilters.SHOW_UNAVAILABLE, action) => {
	switch (action.type) {
		case ActionTypes.SET_UNAVAILABLE:
			return action.filter;
		default:
			return state;
	}
}

export default filters;
