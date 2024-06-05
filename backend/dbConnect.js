const mongoose=require('mongoose')
const dotenv=require('dotenv').config()
//const db="mongodb+srv://devansh:devanshNode@cluster0.4uazztf.mongodb.net/Elex?retryWrites=true&w=majority"
const db="mongodb+srv://singhsahil140404:jaysahil987@cluster0.97u4sah.mongodb.net/Untitled?retryWrites=true&w=majority"
mongoose.connect(db,{
    useNewUrlParser:true,
   // useCreateIndex:true,
    useUnifiedTopology:true,
    //useFindAndModify:false
}).then(()=>{
    console.log('Connection Succesful');
}).catch((err)=>console.log('no connection'));