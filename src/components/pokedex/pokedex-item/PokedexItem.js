import React, { Component } from 'react'
import './PokedexItem.css';
import placeholder from './placeholder/unknown.png';




export default class PokedexItem extends Component {

	constructor() {
		super();
		this.state = { loaded: false };
	}

	getPokemonSpritePath() {
		return "https://assets.thesilphroad.com/img/pokemon/icons/96x96/" + this.props.pokemon.id + ".png";
	}

	gradientType = () => {
		switch (this.props.pokemon.type) {
			case 'grass':
				return {
					background: "radial-gradient(#a9f712, #2ecc71)"
				};
			case 'fire':
				return {
					background: "radial-gradient(#ffff00, #e65822)"
				}
			default:
				return {}
		}
	};

	render() {
		return (
			<div className="pokedexItem" style={this.gradientType()}>
				<img className="pokemonImage"
					src={this.state.loaded ? this.getPokemonSpritePath() : placeholder} alt=""
					onLoad={() => this.setState({ loaded: true })}
					onError={e => e.target.src = placeholder} />
				<span
					className="pokemonNumber">#{parseInt(this.props.pokemon ? this.props.pokemon.id : 0).toString().padStart(3, '0')}</span>
			</div>
		)
		/*TODO: add placeholder URL */
	}
}
