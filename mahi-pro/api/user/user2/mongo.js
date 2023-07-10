
const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/mahiDB")
.then(()=>{
    console.log("conected to database")
})
.catch(()=>{
    console.log("failed to connect database")
})

const newSchema =  mongoose.Schema(
    {
        fname: { type: String, required: true},
        lname: { type: String, required: true},
        email: { type: String, required: true},
        gender: { type: String, required: true},
        dob: { type: String, required: true},
        phone: { type:Number, required: true},
        password: { type: String, required: true},
        cPassword: { type: String, required: true}
    },
)

const collection = mongoose.model("collection" , newSchema);
module.exports = collection ;