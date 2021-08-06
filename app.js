const express = require('express');
const {response} = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Main Templates - EJS
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// app.use(express.static(__dirname + 'films'));
// Routing
// The order is important.
app.get('/', (req, res) => {
        res.render('index', {title: 'index EJS'});
    console.log('Someone is connect to Homepage / Default');

    });

app.get('/nosotros', (req, res) => {
        res.render('about', {title: 'Nosotros EJS'});
    console.log('Someone is connect to about');
    });

app.get('/contacto', (req, res) => {

    res.render('contact', {title: 'Contacto EJS'});
    console.log('Someone is connect to Contact');

    });

app.use((req, res, next) => {
   res.status(404).render( '404',{title: 'Page not found 404'});
});

app.listen(PORT, ()=> console.log(`Express is listening at http://localhost/${PORT}`));

// https://nodejs-mid.herokuapp.com/

