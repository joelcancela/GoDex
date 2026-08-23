import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const DivStat = styled.div`
	background-color: rgba(0, 0, 0, 0.5);
	border-radius: 10px;
	padding: 7px;
	color: white;
`;

let StatsSection = ({stats}) => {
	return (
		<DivStat>
			<h2>Stats</h2>
			<span>Caught: {stats.caught}/{stats.total - stats.unavailable}</span><br/>
			<span>Unavailable: {stats.unavailable}</span><br/>
			<span>Remaining: {stats.total - stats.unavailable - stats.caught}</span><br/>
			<span>Total: {stats.total}</span><br/>
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
