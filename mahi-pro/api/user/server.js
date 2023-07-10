const express = require('express');


const app = express();


app.listen(8000,()=>{
    console.log("server is running with port 8000");

})

app.get("/signup",(req,res)=>{
    res.send({"name":"Darshan"})  
})