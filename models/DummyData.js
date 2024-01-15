const mongoose = require('mongoose')



const dummyDataSchema = mongoose.Schema({  
    userId :  { 
        type :String , 
        required :true
    },  
    username:  { 
        type : String , 
        required :true
        
    },
    email :  { 
        type :String , 
        required :true
        
    },  
    avatar:  { 
        type : String , 
        required :true
        
    },
    birthDate:  { 
        type : String, 
        required :true
    } 

})


const DummyData = mongoose.model('DummyData' , dummyDataSchema) ; 
module.exports = DummyData