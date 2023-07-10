

const express = require('express');
const cors = require('cors')
const collection  =require('./mongo');
const app = express();
app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use(cors());

app.get("/",cors(),(req,res)=>{

})
app.post("/",cors(), async(req,res)=>{
    const {userData} = req.body ;

    const data = {
        userData : userData ,
    }

    await collection.insertMany([userData]);
})

app.listen(8000,()=>{
    console.log("server started with port 8000")
})