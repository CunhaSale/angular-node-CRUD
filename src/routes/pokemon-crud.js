const router = require('express').Router();
const mongojs = require('mongojs');
const db = mongojs('mean-db', ['pokemondb']);

router.get('/pokemons', (req, res, next) => {
    db.pokemondb.find((err, results) => {
        if(err) return next(err);
        res.json(results);
    });
});

router.get('/pokemons/:id', (req, res, next) => {
    db.pokemondb.findOne({order: req.params.order}, (err, result) => {
        if(err) return next(err);
        res.json(result);
    });
});

router.post('/pokemons', (req, res, next) => {
    const body = req.body;
    if(!body.name){
        res.status(400).json({ error: 'bad data' });
    }else{
        db.pokemondb.save(body, (err, result) => {
            if(err) return next(err);
            res.json(result);
        });
    };
});

router.delete('/pokemons/:id', (req, res, next) => {
    bd.pokemondb.remove({_id: mongojs.ObjectId(req.params.id)}, (err, result) => {
        if(err) return next(err);
        res,json(result);
    });
});

router.put('/pokemons/:id', (req, res, next) => {
    const body = req.body;
    db.pokemondb.update({_id: mongojs.ObjectId(req.params.id)}, body, (err, result) => {
        if(err) return next(err);
        res.json(result);
    });
});

module.exports = router;