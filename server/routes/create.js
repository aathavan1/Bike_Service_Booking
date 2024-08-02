const express = require('express')
const route = express.Router();
const ModelUser = require('../Modeluser');


route.post('/add', async (req,res)=>{
    const data= new ModelUser({
        "username":req.body.username,
        "password":req.body.password
    })

    
    try{
        await data.save()
        res.json(data)
    }
    catch{
        console.log("Error");
    }
});

module.exports = route;