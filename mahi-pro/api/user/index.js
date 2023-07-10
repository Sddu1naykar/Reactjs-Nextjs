const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const route = require('./userController');
const UserData = require('./userModel');
const cors = require('cors')

const app = express();
PORT = 8000;

http.createServer(app).listen(PORT, ()=>{
    console.log(`Express server started at port no : ${PORT}`);
});
const URI = "mongodb://127.0.0.1:27017/mahiDB";
let config = {
    mongo : {
        options : {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    }
};

mongoose.set("strictQuery", true);
mongoose.connect(URI, config.mongo.options)
.then(()=>{
    console.log("user database connected");
}).catch((err)=>{
    console.log(err);
});

app.use(express.json());
app.use(cors({
    origin:"http://localhost:3000",
    methods:["GET","POST"],
}))
app.use("/userSignup", route.userSignup);
app.use("/userLogin", route.userLogin);

app.get("/",(req,res)=>{


})


app.post("/",cors(),async(req,res)=>{
    const {Userdata} = req.body

    const data = {
        Userdata : Userdata ,
    }

    // await Userdata.insertMany([data])
})