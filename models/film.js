const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const filmSchema = new Schema({
    title: String,
    description: String
});

//Create model
const Film = mongoose.model('Film', filmSchema);

module.exports = Film;
