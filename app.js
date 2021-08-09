const express = require('express');
const mongoFilms = require('./models/connectMongoDB');
const fs = require('fs');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;


// let file = fs.readFileSync('user-mongodb.json');
// let dataUser = JSON.parse(file);
// console.log(process.env.USER);
// console.log(process.env.PASSWORD);
// console.log(process.env.DBNAME);
// console.log(process.env.PORT);
// const userAdmin = dataUser.user;
// const password = dataUser.password;
// const dbName = dataUser.dbName;




// Main Templates - EJS
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/public'));
// Routing
// The order is important.
// app.use('/films', require('./router/films'));
app.use('/', require('./router/routerPaths'));



app.listen(PORT, ()=> console.log(`Express is listening at http://localhost:${PORT}`));

// https://nodejs-mid.herokuapp.com/

