import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { hideBoth, hideLocked, hideObtained, showAll } from '../../redux/actions/visibilityFilters';
import styled from 'styled-components';

const Label = styled.label`
	margin-right: 5px;
`;

let FilterSection = ({ hideBothProp, hideLockedProp, hideObtainedProp, showAllProp }) => {
	const [obtained, setObtained] = useState(
		true
	);
	const [unavailable, setUnavailable] = useState(
		true
	);

	const toggleChange = (event) => {
		const id = event.target.id;
		if (id === 'obtained') {
			setObtained(!obtained);
		}
		if (id === 'unavailable')
			setUnavailable(!unavailable);
	}
	useEffect(() => {
		if (obtained) {
			if (unavailable) {
				hideBothProp();
			} else {
				hideObtainedProp();
			}
		} else {
			if (unavailable) {
				hideLockedProp();
			} else {
				showAllProp();
			}
		}
	});

	return (<div>
		<h2>Filters</h2>
		<div>
			<Label htmlFor="obtained">
				Hide obtained
			</Label>
			<input type="checkbox"
				id="obtained"
				checked={obtained}
				onChange={toggleChange}
			/>
		</div>
		<div>
			<Label htmlFor="unavailable">
				Hide unavailable
			</Label>
			<input type="checkbox"
				id="unavailable"
				checked={unavailable}
				onChange={toggleChange}
			/>
		</div>
	</div>);
}

const mapDispatchToProps = (dispatch) => ({
	hideBothProp: () => { dispatch(hideBoth()) },
	hideLockedProp: () => { dispatch(hideLocked()) },
	hideObtainedProp: () => { dispatch(hideObtained()) },
	showAllProp: () => { dispatch(showAll()) }
})

FilterSection = connect(null, mapDispatchToProps)(FilterSection)

export default FilterSection;

FilterSection.propTypes = {
	hideBothProp: PropTypes.func,
	hideLockedProp: PropTypes.func,
	hideObtainedProp: PropTypes.func,
	showAllProp: PropTypes.func
};
