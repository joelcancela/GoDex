import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { hideBoth, hideLocked, hideObtained, showAll } from '../../redux/actions/visibilityFilters';

let Filter = ({ hideBothProp, hideLockedProp, hideObtainedProp, showAllProp }) => {
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

	return (<>
		<label>
			<input type="checkbox"
				id="obtained"
				checked={obtained}
				onChange={toggleChange}
			/>
			Hide obtained Pokémons
		</label>
		<br />
		<label>
			<input type="checkbox"
				id="unavailable"
				checked={unavailable}
				onChange={toggleChange}
			/>
			Hide unavailable Pokémons
		</label>
	</>);
}

const mapDispatchToProps = (dispatch) => ({
	hideBothProp: () => { dispatch(hideBoth()) },
	hideLockedProp: () => { dispatch(hideLocked()) },
	hideObtainedProp: () => { dispatch(hideObtained()) },
	showAllProp: () => { dispatch(showAll()) }
})

Filter = connect(null, mapDispatchToProps)(Filter)

export default Filter;

Filter.propTypes = {
	hideBothProp: PropTypes.func,
	hideLockedProp: PropTypes.func,
	hideObtainedProp: PropTypes.func,
	showAllProp: PropTypes.func
};
