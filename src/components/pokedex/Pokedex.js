import React, {Component, Suspense} from 'react'
import Col from 'react-bootstrap/Col'
import PokedexItem from './pokedex-item/PokedexItem';
import styled from 'styled-components'
import PokemonContainer from "./pokemon-container/pokemonContainer";

const HtmlForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;
  width: 100%;
`;

const timeout = duration =>
	new Promise(resolve => setTimeout(resolve, duration));

const fetchDebug = (...args) => {
	return timeout(0)
		.then(() => fetch(...args));
};

const fetchApi = async () => {
	const response = await fetchDebug(`/api/pokemons.json`);
	const result = await response.json();
	return result.results;
};

class Pokedex extends Component {
	constructor(props) {
		super(props);
		this.state = {pokemons: []};
	}

	async componentWillMount() {
		await fetchApi().then(pokemons => this.setState({pokemons: pokemons}));
	}

	render() {
		return (<PokemonContainer pokemons={this.state.pokemons}/>);
	}

}

// export class Pokedex extends Component {

//     POKEMON_GO_TOTAL = 493;

//     constructor() {
//         super();
//         this.state = { pokemons: [] };
//         this.signalController = new AbortController()
//     }

//     componentDidMount() {
//         this.getPokedex();
//     }

//     getPokedex = () => {
//         let pokemons = []
//         for (let id = 1; id <= this.POKEMON_GO_TOTAL; id++) {
//             fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`, { signal: this.signalController.signal })
//                 .then(response => response.json())
//                 .then(data => { pokemons[id] = new Pokemon(data); this.setState({ pokemons: pokemons }) })
//                 .catch(err => console.log(err));
//         }
//     }

//     componentWillUnmount() {
//         this.signalController.abort();
//     }

//     createPokedex = () => {
//         const listPokedexItems = this.state.pokemons.map((pokemon, i) => <Col key={i}><PokedexItem id={i} pokemon={pokemon}></PokedexItem></Col>)
//         return listPokedexItems;
//     }

//     render() {
//         return (
//             <Suspense fallback={<div>Loading...</div>}>
//                 {this.createPokedex()}
//             </Suspense>
//         )
//     }
// }

export default Pokedex
