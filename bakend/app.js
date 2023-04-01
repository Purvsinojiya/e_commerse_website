const express=require('express');
const mongoose = require('mongoose');
const app = express();

const DB= 'mongodb+srv://P:poorv1234@cluster0.zd4ofda.mongodb.net/?retryWrites=true&w=majority'

require('./conn');
app.use(express.json());
const User=require('./user.js')
const Register=require('./register.js')
const Order=require('./order.js')
const middleware = (req, res,next) =>{
    console.log("meddile ware");
    next();
}
app.use(require('./route.js'));
app.use(require('./route_register.js'));
app.use(require('./route_order.js'));


app.get('/',(req,res) => {
    res.send("hello home page");
})

app.get('/login',(req,res) => {
    res.send("hello home page");
})
app.get('/register',(req,res) => {
    res.send("register");
})
app.get('/order',(req,res) => {
    res.send("register");
})
app.listen(5000,()=>{
    console.log("Server listening onnnnnn");
})