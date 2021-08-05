const express = require('express');
const {response} = require("express");
const app = express();
const port = 3000;

// Main Templates - EJS
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + 'films'));
// Routing
// The order is important.
app.get('/',
    (req, res) => {
    res.render('index.ejs', {title: 'index EJS'});
        console.log('Connect someone to page');
    });



app.get('/about',
    (req, res) => {
        res.render('about', {title: 'About EJS'});
    });

app.use((req, res, next) => {
   res.status(404).render( '404',{title: 'Page not found 404'});
});

app.listen(port, ()=> console.log(`Express is listening at http://localhost/${port}`));


