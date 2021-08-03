const express = require('express');
const {response} = require("express");
const path = require("path");
const app = express();
const port = 5000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/',
    (req, res) => {
    res.status(200).sendFile(__dirname + '/films/index.html');
    });

// Routing
// The order is important.
app.get('/url-code',
    (req, res) => {
        res.send(`Esta es la ruta en al que se ejecuta el codigo ${__dirname} `);
    });

app.use((req, res, next) => {
   res.status(404).sendFile(__dirname + '/films/404.html')
});

app.listen(port, ()=> console.log(`Express is listening at http://localhost/${port}`));


