const mongoose = require('mongoose');
require('dotenv').config();

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
                console.log(`${result.connections[0].name}`);
            })
            .catch(e => console.error('error login in MongoDB ', e));
    }catch (e){
        console.error(e);
    }
};


module.exports = connectDB;
