const mongoose = require('mongoose');
const URI = 'mongodb://localhost/pokemondb';

mongoose.connect(URI)
    .then(() => console.log('PokeDataBase is connected'))
    .catch(err => console.error(err));

module.exports = mongoose;