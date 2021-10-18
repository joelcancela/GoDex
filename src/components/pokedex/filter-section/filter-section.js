import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {
	showUnavailable,
	showObtained,
	showRegionals,
	hideUnavailable,
	hideObtained,
	hideRegionals
} from '../../redux/actions/visibilityFilters';
import styled from 'styled-components';

const DivStat = styled.div`
	background-color: rgba(0, 0, 0, 0.5);
	border-radius: 10px;
	padding: 7px;
	color: white;
`;

const Label = styled.label`
	margin-right: 5px;
	margin-bottom: .5rem;
`;

const fetchConfig = async () => {
	const response = await fetch(`./pokedex/config.json`);
	return await response.json();
};

let FilterSection = ({hideUnavailableProp,
	                     hideRegionalsProp,
	                     hideObtainedProp,
	                     showUnavailableProp,
	                     showRegionalsProp,
	                     showObtainedProp
                     }) => {
	const [obtained, setObtained] = useState(
		true
	);
	const [unavailable, setUnavailable] = useState(
		true
	);
	const [regionals, setRegionals] = useState(
		true
	);// True is hidden

	const toggleChange = (event) => {
		const id = event.target.id;
		if (id === 'obtained')
			setObtained(!obtained);
		if (id === 'unavailable')
			setUnavailable(!unavailable);
		if (id === 'regionals')
			setRegionals(!regionals);
	}

	useEffect(() => {
		fetchConfig()
			.then((response) => {
				setObtained(response.hideObtained);
				setUnavailable(response.hideUnavailable);
				setRegionals(response.hideRegionals);
			})
	}, []);

	useEffect(() => {
		if (obtained) {
			hideObtainedProp();
		} else {
			showObtainedProp();
		}
		if (regionals) {
			hideRegionalsProp();
		} else {
			showRegionalsProp();
		}
		if (unavailable) {
			hideUnavailableProp();
		} else {
			showUnavailableProp();
		}
	});

	return (<DivStat>
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
		<div>
			<Label htmlFor="regionals">
				Hide regionals
			</Label>
			<input type="checkbox"
			       id="regionals"
			       checked={regionals}
			       onChange={toggleChange}
			/>
		</div>
	</DivStat>);
}

const mapDispatchToProps = (dispatch) => ({
	showUnavailableProp: () => {
		dispatch(showUnavailable())
	},
	showObtainedProp: () => {
		dispatch(showObtained())
	},
	showRegionalsProp: () => {
		dispatch(showRegionals())
	},
	hideUnavailableProp: () => {
		dispatch(hideUnavailable())
	},
	hideObtainedProp: () => {
		dispatch(hideObtained())
	},
	hideRegionalsProp: () => {
		dispatch(hideRegionals())
	},
})

FilterSection = connect(null, mapDispatchToProps)(FilterSection)

export default FilterSection;

FilterSection.propTypes = {
	hideUnavailableProp: PropTypes.func,
	hideObtainedProp: PropTypes.func,
	hideRegionalsProp: PropTypes.func,
	showUnavailableProp: PropTypes.func,
	showObtainedProp: PropTypes.func,
	showRegionalsProp: PropTypes.func,
};
