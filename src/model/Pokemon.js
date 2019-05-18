class Pokemon {
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.sprite = 'https://assets.thesilphroad.com/img/pokemon/icons/96x96/'+this.id+'.png';
        this.type = data.types[0].type.name;
    }
}

export default Pokemon;