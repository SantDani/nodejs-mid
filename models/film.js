const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const filmSchema = new Schema({
    title: String,
    year: "number",
    genre: []
});

//Create model
const Film = mongoose.model('Film', filmShema);

module.exports = Film;
