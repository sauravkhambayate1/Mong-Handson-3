const mongoose = require('mongoose')
const url = 'mongodb+srv://sauravkhambayate221:Saurav123@cluster0.d9nult5.mongodb.net/student?retryWrites=true&w=majority'
const connect = async()=>{
    try{
        console.log("Connecting to mongodb..")
        const dbconnection = await mongoose.connect(url)
    }
    catch(error){
        console.log("error occured in connecting to database", error.message)
    }
}

module.exports = connect;