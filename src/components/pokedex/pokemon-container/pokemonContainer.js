import PokedexItem from '../pokedex-item/PokedexItem';
import React from 'react';

const PokemonContainer = ({ pokemons, pokemonsCaught, pokemonsUnavailable }) => {
	return pokemons.map((pokemon) => {
			return (<PokedexItem
				key={pokemon.id}
				pokemon={pokemon}
				caught={pokemonsCaught.includes(parseInt(pokemon.id))}
				unavailable={pokemonsUnavailable.includes(parseInt(pokemon.id))}
			/>);
		}
	);
};

export default PokemonContainer;
