import React, { Component } from 'react'
import Col from 'react-bootstrap/Col'
import PokedexItem from './pokedex-item/PokedexItem';
import Pokemon from '../Pokemon';

export class Pokedex extends Component {

    POKEMON_GO_TOTAL = 493;

    constructor() {
        super();
        this.state = { pokemons: [] };
        this.signalController = new AbortController()
    }

    componentDidMount() {
        this.getPokedex();
    }

    getPokedex = () => {
        let pokemons = []
        for (let id = 1; id <= this.POKEMON_GO_TOTAL; id++) {
            fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`, { signal: this.signalController.signal })
                .then(response => response.json())
                .then(data => { pokemons[id] = new Pokemon(data); this.setState({ pokemons: pokemons }) })
                .catch(err => console.log(err));
        }
    }

    componentWillUnmount() {
        this.signalController.abort();
    }

    createPokedex = () => {
        const listPokedexItems = this.state.pokemons.map((pokemon, i) => <Col key={i}><PokedexItem id={i} pokemon={pokemon}></PokedexItem></Col>)
        return listPokedexItems;
    }

    render() {
        return this.createPokedex()
    }
}

export default Pokedex
