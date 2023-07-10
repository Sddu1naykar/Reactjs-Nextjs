const express = require('express');
const model = require("./userModel");

let router = express.Router();

module.exports = {

    //signup
    userSignup: router.post("/",(req, res)=>{
        let user = new model({
            fname: req.body.fname,
            lname: req.body.lname,
            email: req.body.email,
            gender: req.body.gender,
            dob: req.body.gender,
            phone: req.body.phone,
            password: req.body.password,
            cPassword: req.body.cPassword
        });
        user.save()
        res.status(200).send(user)
    }),
    
    //login
    userLogin: router.post("/email/password", (req, res)=>{
        model.findOne({ email: req.header.email})
        .then((user)=>{
            if(user.password===req.header.password){
                res.status(200).send("Login Sucessfull")
            }else{
                res.status(400).send("Incorrect password")
            }
        }).catch(()=>{
            res.status(400).send("User not found")
        })
    }),
    
}