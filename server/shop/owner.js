const UserModel = require("../Models")
const mailer = require('./mail')




// route.get("/view", (owner.detailBike))
const detailBike = (req, res) => {
    UserModel.find().then(function (user) {
        res.json(user)
        // console.log("Bike details was view by the shop owner")
    }).catch(function (err) {
        res.json(err)
    })
}


// route.put("/update/:id", (owner.changeStatus))
const changeStatus = async (req, res) => {

    const id = req.params.id
    await UserModel.updateOne({ "_id": id }, { "stat": req.body.stat })
    UserModel.find({
        "_id": id
    }).then(function (users) {
        let [a] = users
        console.log("UPDATED")
        console.log(req.body.stat)
        if (req.body.stat == "Completed") {
            mailer.mail_send(a.mail, "Aathavan Bike Service Center", "Dear Customer Your Bike Has completed their service ", a.regnum+" please get in on time")
            console.log("generated")
        }
        res.json(users)
    })
}


const deletebike= async(req,res)=>{
    await UserModel.findByIdAndDelete(req.params.id);

}


module.exports = {
    detailBike,
    changeStatus,
    deletebike
}