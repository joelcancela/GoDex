import { ActionTypes } from './actions';

export const setStats = (data) => ({
	type: ActionTypes.SET_STATS,
	data: data,
});
