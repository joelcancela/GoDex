const fs = require('fs/promises');
const path = require('path');

const POKEDEX_PATH = path.resolve(__dirname, '..', 'public', 'pokedex', 'pokemons.json');
const POKEPEDIA_CATALOG_URL = 'https://www.pokepedia.fr/Liste_des_Pok%C3%A9mon_dans_l%27ordre_du_Pok%C3%A9dex_de_Pok%C3%A9mon_GO';

/**
 * Update the local GoDex data with Pokemon that are now available in Pokemon Go.
 * @return {Promise<Array<number>>} Pokemon numbers removed from unavailable
 */
async function updateAvailablePokemons() {
	const pokemonsJSON = JSON.parse(await fs.readFile(POKEDEX_PATH, 'utf8'));
	validatePokemonsJSON(pokemonsJSON);

	const catalogResponse = await fetch(POKEPEDIA_CATALOG_URL);
	if (!catalogResponse.ok) {
		throw new Error(`Failed to retrieve Pokepedia catalog: ${catalogResponse.status} ${catalogResponse.statusText}`);
	}

	const catalogHTML = await catalogResponse.text();
	const sightedPokemonNumbers = parseCatalogAndReturnJSONOfSighted(catalogHTML);
	const newAvailablePokemonNumbers = computeNewAvailablePokemonNumbers(
			pokemonsJSON,
			sightedPokemonNumbers,
	);

	if (newAvailablePokemonNumbers.length > 0) {
		const newAvailablePokemonSet = new Set(newAvailablePokemonNumbers);
		pokemonsJSON.unavailable = pokemonsJSON.unavailable.filter(
				(pokemonNumber) => !newAvailablePokemonSet.has(pokemonNumber),
		);
		await fs.writeFile(POKEDEX_PATH, `${JSON.stringify(pokemonsJSON, null, 2)}\n`);
	}

	return newAvailablePokemonNumbers;
}

/**
 * Parse Pokemon numbers from the catalog table rows.
 * @param {string} catalogHTML Pokepedia catalog HTML
 * @return {Array<number>} unique Pokemon numbers found in the catalog
 */
function parseCatalogAndReturnJSONOfSighted(catalogHTML) {
	const tableBodies = catalogHTML.match(/<tbody[\s\S]*?<\/tbody>/gi) || [catalogHTML];
	const pokemonNumbers = [];

	for (const tableBody of tableBodies) {
		const rows = tableBody.match(/<tr\b[\s\S]*?<\/tr>/gi) || [];
		for (const row of rows) {
			const match = row.match(/<td\b[^>]*>\s*0*(\d{1,4})\s*<\/td>/i);
			if (match) {
				pokemonNumbers.push(Number(match[1]));
			}
		}
	}

	return [...new Set(pokemonNumbers)];
}

/**
 * Find catalog Pokemon that are neither caught nor already available.
 * @param {{caught: Array<number>, unavailable: Array<number>}} currentJSON GoDex JSON
 * @param {Array<number>} sightedPokemonNumbers numbers found in the catalog
 * @return {Array<number>} newly available Pokemon numbers
 */
function computeNewAvailablePokemonNumbers(currentJSON, sightedPokemonNumbers) {
	const caughtPokemon = new Set(currentJSON.caught);
	const unavailablePokemon = new Set(currentJSON.unavailable);

	return sightedPokemonNumbers.filter(
			(pokemonNumber) => !caughtPokemon.has(pokemonNumber) && unavailablePokemon.has(pokemonNumber),
	);
}

function validatePokemonsJSON(pokemonsJSON) {
	if (!Array.isArray(pokemonsJSON.caught) || !Array.isArray(pokemonsJSON.unavailable)) {
		throw new Error('pokemons.json must contain caught and unavailable arrays');
	}
}

if (require.main === module) {
	updateAvailablePokemons()
			.then((newAvailablePokemonNumbers) => {
				if (newAvailablePokemonNumbers.length === 0) {
					console.log('No new available Pokemon found.');
					return;
				}
				console.log(`Updated unavailable Pokemon: ${newAvailablePokemonNumbers.join(', ')}`);
			})
			.catch((error) => {
				console.error(error.message);
				process.exitCode = 1;
			});
}

module.exports = {
	computeNewAvailablePokemonNumbers,
	parseCatalogAndReturnJSONOfSighted,
	updateAvailablePokemons,
};
