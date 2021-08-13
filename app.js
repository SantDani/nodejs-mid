const express = require('express');
// const bodyParser = require('body-parser');


const connectMongoDB = require('./models/connectMongoDB');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;


// parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
// app.use(bodyParser.json());

// HBS - template engine
// const hbs = require('hbs');
const hbs = require('hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

// for CSS and JS
app.use(express.static(__dirname + '/public'));
// Routing
// The order is important.

app.get('/', (req, res) => {
    res.render('index', {title: '<h1>Home page HBS</h1>'});
});

app.get('/films', (request,  response) => {
    response.render('films', {
        title: 'films',
        actors: [
            {
                id: 1,
                name: 'Jhon Wick',
                generes: ['action', 'crime', 'thriller']
            },
            {
                id: 2,
                name: 'Fast and Furious 9',
                generes: ['action', 'adventure', 'crime']
            }
        ]
    });
});

app.get('/generes', (request, response)=>{
    response.render('generes', {
        title: 'generes',
        generes:[
            {
                status: false,
                name: 'action'
            }
            ,{
                status: false,
                name: 'adventure'
            }
            ,{
                status: false,
                name: 'crime'
            },
            {
                status: false,
                name: 'thriller'
            },
        ]
    })
});

app.use((request, response) => {
    response.status(404).render('404', {
        title: 404,
        description: 'Page not found'
    });
});





app.listen(PORT, ()=> console.log(`Express is listening at http://localhost:${PORT}`));

// https://nodejs-mid.herokuapp.com/
// connect to MongoDB
connectMongoDB();



