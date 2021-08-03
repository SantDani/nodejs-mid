const express = require('express');
const {response} = require("express");
const app = express();
const port = 5000;

app.get('/',
    (req, res) => res.send('Hello World!'));

// Routing
app.get('/film',
    (req, res) => res.send('Ruta film'));

app.listen(port, ()=> console.log(`Express is listening at http://localhost/${port}`));


