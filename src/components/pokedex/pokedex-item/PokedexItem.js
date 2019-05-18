import React, {Component} from 'react'
import './PokedexItem.css';
import placeholder from './placeholder/unknown.png';

export default class PokedexItem extends Component {

	constructor() {
		super();
		this.state = {loaded: false};
	}

	getPokemonSpritePath() {
		return "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + this.props.pokemon.id + ".png";
	}

	render() {
		return (
			<div className="pokedexItem">
				<img className="pokemonImage"
				     src={this.state.loaded ? this.getPokemonSpritePath() : placeholder} alt=""
				     onLoad={() => this.setState({loaded: true})}/>
				<span
					className="pokemonNumber">#{parseInt(this.props.pokemon ? this.props.pokemon.id : 0).toString().padStart(3, '0')}</span>
			</div>
		)
		/*TODO: add placeholder URL */
	}
}
