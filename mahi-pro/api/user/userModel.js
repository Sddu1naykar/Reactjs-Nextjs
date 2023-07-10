const  mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
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
    {
        timestamps: true
    }
);

const Userdata = mongoose.model("Userdata", userSchema);
module.exports = Userdata;