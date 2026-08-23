import {ActionTypes} from './actionTypes';

export const showUnavailable = () => ({
	type: ActionTypes.SET_UNAVAILABLE,
	filter: VisibilityFilters.SHOW_UNAVAILABLE
});

export const hideUnavailable = () => ({
	type: ActionTypes.SET_UNAVAILABLE,
	filter: VisibilityFilters.HIDE_UNAVAILABLE
});

export const showObtained = () => ({
	type: ActionTypes.SET_OBTAINED,
	filter: VisibilityFilters.SHOW_OBTAINED
});

export const hideObtained = () => ({
	type: ActionTypes.SET_OBTAINED,
	filter: VisibilityFilters.HIDE_OBTAINED
});

export const showSpecials = () => ({
	type: ActionTypes.SET_SPECIALS,
	filter: VisibilityFilters.SHOW_SPECIALS
});

export const hideSpecials = () => ({
	type: ActionTypes.SET_SPECIALS,
	filter: VisibilityFilters.HIDE_REGIONALS
});

export const VisibilityFilters = {
	SHOW_OBTAINED: 'SHOW_OBTAINED',
	HIDE_OBTAINED: 'HIDE_OBTAINED',
	SHOW_UNAVAILABLE: 'SHOW_UNAVAILABLE',
	HIDE_UNAVAILABLE: 'HIDE_UNAVAILABLE',
	SHOW_SPECIALS: 'SHOW_SPECIALS',
	HIDE_REGIONALS: 'HIDE_REGIONALS'
};
