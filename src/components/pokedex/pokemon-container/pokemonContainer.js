import PokedexItem from "../pokedex-item/PokedexItem";
import React from "react";

const PokemonContainer = ({pokemons}) => {

	const POKEMON_GO_TOTAL = 493;
	const POKEMON_ID_BLACKLIST = [];

	return pokemons.map((pokemon, index) => {
			if (pokemon.id <= POKEMON_GO_TOTAL && !POKEMON_ID_BLACKLIST.includes(parseInt(pokemon.id))) {
				return (<PokedexItem
					key={pokemon.id}
					pokemon={pokemon}
				/>)
			}

		}
	)

};

export default PokemonContainer
