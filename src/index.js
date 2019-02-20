const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();

app.set('port', process.env.PORT || 3456);

//middlewares

//routes
app.use(require('./routes/index'));

app.listen(app.get('port'), () => {
    console.log('Server on port 3456');
})