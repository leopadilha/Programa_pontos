const mongoose = require('mongoose')

const connectionDb = async () => { 
    mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        }     
    )

    console.log('connected database in uri', process.env.MONGO_URI)
}
module.exports = connectionDb;