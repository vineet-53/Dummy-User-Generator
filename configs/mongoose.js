const mongoose = require('mongoose')

require('dotenv').config()

exports.connect  = async () => { 
    try  { 
        await mongoose.connect(process.env.DB_URL); 

    }catch(err) { 
        console.error("**************** mongoose not connected ****************")
        console.error(err) 
    }
}