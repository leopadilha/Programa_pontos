const mongoose = require('mongoose')

const connect = process.env.MONGO_URI || 'mongodb+srv://root:root@cluster0.mopwaov.mongodb.net/?retryWrites=true&w=majority'

const connectionDb = async () => { 
    mongoose.connect(connect,{
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        }     
    )

    console.log('connected database in uri', connect)
}
module.exports = connectionDb;