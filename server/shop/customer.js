const UserModel = require("../Models")
const mailer = require("./mail")


const createBike = async (req, res) => {
    const data = new UserModel({
        "mail": req.body.mail,
        "phone": req.body.phone,
        "regnum": req.body.regnum,
        "s_oil": req.body.s_oil,
        "s_general": req.body.s_general,
        "s_water": req.body.s_water,
        "stat": req.body.stat,
    })
    try {
        await data.save()
        mailer.mail_send("susmithaadhavan9@gmail.com",
            "You have a new Registration of",
            "Register Number : ",
            req.body.regnum)
        mailer.mail_send(req.body.mail,
            "Aathavan Bike Service Center",
            "Dear Customer Your have booked a service of  ",
            req.body.regnum + " ww will make it as soon as possible")
        res.status(200).json({
            "message": data
        })
    } catch {
        res.status(500).json({
            "message": "error"
        })
    }
}


// route.get("/find/:id", (customer.stat))
const stat = (req, res) => {
    UserModel.find({
        "_id": req.params.id
    })
        .then((data) => {
            console.log(req.params.id)
            console.log(data)
            res.json(data)
        })
        .catch((err) => { console.log("error: " + err) })
}

module.exports = {
    createBike,
    stat
}
