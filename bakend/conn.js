const mongoose=require('mongoose');
const DB= 'mongodb+srv://P:poorv1234@cluster0.zd4ofda.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(DB,{
    useNewUrlparser:true, 
}).then(()=>{
    console.log("connection suc");
})