const mongoose = require('mongoose');;
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        minlength:6,
    },
    Address:{
        type:String,
        required:true,
        minlength:6,
    },
    number:{
        type:String,
        required:true,
        minlength:6,
    },
    city:{
        type:String,
        required:true,
        minlength:6,
    },
    Pincode:{
        type:String,
        required:true,
        minlength:6,
    },
    Quienty:{
        type:String,
        required:true,
        minlength:6,
    }
});
const Order= mongoose.model('orders',OrderSchema);
module.exports = Order;
