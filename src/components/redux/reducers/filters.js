import {VisibilityFilters} from '../actions/visibilityFilters';

const filters = (state = VisibilityFilters.SHOW_ALL, action) => {
	switch (action.type) {
		case 'SET_VISIBILITY_FILTER':
			return action.filter;
		default:
			return state;
	}
}

export default filters;
