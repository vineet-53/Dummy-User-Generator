const {generateDummyData} = require ( "../utils/generateDummyData")
const DummyData = require('../models/DummyData')
exports.getRandomDummyData = async(req ,res)=> { 
    try { 
        const randomDataPayload = await generateDummyData() 
        await DummyData.create(randomDataPayload) 
        return res.status(200).json( { 
            success : true , 
            message : "fetched a dummy data",
            DummyData
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
        const dummyData = await DummyData.findById(id); 
        if(!dummyData) { 
            throw new Error  ('dummy data not present in db sorry')
        }
        return res.status(200).json({ 

            success :true, 
            message : "here is your data" , 
            dummyData
        })
    }catch(err) { 
        return res.status(401).json({  
            success  :false,  
            message : err.message
        })
    }
}