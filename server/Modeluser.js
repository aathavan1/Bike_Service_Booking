const { default: mongoose } = require('mongoose')

mongoose.connect('mongodb://localhost:27017/aathavan');


const UserSchema = new mongoose.Schema({
    username: {

        type: String,
        require: true
    },
    password: {

        type: String,
        require: true
    }
},{versionKey:false})


const ModelUser = mongoose.model("users", UserSchema)

module.exports = ModelUser;
