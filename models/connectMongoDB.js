const mongoose = require('mongoose');

const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster-free.5gk0p.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;

module.exports = async ()=> await mongoose.connect(uri, {useNewUrlParser: true , useUnifiedTopology: true})
    .then(() => console.log('Log in in MongoDB !!!'))
    .catch(e => console.error('error login in MongoDB ', e));
