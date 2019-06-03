import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
import { POKEMON_ID_WHITELIST, POKEMON_GO_TOTAL } from '../PokedexConstants'

let StatsSection = ({ stats }) => {
	const currentTotal = POKEMON_GO_TOTAL + POKEMON_ID_WHITELIST.length;

	return (
		<div>
			<h2>Stats</h2>
			<span>Caught: {stats.caught}/{currentTotal}</span><br />
			<span>Unavailable: {stats.unavailable}</span><br />
			<span>Remaining: {currentTotal - stats.unavailable - stats.caught}</span><br />
			<span>Total: {currentTotal}</span><br />
		</div>
	);
}

const mapStateToProps = (state) => ({
	stats: state.statsReducer,
})

StatsSection = connect(mapStateToProps, null)(StatsSection)

export default StatsSection;

StatsSection.propTypes = {
	stats: PropTypes.object,
};
