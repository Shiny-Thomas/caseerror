const express = require('express'); 
const path = require ('path'); 
const cors = require('cors');
//required parser 
//required cors

var port = process.env.PORT||5000;

const bodyParser=require('body-parser')
const mongoose=require("mongoose")

// nav not required

const loginRouter = require('./src/routes/loginroute');
const signupRouter = require('./src/routes/signuproute');
const homeRouter = require('./src/routes/homerouter');//changed as home router
const booksRouter = require('./src/routes/booksroute');
const authorsRouter = require('./src/routes/authorsroute');

const app = new express; 


app.set('views','./src/views'); 
app.set('view engine','ejs'); 


app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static(path.join(__dirname , '/public'))); 

app.use('/login',loginRouter); 
app.use('/signup',signupRouter); 
app.use('/home',homeRouter); 
app.use('/books',booksRouter); 
app.use('/authors',authorsRouter); 



app.get('/',function(req,res){

    res.render('index',{});
    
});



//changed port

var server = app.listen(port,()=>{
    console.log("Server Ready on 5000");
});