const {generateDummyData} = require ( "../utils/generateDummyData")
const DummyData = require('../models/DummyData')
exports.getRandomDummyData = async(req ,res)=> { 
    try { 
        const randomDataPayload = await generateDummyData() 
        const data =await DummyData.create(randomDataPayload) 
        console.log(data)
        return res.status(200).json( { 
            success : true , 
            message : "fetched a dummy data",
            data : randomDataPayload
        })
    }catch(err) { 
        return res.status(401).json({  
            success  :false,  
            message : err.message
        })
    }
}

exports.getDummyDataWithId = async (req, res) => { 
    try { 

        const  {id} = req.params; 
        if(!id) { 
            throw new Error('id not recieved')
        }
        const dummyData = await DummyData.findOne({userId : id}); 
        if(!dummyData) { 
            throw new Error  ('dummy data not present in db sorry')
        }
        return res.status(200).json({ 

            success :true, 
            message : "here is your data" , 
            data : dummyData
        })
    }catch(err) { 
        return res.status(401).json({  
            success  :false,  
            message : err.message
        })
    }
}