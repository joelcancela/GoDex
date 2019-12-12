import { ActionTypes } from './actionTypes';

export const setStats = (data) => ({
	type: ActionTypes.SET_STATS,
	data: data,
});
