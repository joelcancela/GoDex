import React, { useState, useEffect } from 'react';
import PokemonContainer from './pokemon-container/pokemonContainer';
import PropTypes from 'prop-types';
import { setStats } from '../redux/actions/stats';
import { connect } from 'react-redux';

const fetchPokemonsGo = async () => {
	const response = await fetch(`/pokedex/pokemons.json`);
	const result = await response.json();
	return result;
};

let Pokedex = ({ updateStats }) => {
	const [pokemons, setPokemons] = useState([]);
	const [pokemonsCaught, setPokemonsCaught] = useState([]);
	const [pokemonsUnavailable, setPokemonsUnavailable] = useState([]);

	useEffect(() => {
		fetchPokemonsGo()
			.then((pokemons) => {
				setPokemons(pokemons.pokemons);
				setPokemonsCaught(pokemons.caught);
				setPokemonsUnavailable(pokemons.unavailable);
			})
	}, []);

	useEffect(() => {
		updateStats(pokemonsCaught, pokemonsUnavailable);
	});

	return (<PokemonContainer pokemons={pokemons} pokemonsCaught={pokemonsCaught} pokemonsUnavailable={pokemonsUnavailable} />);
}


const mapDispatchToProps = (dispatch) => ({
	updateStats: (pokemonsCaught, pokemonsUnavailable) => { dispatch(setStats({ caught: pokemonsCaught.length, unavailable: pokemonsUnavailable.length })) }
})

Pokedex = connect(null, mapDispatchToProps)(Pokedex)


export default Pokedex;

Pokedex.propTypes = {
	pokemons: PropTypes.object,
	pokemonsCaught: PropTypes.object,
	pokemonsUnavailable: PropTypes.object,
	updateStats: PropTypes.func
};

