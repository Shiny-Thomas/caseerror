const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://shiny:shiny@cluster0.kzzgt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
const Schema = mongoose.Schema;


const BookSchema = new Schema({
    title : String,
    author: String,
    image: String,
    about: String
});

const bookdata = mongoose.model('bookdata',BookSchema);

module.exports = bookdata;