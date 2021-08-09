const express = require('express');
const mongoose = require('mongoose');
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

const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster-free.5gk0p.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;

await mongoose.connect(uri, {useNewUrlParser: true , useUnifiedTopology: true})
    .then(() => console.log('Log in in MongoDB !!!'))
    .catch(e => console.error('error login in MongoDB ', e));


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

