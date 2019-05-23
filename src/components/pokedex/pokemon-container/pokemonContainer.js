import PokedexItem from "../pokedex-item/PokedexItem";
import React from "react";

const PokemonContainer = ({ pokemons }) => {

	const POKEMON_GO_TOTAL = 493;
	const POKEMON_ID_BLACKLIST = [];
	const POKEMON_ID_WHITELIST = [808, 809];

	return pokemons.map((pokemon) => {
		if (POKEMON_ID_WHITELIST.includes(parseInt(pokemon.id)) || (pokemon.id <= POKEMON_GO_TOTAL && !POKEMON_ID_BLACKLIST.includes(parseInt(pokemon.id)))) {
			return (<PokedexItem
				key={pokemon.id}
				pokemon={pokemon}
			/>)
		} else {
			return undefined;
		}
	}
	)

};

export default PokemonContainer
