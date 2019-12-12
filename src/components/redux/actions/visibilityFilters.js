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

export const showRegionals = () => ({
	type: ActionTypes.SET_REGIONALS,
	filter: VisibilityFilters.SHOW_REGIONALS
});

export const hideRegionals = () => ({
	type: ActionTypes.SET_REGIONALS,
	filter: VisibilityFilters.HIDE_REGIONALS
});

export const VisibilityFilters = {
	SHOW_OBTAINED: 'SHOW_OBTAINED',
	HIDE_OBTAINED: 'HIDE_OBTAINED',
	SHOW_UNAVAILABLE: 'SHOW_UNAVAILABLE',
	HIDE_UNAVAILABLE: 'HIDE_UNAVAILABLE',
	SHOW_REGIONALS: 'SHOW_REGIONALS',
	HIDE_REGIONALS: 'HIDE_REGIONALS'
};
