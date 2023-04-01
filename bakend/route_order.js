const express = require('express');
const router =express.Router();
require('./conn.js')
const Order=require('./order.js');

router.post('/order',(req,res) => {
    const { name,email,Address,number,city,Pincode,Quienty} = req.body;
    if(!name || !email || !Address || !number || !city || !Pincode|| !Quienty){
        return res.status(422).json({error:"please filled block"})
    }
    const order=new Order({ name,email,Address,number,city,Pincode,Quienty})
    order.save().then(()=>{
        res.status(201).json({message:"user is registered successfully"})
    }).catch((err) => res.status(500).json({ error:"faied"}))
});
module.exports = router;