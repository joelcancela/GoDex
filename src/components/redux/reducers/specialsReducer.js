import { VisibilityFilters } from '../actions/visibilityFilters';
import { ActionTypes } from '../actions/actionTypes';

const filters = (state = VisibilityFilters.SHOW_SPECIALS, action) => {
	switch (action.type) {
		case ActionTypes.SET_SPECIALS:
			return action.filter;
		default:
			return state;
	}
}

export default filters;
