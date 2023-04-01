const express = require('express');
const router =express.Router();

require('./conn.js')
const User=require('./user.js');
router.get('/',(req,res) => {
    res.send("hello home page router js");
});
router.post('/login',(req,res)=>
{

const { name , password } = req.body;

if(!name || !password){
    return res.status(422).json({error:"please filled block"})
}
User.findOne({name:name}).then((userExist)=>{
    if(userExist){
        return res.status(422).json({error:"please filled block"})
    }
    const user=new User({name,password})
    user.save().then(()=>{
        res.status(201).json({message:"user is registered successfully"})
    }).catch((err) => res.status(500).json({ error:"faied"}))
}).catch(err=>{ console.log(err) });

});
router.post('/signin', async(req, res) => {
 try {
    const {name, password} = req.body;
    if(!name || !password) 
    return res.status(400).json({error:"invlid"})
 
  const userLogin= await User.findOne({name,password});
if(!userLogin)
{
    return res.status(404).json({error:"error"})
}
else{
  res.json({message:"success",})
}
 }catch(err){
    console.log(err);
 }

});

module.exports = router;