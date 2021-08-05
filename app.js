const express = require('express');
const {response} = require("express");
const app = express();
const port = 5000;

// Templates - EJS
app.set('view engine', 'ejs');
app.set('view', __dirname + '/views');

// Routing
// The order is important.
app.get('/',
    (req, res) => {
    res.render('index', {title: 'index EJS'});
    });



app.get('/about',
    (req, res) => {
        res.render('about', {title: 'About EJS'});
    });

app.use((req, res, next) => {
   res.status(404).render( '404',{title: 'Page not found 404'});
});

app.listen(port, ()=> console.log(`Express is listening at http://localhost/${port}`));


