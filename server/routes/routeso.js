const express = require('express')
const route= express.Router();
const owner = require('../shop/owner')


route.get("/view", (owner.detailBike))





route.put("/update/:id", (owner.changeStatus))
route.delete("/delete/:id", (owner.deletebike))

module.exports=route