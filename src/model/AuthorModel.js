const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://shiny:shiny@cluster0.kzzgt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
const Schema = mongoose.Schema;


const AuthorSchema = new Schema({
    title : String,
    image: String,
    about: String
});

const authordata = mongoose.model('authordata',AuthorSchema);

module.exports = authordata;