const express = require('express')
const route = express.Router();
const customer = require('../shop/customer')




route.post("/create", (customer.createBike))

route.put("/find/:id", (customer.stat))


module.exports = route;