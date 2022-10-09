const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const user = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    document:{
        type: String,
        unique: true,
    },
    createdAt:{
        type: Date,
        default: Date.now,
    },
    password:{
        type: String,
        required: true,
    },
    roles:{
        type: String,
        enum : ["Admin", "Employee"],
        default: "Employee",
    }
})

user.pre('save', async function (next) {
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password,salt)   
})

module.exports = mongoose.model("user", user)