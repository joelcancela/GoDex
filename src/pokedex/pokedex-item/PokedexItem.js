import React, { Component } from 'react'
import './PokedexItem.css';
import placeholder from './pokemonPlaceholder.png';

export default class PokedexItem extends Component {

    render() {
        return (
            <div className="pokedexItem">
                <img className="pokemonImage" src={this.props.pokemon.sprite} loader={<img src={placeholder} />} alt=""></img>
                <span className="pokemonNumber">#{parseInt(this.props.id).toString().padStart(3, '0')}</span>
            </div>
        )
        /*TODO: add placeholder URL */
    }
}
