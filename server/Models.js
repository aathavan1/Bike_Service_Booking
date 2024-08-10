const { default: mongoose } = require('mongoose')

mongoose.connect('mongodb+srv://susmithaadhavan:123@cluster0.9bjht.mongodb.net/aathavan');


const UserSchema = new mongoose.Schema({
    mail: {

        type: String,
        require: true
    },
    phone: {

        type: String,
        require: true
    },
    regnum: {

        type: String,
        require: true
    },
    s_oil:{
        type:String,
        require:true
    },
    s_general:{
        type:String,
        require:true
    },
    s_water:{
        type:String,
        require:true
    },
    stat: {
        type: String,
        require: true
    }
},{versionKey:false})


const UserModel = mongoose.model("details", UserSchema)

module.exports = UserModel;
