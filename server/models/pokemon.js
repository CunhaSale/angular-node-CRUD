const mongoose = require('mongoose');
const { Schema } = mongoose;

const PokemonSchema = new Schema({
        name: { type: String, required: true },
        order: { type: Number },
        types: { type: Array },
        abilities: { type: Array }
    },
    {collection: 'pokedex',
    versionKey: false
});

module.exports = mongoose.model('pokedex', PokemonSchema);