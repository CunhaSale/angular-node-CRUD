const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();

app.set('port', process.env.PORT || 3456);

//middlewares
app.use(cors());
app.use(express.json());
// app.use(express.urlencoded({extended: false}));

//routes
app.use('/api', require('./routes/pokemon-crud'));

app.listen(app.get('port'), () => {
    console.log('Server on port 3456');
})