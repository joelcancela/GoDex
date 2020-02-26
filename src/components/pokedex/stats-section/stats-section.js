import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
import {POKEMON_ID_WHITELIST, POKEMON_GO_TOTAL} from '../PokedexConstants'
import styled from 'styled-components';

const DivStat = styled.div`
	background-color: rgba(0, 0, 0, 0.5);
	border-radius: 10px;
	padding: 7px;
	color: white;
`;

let StatsSection = ({stats}) => {
	const currentTotal = POKEMON_GO_TOTAL + POKEMON_ID_WHITELIST.length;

	return (
		<DivStat>
			<h2>Stats</h2>
			<span>Caught: {stats.caught}/{currentTotal - stats.unavailable}</span><br/>
			<span>Unavailable: {stats.unavailable}</span><br/>
			<span>Remaining: {currentTotal - stats.unavailable - stats.caught}</span><br/>
			<span>Total: {currentTotal}</span><br/>
		</DivStat>
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
