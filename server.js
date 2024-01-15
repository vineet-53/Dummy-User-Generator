const express = require('express')
require('dotenv').config()
const app = express() 
const PORT = process.env.PORT || 8000
const {getRandmonDummyData, getDummyDataWithId} = require('./controllers/DummyData')
const mongoose = require('./configs/mongoose')

// mongoose connection
mongoose.connect() 

// api route
app.get('/get-dummy-data' , getRandmonDummyData)
app.get('/get-dummy-data/:id' , getDummyDataWithId)
// default route
app.get('/' , (req ,res)=> { 
    res.send('DUMMY DATA server is running')
})

// server 
app.listen(PORT , (err) => { 
    if(err) console.error('problem running server')
    console.log('server is running at port' , PORT)
})