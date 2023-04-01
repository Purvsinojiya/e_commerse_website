const express = require('express');
const router =express.Router();
require('./conn.js')
const Register=require('./register.js');

router.post('/register',(req,res) => {
    const { name , password ,number ,email } = req.body;
    if(!name || !password || !number || !email){
        return res.status(422).json({error:"please filled block"})
    }
    const register=new Register({ name,password,number,email})
    register.save().then(()=>{
        res.status(201).json({message:"user is registered successfully"})
    }).catch((err) => res.status(500).json({ error:"faied"}))
});
module.exports = router;
