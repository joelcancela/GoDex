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
			case 'normal':
				return {
					background: "radial-gradient(#fff2c0, #deb19c)"
				}
			case 'fighting':
				return {
					background: "radial-gradient(#ffe0a7, #f3a32a)"
				}
			case 'flying':
				return {
					background: "radial-gradient(#fff2c0, #A890F0)"
				}
			case 'poison':
				return {
					background: "radial-gradient(#a6b8c3, #a27498)"
				}
			case 'ground':
				return {
					background: "radial-gradient(#dab679, #967b4b)"
				}
			case 'rock':
				return {
					background: "radial-gradient(#dedede, #959ca6)"
				}
			case 'bug':
				return {
					background: "radial-gradient(#eef76f, #b3d76e)"
				}
			case 'ghost':
				return {
					background: "radial-gradient(#b48fc1, #46345e)"
				}
			case 'steel':
				return {
					background: "radial-gradient(#dbe6f1, #738ca6)"
				}
			case 'fire':
				return {
					background: "radial-gradient(#ffff00, #e65822)"
				}
			case 'water':
				return {
					background: "radial-gradient(#70c0f7, #1073a2)"
				}
			case 'grass':
				return {
					background: "radial-gradient(#a9f712, #2ecc71)"
				};
			case 'electric':
				return {
					background: "radial-gradient(#fdff9b, #ecda09)"
				}
			case 'psychic':
				return {
					background: "radial-gradient(#e06dd7, #8845c6)"
				}
			case 'ice':
				return {
					background: "radial-gradient(#f7ffff, #54cdd4)"
				}
			case 'dragon':
				return {
					background: "radial-gradient(#dbe6f1, #738ca6)"
				}
			case 'dark':
				return {
					background: "radial-gradient(#68487d, #68487d)"
				}
			case 'fairy':
				return {
					background: "radial-gradient(#fedbff, #fb5ed4)"
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
	}
}
