import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {
	showUnavailable,
	showObtained,
	showSpecials,
	hideUnavailable,
	hideObtained,
	hideSpecials
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
	                     hideSpecialsProp,
	                     hideObtainedProp,
	                     showUnavailableProp,
	                     showSpecialsProp,
	                     showObtainedProp
                     }) => {
	const [obtained, setObtained] = useState(
		true
	);
	const [unavailable, setUnavailable] = useState(
		true
	);
	const [specials, setSpecials] = useState(
		true
	);// True is hidden

	const toggleChange = (event) => {
		const id = event.target.id;
		if (id === 'obtained')
			setObtained(!obtained);
		if (id === 'unavailable')
			setUnavailable(!unavailable);
		if (id === 'specials')
			setSpecials(!specials);
	}

	useEffect(() => {
		fetchConfig()
			.then((response) => {
				setObtained(response.hideObtained);
				setUnavailable(response.hideUnavailable);
				setSpecials(response.hideSpecials);
			})
	}, []);

	useEffect(() => {
		if (obtained) {
			hideObtainedProp();
		} else {
			showObtainedProp();
		}
		if (specials) {
			hideSpecialsProp();
		} else {
			showSpecialsProp();
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
			<Label htmlFor="specials">
				Hide specials
			</Label>
			<input type="checkbox"
			       id="specials"
			       checked={specials}
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
	showSpecialsProp: () => {
		dispatch(showSpecials())
	},
	hideUnavailableProp: () => {
		dispatch(hideUnavailable())
	},
	hideObtainedProp: () => {
		dispatch(hideObtained())
	},
	hideSpecialsProp: () => {
		dispatch(hideSpecials())
	},
})

FilterSection = connect(null, mapDispatchToProps)(FilterSection)

export default FilterSection;

FilterSection.propTypes = {
	hideUnavailableProp: PropTypes.func,
	hideObtainedProp: PropTypes.func,
	hideSpecialsProp: PropTypes.func,
	showUnavailableProp: PropTypes.func,
	showObtainedProp: PropTypes.func,
	showSpecialsProp: PropTypes.func,
};
