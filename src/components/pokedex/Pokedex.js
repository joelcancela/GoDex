import React, { Component } from 'react';
import PokemonContainer from './pokemon-container/pokemonContainer';

const fetchPokemonsGo = async () => {
	const response = await fetch(`/pokedex/pokemons.json`);
	const result = await response.json();
	return result;
};

class Pokedex extends Component {
	constructor(props) {
		super(props);
		this.state = { pokemons: [], pokemonsCaught: [], pokemonsUnavailable: [] };
	}

	async componentDidMount() {
		await fetchPokemonsGo().then((pokemons) => this.setState((previous) => ({ ...previous, pokemons: pokemons.pokemons, pokemonsCaught: pokemons.caught, pokemonsUnavailable: pokemons.unavailable })));
	}

	render() {
		return (<PokemonContainer pokemons={this.state.pokemons} pokemonsCaught={this.state.pokemonsCaught} pokemonsUnavailable={this.state.pokemonsUnavailable} />);
	}
}

export default Pokedex;
