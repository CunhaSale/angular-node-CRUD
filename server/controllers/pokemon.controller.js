const Pokedex = require('../models/pokemon');

const pokemonCtrl = {};

pokemonCtrl.getAll = async (req, res) => {
    const pokemons = await Pokedex.find();
    res.json(pokemons)
};

pokemonCtrl.getOne = async (req, res) => {
    const pokemon = await Pokedex.findById(req.params.id);
    res.json(pokemon)
};

pokemonCtrl.post = async (req, res) => {
    const body = new Pokedex(req.body);
    if(!body.name){
        res.status(400).json({ error: 'bad data' });
    }else{
        await body.save();
        res.json({ status: 'Pokemon saved' });
    };
};

pokemonCtrl.delete = async (req, res) => {
    await Pokedex.findByIdAndRemove(req.params.id);
    res.json({ status: 'Pokemon deleted' });
};

pokemonCtrl.put = async (req, res) => {
    const { id } = req.params;
    const pokemon = {
        name: req.body.name,
        order: req.body.order,
        types: req.body.types,
        abilities: req.body.abilities
    };
    await Pokedex.findByIdAndUpdate(id, {$set: pokemon}, {new: true});
    res.json({ status: 'Pokemon updated' });
};

module.exports = pokemonCtrl;