const router = require('express').Router();

const pokemonCtrl = require('../controllers/pokemon.controller');

router.get('/pokemons', pokemonCtrl.getAll);
router.get('/pokemons/:id', pokemonCtrl.getOne);
router.post('/pokemons', pokemonCtrl.post);
router.delete('/pokemons/:id', pokemonCtrl.delete);
router.put('/pokemons/:id', pokemonCtrl.put);

module.exports = router;