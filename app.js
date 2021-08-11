const express = require('express');
const bodyParser = require('body-parser')


const connectMongoDB = require('./models/connectMongoDB');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json());

// Main Templates - EJS
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/public'));
// Routing
// The order is important.
// app.use('/films', require('./router/films'));
app.use('/', require('./router/routerPaths'));
app.use('/films', require('./router/films'));
app.put('/update/:id', ()=>{
    console.log('update de app');

    const id = req.params.id;
    const body = req.body;

    console.log(id)
    console.log('body', body);
})

// Default rute
app.use((req, res, next) => {
    res.status(404).render( '404',{title: 'Page not found 404'});
});


app.listen(PORT, ()=> console.log(`Express is listening at http://localhost:${PORT}`));

// https://nodejs-mid.herokuapp.com/
// connect to MongoDB
connectMongoDB();



