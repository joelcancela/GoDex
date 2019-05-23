import React, { Component } from 'react'
import PokemonContainer from "./pokemon-container/pokemonContainer";

const fetchApi = async () => {
	const response = await fetch(`/pokemons.json`);
	const result = await response.json();
	return result;
};

class Pokedex extends Component {
	constructor(props) {
		super(props);
		this.state = { pokemons: [] };
	}

	async componentWillMount() {
		await fetchApi().then(pokemons => this.setState({ pokemons: pokemons }));
	}

	render() {
		return (<PokemonContainer pokemons={this.state.pokemons} />);
	}

}

export default Pokedex
