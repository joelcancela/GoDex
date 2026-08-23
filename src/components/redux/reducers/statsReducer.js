const stats = (state = {}, action) => {
	switch (action.type) {
		case 'SET_STATS':
			return action.data;
		default:
			return state;
	}
}

export default stats;
