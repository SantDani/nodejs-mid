const express = require('express');
const util = require('util');
const mongoDB = require('./models/connectMongoDB');
const fs = require('fs');
const mongoose = require("mongoose");
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;





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
const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster-free.5gk0p.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;

const connectDB = async () => {
    try{
        await mongoose.connect(uri,
            {
                useNewUrlParser: true ,
                useUnifiedTopology: true,
                keepAlive: true,
                useFindAndModify: true
            })
            .then(( result) => {
                console.log('Log to Database name: ');
                // console.log(`${result}`);
                console.log(`${result.connections[0].name}`);
            })
            .catch(e => console.error('error login in MongoDB ', e));
    }catch (e){
        console.error(e);
    }
};

connectDB().then(r => {
    console.log('ConnectDB')});


