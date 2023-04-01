const mongoose = require('mongoose');;
const Schema = mongoose.Schema;

const RegisterSchema = new Schema({
    name:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
        minlength:6,
    },
    number:{
        type:String,
        required:true,
        minlength:6,
    },
    email:{
        type:String,
        required:true,
        minlength:6,
    }
});
const Register= mongoose.model('Register',RegisterSchema);
module.exports = Register;
