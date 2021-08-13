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
hbs.registerPartial(__dirname + '/views/partials', function (err) {});
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views_hbs');


app.use(express.static(__dirname + '/public'));
// Routing
// The order is important.

app.get('/', (req, res) => {
    res.render('index', {title: '<h1>Home page HBS</h1>'});
} );


// Default rute
/* app.use((req, res, next) => {
    res.status(404).render( '404',{title: 'Page not found 404'});
});
 */

app.listen(PORT, ()=> console.log(`Express is listening at http://localhost:${PORT}`));

// https://nodejs-mid.herokuapp.com/
// connect to MongoDB
connectMongoDB();



