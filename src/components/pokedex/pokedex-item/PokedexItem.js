import React, {useState} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import './PokedexItem.css';
import placeholder from './placeholder/unknown.png';
import {VisibilityFilters} from '../../redux/actions/visibilityFilters'

let PokedexItem = ({pokemon, caught, unavailable, obtainedFilter = VisibilityFilters.HIDE_OBTAINED, regionalFilter = VisibilityFilters.HIDE_REGIONALS, unavailableFilter = VisibilityFilters.HIDE_UNAVAILABLE}) => {
	const [loaded, setLoaded] = useState(
		false
	);

	const getPokemonSpritePath = () => {
		const URL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + pokemon.id + '.png';
		return URL;
	}

	const getStyle = () => {
		if (
			(caught && obtainedFilter === VisibilityFilters.HIDE_OBTAINED) ||
			(unavailable && unavailableFilter === VisibilityFilters.HIDE_UNAVAILABLE) ||
			(pokemon.region && regionalFilter === VisibilityFilters.HIDE_REGIONALS)
		) {
			return {
				'display': 'none'
			}
		}
		const style = gradientType();
		if (unavailable) {
			return {
				'backgroundImage': 'url(./img/cross.png),' + style.background,
				'opacity': 0.5,
				'filter': 'grayscale(1)'
			};
		} else if (!caught) {
			return {
				...style,
				'opacity': 0.5
			};
		} else {
			return style;
		}
	}

	const gradientType = () => {
		const currentPokemonType = pokemon.type || pokemon.types[0].toLowerCase();
		switch (currentPokemonType) {
			case 'normal':
				return {
					background: 'radial-gradient(#fff2c0, #deb19c)',
				};
			case 'fighting':
				return {
					background: 'radial-gradient(#ffe0a7, #f3a32a)',
				};
			case 'flying':
				return {
					background: 'radial-gradient(#fff2c0, #A890F0)',
				};
			case 'poison':
				return {
					background: 'radial-gradient(#a6b8c3, #a27498)',
				};
			case 'ground':
				return {
					background: 'radial-gradient(#dab679, #967b4b)',
				};
			case 'rock':
				return {
					background: 'radial-gradient(#dedede, #959ca6)',
				};
			case 'bug':
				return {
					background: 'radial-gradient(#eef76f, #b3d76e)',
				};
			case 'ghost':
				return {
					background: 'radial-gradient(#b48fc1, #46345e)',
				};
			case 'steel':
				return {
					background: 'radial-gradient(#dbe6f1, #738ca6)',
				};
			case 'fire':
				return {
					background: 'radial-gradient(#ffff00, #e65822)',
				};
			case 'water':
				return {
					background: 'radial-gradient(#70c0f7, #1073a2)',
				};
			case 'grass':
				return {
					background: 'radial-gradient(#a9f712, #2ecc71)',
				};
			case 'electric':
				return {
					background: 'radial-gradient(#fdff9b, #ecda09)',
				};
			case 'psychic':
				return {
					background: 'radial-gradient(#e06dd7, #8845c6)',
				};
			case 'ice':
				return {
					background: 'radial-gradient(#f7ffff, #54cdd4)',
				};
			case 'dragon':
				return {
					background: 'radial-gradient(#dbe6f1, #738ca6)',
				};
			case 'dark':
				return {
					background: 'radial-gradient(#68487d, #68487d)',
				};
			case 'fairy':
				return {
					background: 'radial-gradient(#fedbff, #fb5ed4)',
				};
			default:
				return {};
		}
	}


	return (
		<div className="pokedexItem" style={getStyle()}>
			<img className="pokemonImage"
			     src={loaded ? getPokemonSpritePath() : placeholder}
			     alt=""
			     onLoad={() => setLoaded(true)}
			     onError={(e) => {
				     e.target.onerror = null;
				     e.target.src = placeholder
			     }}/>
			<div className="pokemonDetails">
			<span
				className="pokemonNumber">
				#{parseInt(pokemon.id).toString().padStart(3, '0')}
			</span>
				{pokemon.region ? <span className="pokemonRegion">
				{pokemon.region}
			</span> : null}
			</div>
		</div>
	);
}

// See combineReducers in reducers.js
const mapStateToProps = (state) => ({
	obtainedFilter: state.obtainedReducer,
	regionalFilter: state.regionalsReducer,
	unavailableFilter: state.unavailableReducer
})

PokedexItem = connect(mapStateToProps, null)(PokedexItem)

export default PokedexItem;

PokedexItem.propTypes = {
	pokemon: PropTypes.object,
	caught: PropTypes.bool,
	unavailable: PropTypes.bool,
	obtainedFilter: PropTypes.string,
	regionalFilter: PropTypes.string,
	unavailableFilter: PropTypes.string
};
