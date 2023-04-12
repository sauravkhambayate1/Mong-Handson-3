const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    firstName: {type:String, required: Boolean},
    lastName: {type:String, required: Boolean},
    age: Number,
    email: String,
    mobile: String
})

const Information = mongoose.model("information", studentSchema)
module.exports = {Information}