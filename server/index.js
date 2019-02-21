const express = require('express');
const path = require('path');
const cors = require('cors');
const { mongoose } = require('./database');

const app = express();

app.set('port', process.env.PORT || 3456);

//middlewares
app.use(cors());
app.use(express.json());

//routes
app.use('/api', require('./routes/pokemon.routes'));

app.listen(app.get('port'), () => {
    console.log('Server on port 3456');
})