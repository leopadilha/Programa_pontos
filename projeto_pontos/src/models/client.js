const mongoose = require('mongoose')

const client = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    document:{
        type: String,
        unique: true,
    },
    spots:{
        type: Number,
        default: 0,
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
})


module.exports = mongoose.model("client", client)