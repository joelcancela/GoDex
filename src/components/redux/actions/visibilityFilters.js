import { ActionTypes } from './actions';

export const hideBoth = () => ({
	type: ActionTypes.SET_FILTER,
	filter: VisibilityFilters.HIDE_BOTH
});

export const hideLocked = () => ({
	type: ActionTypes.SET_FILTER,
	filter: VisibilityFilters.HIDE_LOCKED
});

export const hideObtained = () => ({
	type: ActionTypes.SET_FILTER,
	filter: VisibilityFilters.HIDE_OBTAINED
});

export const showAll = () => ({
	type: ActionTypes.SET_FILTER,
	filter: VisibilityFilters.SHOW_ALL
});

export const VisibilityFilters = {
	SHOW_ALL: 'SHOW_ALL',
	HIDE_OBTAINED: 'HIDE_OBTAINED',
	HIDE_LOCKED: 'HIDE_LOCKED',
	HIDE_BOTH: 'HIDE_BOTH'
};
